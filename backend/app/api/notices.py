# Code handling Digital Notice Board posts
# backend/app/api/notices.py
from flask import Blueprint, jsonify, current_app
from core.logger import app_logger
from core.exceptions import ResourceNotFoundError
from core.utils import is_valid_institute_email, validate_cas_number

notices_bp = Blueprint('notices', __name__)

@notices_bp.route("/api/notices", methods=["GET"])
def get_notices():
    app_logger.info("Someone requested the notice board.")
    notices = [
        {"id": 1, "title": "NMR Maintenance", "content": "Down on Friday.", "author": "Lab Manager"}
    ]
    return jsonify(notices)

# --- THE EXISTING EXCEPTION TEST ---
@notices_bp.route("/api/test-error", methods=["GET"])
def test_error():
    app_logger.warning("Test error route triggered!")
    raise ResourceNotFoundError("Chemical Database")

# --- THE NEW DIAGNOSTICS TEST ---
@notices_bp.route("/api/diagnostics", methods=["GET"])
def run_diagnostics():
    # 1. Test Logger
    app_logger.info("Running system diagnostics...")

    # 2. Test Config (Checking if the database URL was loaded from .env)
    # We don't print the actual URL for security, just whether it loaded successfully
    db_url = current_app.config.get('SQLALCHEMY_DATABASE_URI')
    config_working = db_url is not None

    # 3. Test Utils (Testing our email and CAS number logic)
    # Using the standard student mail format and a real CAS (Formaldehyde: 50-00-0)
    utils_results = {
        "valid_student_email_test": is_valid_institute_email("student@smail.iitm.ac.in"),
        "invalid_public_email_test": is_valid_institute_email("random@gmail.com") == False,
        "valid_cas_format_test": validate_cas_number("50-00-0"),
        "invalid_cas_format_test": validate_cas_number("12345678") == False
    }

    return jsonify({
        "status": "Diagnostics Complete",
        "config_loaded_successfully": config_working,
        "utils_tests_passed": all(utils_results.values()),
        "utils_details": utils_results
    })