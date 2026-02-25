# backend/app/core/exceptions.py
from flask import jsonify

class APIException(Exception):
    """Base custom exception for the application."""
    def __init__(self, message, status_code=400):
        super().__init__()
        self.message = message
        self.status_code = status_code

    def to_dict(self):
        return {"error": self.message, "status_code": self.status_code}

class ResourceNotFoundError(APIException):
    def __init__(self, resource_name):
        super().__init__(f"The requested {resource_name} could not be found.", 404)

class InstrumentAlreadyBookedError(APIException):
    def __init__(self, instrument_name, time_slot):
        super().__init__(f"{instrument_name} is already booked for {time_slot}.", 409)

# We will attach this to your main Flask app
def register_error_handlers(app):
    @app.errorhandler(APIException)
    def handle_api_exception(error):
        return jsonify(error.to_dict()), error.status_code