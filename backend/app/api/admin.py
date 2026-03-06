from flask import Blueprint, jsonify, request
from app.models.database import db, User, FacultyProfile, StudentProfile
from app.core.logger import app_logger
from flask_jwt_extended import jwt_required, get_jwt_identity, get_jwt

bp = Blueprint('admin', __name__, url_prefix='/api/admin')

# --- HELPER SECURITY FUNCTION ---
def require_admin():
    """Ensures only the Super Admin can access these routes."""
    claims = get_jwt()
    if claims.get('role') != 'admin':
        return False
    return True

# ---------------------------------------------------------
# 1. GET ALL USERS (Simplified with to_dict)
# ---------------------------------------------------------
@bp.route('/users', methods=['GET'])
@jwt_required()
def get_all_users():
    if not require_admin():
        return jsonify({"error": "Unauthorized. Admin access required."}), 403

    # Use the helper we added to the User model for clean data
    users = User.query.all()
    return jsonify([user.to_dict() for user in users]), 200

# ---------------------------------------------------------
# 2. THE KILL SWITCH (Fixed for 'status' column)
# ---------------------------------------------------------
@bp.route('/users/<int:user_id>/toggle-status', methods=['PUT'])
@jwt_required()
def toggle_user_status(user_id):
    if not require_admin():
        return jsonify({"error": "Unauthorized. Admin access required."}), 403

    user = db.session.get(User, user_id)
    if not user:
        return jsonify({"error": "User not found."}), 404
        
    current_admin_id = get_jwt_identity()
    if str(user.id) == str(current_admin_id):
         return jsonify({"error": "You cannot suspend your own admin account!"}), 400

    # Toggle between Active and Suspended
    if user.status == 'Active':
        user.status = 'Suspended'
    else:
        user.status = 'Active'
        
    db.session.commit()

    app_logger.info(f"Admin toggled User ID {user_id} status to {user.status}.")
    
    return jsonify({
        "message": f"User account has been {user.status}.", 
        "is_active": user.status == 'Active'
    }), 200

# ---------------------------------------------------------
# 3. REGISTER NEW USER (Internal Admin Tool)
# ---------------------------------------------------------
@bp.route('/users', methods=['POST'])
@jwt_required()
def create_user():
    if not require_admin():
        return jsonify({"error": "Unauthorized. Admin access required."}), 403

    data = request.get_json()
    email = data.get('email')
    password = data.get('password')
    role = data.get('role')

    if not email or not password or not role:
        return jsonify({"error": "Missing required fields."}), 400

    if User.query.filter_by(email=email).first():
        return jsonify({"error": "User with this email already exists."}), 400

    try:
        # Create Master Account with default Active status
        new_user = User(email=email, role=role, status='Active')
        new_user.set_password(password)
        db.session.add(new_user)
        db.session.flush() 

        # Build Profiles
        if role == 'student':
            profile = StudentProfile(
                user_id=new_user.id,
                first_name=data.get('first_name', ''),
                last_name=data.get('last_name', ''),
                roll_number=data.get('roll_number', ''),
                program=data.get('program', 'BS Chemistry')
            )
            db.session.add(profile)
            
        elif role == 'faculty':
            profile = FacultyProfile(
                user_id=new_user.id,
                first_name=data.get('first_name', ''),
                last_name=data.get('last_name', ''),
                title=data.get('title', 'Prof.'),
                designation=data.get('designation', 'Assistant Professor')
            )
            db.session.add(profile)

        db.session.commit()
        app_logger.info(f"Admin created a new {role} account: {email}")
        return jsonify({"message": f"{role.capitalize()} created successfully!"}), 201

    except Exception as e:
        db.session.rollback()
        app_logger.error(f"Error creating user: {str(e)}")
        return jsonify({"error": "Database error while creating user."}), 500