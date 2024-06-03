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
        return f'<User: {self.email}>' # esto sirve para que aparezca el email que he creado

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
    description = db.Column(db.String(), nullable=False)
    body = db.Column(db.String(), nullable=False)
    date_publication = db.Column(db.Date(), nullable=False)
    imagen_url = db.Column(db.String(), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    user_to = db.relationship('Users', foreign_keys=[user_id])

    def __repr__(self):
        return f'<User: {self.title}>'

    def serialize(self):
         # do not serialize the password, its a security breach
        return { #esto es un diccionario (objeto en js)
            "id": self.id,
            'title': self.title,
            'description': self.description,
            'body': self.body,
            'date_publication': self.date_publication,
            'imagen_url': self.imagen_url,
            'user_id': self.user_id,
            }


class Comments(db.Model):
    id = db.Column(db.Integer(), primary_key=True)
    body = db.Column(db.String(), nullable=False)
    date = db.Column(db.Date(), nullable=False)
    author_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    author_to = db.relationship('Users', foreign_keys=[author_id])
    post_id = db.Column(db.Integer, db.ForeignKey('posts.id'))
    post_to = db.relationship('Posts', foreign_keys=[post_id])

    def __repr__(self):
        return f'<User: {self.body}>'

    def serialize(self):
         # do not serialize the password, its a security breach
        return {"id": self.id,
            'body': self.body,
            'date': self.date,
            'author_id': self.author_id,
            'post_id': self.post_id}


class Characters(db.Model):
    id = db.Column(db.Integer(), primary_key = True)
    name = db.Column(db.String(), nullable = False)
    description = db.Column(db.String(), nullable = False)
    home_World = db.Column(db.Integer, db.ForeignKey('planets_id'))
    home_World_to = db.relationship('Planets')

    def __repr__(self):
        return f'<User: {self.name}>'

    def serialize(self):
         # do not serialize the password, its a security breach
        return { #esto es un diccionario (objeto en js)
            "id": self.id,
            'name': self.name,
            'description': self.description,
            'home_World': self.home_World,
            }

# class CharactersFilms(db.Model):
    # id = db.Column(db.Integer(), primary_key = True)
    # role = db.Column(db.String(), nullable = True)
    # character_id = db.Column(db.Integer(), db.ForeignKey('characters_id'))
    # character_to = db.relationship('Characters')
    # film_id = db.Column(db.Integer(), db.ForeignKey('films_id'))
    # film_to = db.relationship('Films')
      
    # def __repr__(self):
    #     return f'<User: {self.role}>'

    # def serialize(self):
    #      # do not serialize the password, its a security breach
    #     return { #esto es un diccionario (objeto en js)
    #         "id": self.id,
    #         'role': self.role,
    #         'character_id': self.character_id,
    #         'film_id': self.film_id,
    #         }

# class Films(db.Model):
#     id = db.Column(db.Integer(), primary_key = True)
#     name = db.Column(db.String(), nullable = False)
#     release = db.Column(db.Date(), nullable = False)
#     director = db.Column(db.String(), nullable = False)

#     def __repr__(self):
#         return f'<User: {self.name}>'

#     def serialize(self):
#          # do not serialize the password, its a security breach
#         return { #esto es un diccionario (objeto en js)
#             "id": self.id,
#             'name': self.name,
#             'release': self.release,
#             'director': self.director,
#             }

# class Planets(db.Model):
    # id = db.Column(db.Integer(), primary_key = True)
    # name = db.Column(db.String(), nullable = False)
    # diemeter = db.Column(db.Float(), nullable = False)

    # def __repr__(self):
    #     return f'<User: {self.name}>'

    # def serialize(self):
    #      # do not serialize the password, its a security breach
    #     return { #esto es un diccionario (objeto en js)
    #         "id": self.id,
    #         'name': self.name,
    #         'diemeter': self.diemeter,
    #         }