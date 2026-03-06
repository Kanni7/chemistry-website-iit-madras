import os
from flask_jwt_extended import JWTManager
from flask import Flask, jsonify
from flask_cors import CORS
from flask_migrate import Migrate

from app.core.config import config_by_name
from app.core.logger import app_logger
from app.core.exceptions import register_error_handlers, ResourceNotFoundError
from app.models.database import db

app = Flask(__name__)
# Handles cross-origin requests for your React frontend
CORS(app)

# Load Configuration
app.config.from_object(config_by_name['dev'])
app.config['JWT_SECRET_KEY'] = 'super-secret-iitm-chemistry-key!' 
jwt = JWTManager(app)

# Initialize Database
db.init_app(app)
migrate = Migrate(app, db)

# ==========================================
# THE FOOLPROOF AUTO-BUILDER (LMS UPGRADED)
# ==========================================
with app.app_context():
    # UPDATED: Importing the new Enterprise LMS models
    from app.models.database import (
        User, FacultyProfile, StudentProfile, Notice, 
        AcademicTerm, CourseMaster, CourseOffering
    )
    
    # 1. THE NUCLEAR OPTION: Destroy the old conflicting tables if needed
    # Only uncomment the line below if you change the database structure again
    # db.drop_all() 
    
    # 2. Rebuild the brand new LMS Architecture
    db.create_all()
    
    # Ensure a Super Admin exists to manage the new system
    admin_exists = User.query.filter_by(role='admin').first()
    if not admin_exists:
        # Using 'status' field to match your Admin UI and security logic
        super_admin = User(email='admin@smail.iitm.ac.in', role='admin', status='Active')
        super_admin.set_password('admin123')
        db.session.add(super_admin)
        db.session.commit()
        # NO EMOJI: Prevents UnicodeEncodeError on Windows Command Prompt
        app_logger.info("Super Admin generated with Advanced LMS Schema!")

register_error_handlers(app)
app_logger.info("Chemistry Department Server initialized successfully.")

# ==========================================
# ALL API BLUEPRINTS (THE PIPES)
# ==========================================
from app.api import notices, auth, admin, student, faculty

app.register_blueprint(notices.bp)
app.register_blueprint(auth.bp)
app.register_blueprint(admin.bp)
app.register_blueprint(student.bp)
app.register_blueprint(faculty.bp)

# ==========================================
# SECURITY OVERRIDE: BLOCK SUSPENDED USERS
# ==========================================
@jwt.user_lookup_loader
def user_lookup_callback(_jwt_header, jwt_data):
    """
    Automatically checks user status on every protected request.
    If a user is 'Suspended', the API will return 401/403.
    """
    identity = jwt_data["sub"]
    
    from app.models.database import User
    # CRITICAL FIX: Lookup by ID (primary key) to match JWT identity
    user = db.session.get(User, int(identity))
    
    if user and getattr(user, 'status', 'Active') == 'Suspended':
        return None # Effectively blocks access
    return user

@app.route("/api/test-error", methods=["GET"])
def test_error():
    app_logger.warning("Someone triggered the test error route!")
    raise ResourceNotFoundError("Chemical Database")

# ==========================================
# THE ENGINE: KEEPS THE SERVER AWAKE
# ==========================================
if __name__ == "__main__":
    app.run(port=8000, debug=True)