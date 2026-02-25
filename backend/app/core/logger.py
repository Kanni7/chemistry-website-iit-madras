# backend/app/core/logger.py
import logging
import os

def setup_logger():
    # Create a logs directory if it doesn't exist
    if not os.path.exists('logs'):
        os.makedirs('logs')

    logger = logging.getLogger('chemistry_app')
    logger.setLevel(logging.INFO)

    # File handler: writes logs to a file
    file_handler = logging.FileHandler('logs/chemistry_app.log')
    file_handler.setLevel(logging.INFO)

    # Console handler: prints logs to your terminal
    console_handler = logging.StreamHandler()
    console_handler.setLevel(logging.DEBUG)

    # Formatting: adds timestamps and severity levels
    formatter = logging.Formatter('%(asctime)s - %(levelname)s - %(message)s')
    file_handler.setFormatter(formatter)
    console_handler.setFormatter(formatter)

    logger.addHandler(file_handler)
    logger.addHandler(console_handler)

    return logger

# Create the logger instance to be imported across your app
app_logger = setup_logger()