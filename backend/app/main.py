# backend/app/main.py
import os
from flask import Flask, jsonify
from flask_cors import CORS

# Import your custom modules
from core.config import config_by_name
from core.logger import app_logger
from core.exceptions import register_error_handlers, ResourceNotFoundError
from models.database import db

app = Flask(__name__)
CORS(app)

# 1. Load the Configuration (using the 'dev' settings for now)
app.config.from_object(config_by_name['dev'])

# 2. Initialize Database (We will fully connect PostgreSQL later)
# For now, we just attach it to the app so it doesn't crash
db.init_app(app)

# 3. Register Custom Error Handlers
register_error_handlers(app)

# 4. Log that the server started
app_logger.info("Chemistry Department Server initialized successfully.")


# --- YOUR ROUTES (API ENDPOINTS) ---

@app.route("/api/notices", methods=["GET"])
def get_notices():
    app_logger.info("Someone requested the notice board.")
    # Mock data until we connect the database
    notices = [
        {
            "id": 1, 
            "title": "NMR Maintenance", 
            "content": "The 400 MHz NMR will be down for maintenance this Friday.", 
            "author": "Lab Manager"
        }
    ]
    return jsonify(notices)

@app.route("/api/test-error", methods=["GET"])
def test_error():
    app_logger.warning("Someone triggered the test error route!")
    # This purposefully triggers the custom error we wrote in exceptions.py
    raise ResourceNotFoundError("Chemical Database")

if __name__ == "__main__":
    app.run(port=8000, debug=True)