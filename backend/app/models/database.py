from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash
from datetime import datetime

db = SQLAlchemy()

# ==========================================
# BRIDGE TABLES (Updated for Advanced LMS)
# ==========================================
enrollments = db.Table('enrollments',
    db.Column('student_id', db.Integer, db.ForeignKey('student_profiles.id'), primary_key=True),
    db.Column('offering_id', db.Integer, db.ForeignKey('course_offerings.id'), primary_key=True)
)

teaching_assignments = db.Table('teaching_assignments',
    db.Column('faculty_id', db.Integer, db.ForeignKey('faculty_profiles.id'), primary_key=True),
    db.Column('offering_id', db.Integer, db.ForeignKey('course_offerings.id'), primary_key=True),
    db.Column('is_coordinator', db.Boolean, default=False)
)

# ==========================================
# TABLE 1: THE VAULT (Users & Security)
# ==========================================
class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password_hash = db.Column(db.String(256), nullable=False)
    role = db.Column(db.String(20), nullable=False)
    status = db.Column(db.String(20), default='Active') 
    
    faculty_profile = db.relationship('FacultyProfile', backref='user', uselist=False, cascade="all, delete-orphan")
    student_profile = db.relationship('StudentProfile', backref='user', uselist=False, cascade="all, delete-orphan")

    def set_password(self, password):
        self.password_hash = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password_hash, password)

    def to_dict(self):
        """Helper for Admin Dashboard to show detailed user info"""
        profile_details = "N/A"
        name = "User"
        
        if self.role == 'faculty' and self.faculty_profile:
            name = f"{self.faculty_profile.title} {self.faculty_profile.first_name} {self.faculty_profile.last_name}"
            profile_details = self.faculty_profile.designation
        elif self.role == 'student' and self.student_profile:
            name = f"{self.student_profile.first_name} {self.student_profile.last_name}"
            profile_details = f"{self.student_profile.roll_number} ({self.student_profile.program})"

        return {
            "id": self.id,
            "email": self.email,
            "role": self.role,
            "name": name,
            "details": profile_details,
            "is_active": self.status == 'Active'
        }

# ==========================================
# TABLE 2: FACULTY PROFILES
# ==========================================
class FacultyProfile(db.Model):
    __tablename__ = 'faculty_profiles'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    
    title = db.Column(db.String(20))
    first_name = db.Column(db.String(50), nullable=False)
    last_name = db.Column(db.String(50), nullable=False)
    designation = db.Column(db.String(100))
    office_room = db.Column(db.String(50))
    phone_ext = db.Column(db.String(20))
    research_areas = db.Column(db.Text)
    lab_name = db.Column(db.String(100))
    profile_picture_url = db.Column(db.String(255))
    
    advised_students = db.relationship('StudentProfile', backref='advisor', lazy='dynamic')

    def to_dict(self):
        return {
            "id": self.id,
            "name": f"{self.title} {self.first_name} {self.last_name}",
            "designation": self.designation,
            "research_areas": self.research_areas,
            "office_room": self.office_room
        }

# ==========================================
# TABLE 3: STUDENT PROFILES
# ==========================================
class StudentProfile(db.Model):
    __tablename__ = 'student_profiles'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    
    roll_number = db.Column(db.String(20), unique=True, nullable=False)
    first_name = db.Column(db.String(50), nullable=False)
    last_name = db.Column(db.String(50), nullable=False)
    program = db.Column(db.String(50))
    current_semester = db.Column(db.Integer)
    expected_graduation_year = db.Column(db.Integer)
    
    advisor_id = db.Column(db.Integer, db.ForeignKey('faculty_profiles.id'), nullable=True)

    def to_dict(self):
        return {
            "id": self.id,
            "roll_number": self.roll_number,
            "name": f"{self.first_name} {self.last_name}",
            "program": self.program,
            "semester": self.current_semester
        }

# ==========================================
# TABLE 4: NOTICES
# ==========================================
class Notice(db.Model):
    __tablename__ = 'notices'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    content = db.Column(db.Text, nullable=False)
    author = db.Column(db.String(50), nullable=False) 
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=True) 
    created_at = db.Column(db.DateTime, default=datetime.now)
    deadline = db.Column(db.DateTime, nullable=True)
    
    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'content': self.content,
            'author': self.author,
            'date': self.created_at.strftime('%Y-%m-%d %I:%M %p'),
            'deadline': self.deadline.strftime('%Y-%m-%d %I:%M %p') if self.deadline else None
        }

# ==========================================
# ADVANCED LMS TABLES
# ==========================================
class AcademicTerm(db.Model):
    __tablename__ = 'academic_terms'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), unique=True, nullable=False)
    status = db.Column(db.String(20), default='Active')

class CourseMaster(db.Model):
    __tablename__ = 'course_masters'
    id = db.Column(db.Integer, primary_key=True)
    course_code = db.Column(db.String(20), unique=True, nullable=False)
    course_name = db.Column(db.String(150), nullable=False)

class CourseOffering(db.Model):
    __tablename__ = 'course_offerings'
    id = db.Column(db.Integer, primary_key=True)
    master_id = db.Column(db.Integer, db.ForeignKey('course_masters.id'))
    term_id = db.Column(db.Integer, db.ForeignKey('academic_terms.id'))
    
    master = db.relationship('CourseMaster', backref='offerings')
    term = db.relationship('AcademicTerm', backref='offerings')
    
    students = db.relationship('StudentProfile', secondary=enrollments, backref=db.backref('enrolled_offerings', lazy='dynamic'))
    instructors = db.relationship('FacultyProfile', secondary=teaching_assignments, backref=db.backref('teaching_offerings', lazy='dynamic'))