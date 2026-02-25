# backend/app/main.py (Snippet of the new setup)
from flask import Flask, jsonify
from flask_cors import CORS
from core.config import config_by_name
from core.logger import app_logger
from core.exceptions import register_error_handlers, ResourceNotFoundError
#from models.database import db

app = Flask(__name__)
CORS(app)

# 1. Load the Configuration
app.config.from_object(config_by_name['dev'])

# 2. Initialize Database
db.init_app(app)

# 3. Register Custom Error Handlers
register_error_handlers(app)

# 4. Log that the server started successfully
app_logger.info("Chemistry Department Server initialized successfully.")

# ... rest of your routes go here ...