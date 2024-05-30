from flask_sqlalchemy import SQLAlchemy


db = SQLAlchemy()

class Users(db.Model):
    # Aquí van los atributos    
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    first_name = db.Column(db.String(), unique=False, nullable=True)
    last_name = db.Column(db.String(), unique=False, nullable=True)

    def __repr__(self):
        return f'<User: {self.email}>' # esto sirve para que aparezca el email que he cread

    def serialize(self):
         # do not serialize the password, its a security breach
        return { #esto es un diccionario (objeto en js)
            "id": self.id,
            "email": self.email,
            'is_active': self.is_active,
            'first_name': self.last_name,
            'last_name': self.last_name
            }


class Posts(db.Model):
    id = db.Column(db.Integer(), primary_key=True)
    title = db.Column(db.String(), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    user_to = db.relationship('Users', foreign_keys=[user_id])

    def __repr__(self):
        return f'<User: {self.email}>'

    def serialize(self):
         # do not serialize the password, its a security breach
        return { #esto es un diccionario (objeto en js)
            "id": self.id,
            'title': self.title,
            'user_id': self.user_id,
            }