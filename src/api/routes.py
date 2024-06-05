"""
Este módulo se encarga de iniciar el servidor API, cargar la base de datos y agregar los endpoints.
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from flask_jwt_extended import jwt_required
from flask_jwt_extended import get_jwt_identity
from api.models import db, Users                

api = Blueprint('api', __name__)
CORS(api) # Permitir solicitudes CORS a esta API


# Create a route to authenticate your users and return JWTs. The
# create_access_token() function is used to actually generate the JWT.


@api.route("/hello", methods=["GET"])
def handle_hello():
    response_body={}
    response_body['message'] = "Hello!I'm a message that came from the backend"
    return response_body, 200


@api.route("/users", methods=["GET", 'POST'])  #el POST de users lo haremos en el signup
def handle_user():
    response_body = {}
    if request.method == 'GET':
        rows = db.session.execute(db.select(Users)).scalars()
        print(users)
        # Almaceno en result(variable) una lista con todos los serializes que stán en models (users)
        results = [row.serialize() for row in rows]
        print(results)
        # en response body almaceno los results que son los datos que hemos obtenido del serialize.
        response_body['results'] = results
        response_body['message'] = 'Listado de resultados'
        return response_body, 200
    if request.method == 'POST':
        response_body['message'] = "Este endpoint no es valid, debe de hacer un /singup"
        return response_body, 200


@api.route('/users/<int:user_id>', methods=['GET', 'PUT', 'DELETE'])
def handle_users(user_id):
    response_body = {}
    if request.method == 'GET':
        # Esto es una variable user, en la que selecciona del modelo users y donde users.id  = id que le estoy pasando como parámetro a handle_users
        user = db.session.execute(db.select(Users).where(Users.id == user_id)).scalar()
        if user:
            response_body['results'] = user.serialize()
            response_body['message'] = 'Usuario encontrado'
            return response_body, 200
        response_body['message'] = 'Usuario inexistente'
        response_body['results'] = {}
        return response_body, 404
        
    if request.method == 'PUT':
        data = request.json
        print(data)
        # en una variable(user) ejecuto un select de la tabla users donde Users id es igual userId y devuelve una escala
        user = db.session.execute(db.select(Users).where(Users.id == user_id)).scalar()
        # si user tiene algo le pongo los datos: user email, user active, user last name...etc
        if user:
            user.email = data['email']
            user.is_active = data['is_active']
            user.last_name = data['last_name']
            user.first_name = data['first_name']
            # con el session commit hace que ese user se grabe en la base de datos
            db.session.commit()            
            response_body['message'] = "usuario actualizado"
            response_body['results'] = user.serialize()
            return response_body, 200
        response_body['message'] = 'Usuario inexistente'
        response_body['results'] = {}
        return response_body, 404
        

    if request.method == 'DELETE':
        user = db.session.execute(db.select(Users).where(Users.id == user_id)).scalar()
        if user:
            db.session.delete(user)
            db.session.commit()
            response_body['message'] = "Usuario eliminado"
            response_body['results'] = {}
        response_body['message'] = 'Usuario inexistente'
        response_body['results'] = {}
        return response_body, 200











@api.route("/login", methods=["POST"])
def login():
    response_body = {}
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    # Lógica de validación de email y contraseña
    user = db.session.execute(db.select(Users).where(Useres.enaim == email, Users.password == password, Users.is_active == True).scalar())
    if user: 
        acces_token = create_access_token(identify=email)
        response_body['message'] = 'User logeado'
        response_body['access_toke'] = acces_token
        return response_body, 
    response_body['message'] = 'Bad username or password logeado'
    return response_body, 401




@api.route("/signup", methods=["POST"])
def signup():

    #Obtener el cuerpo de la solucitud en formato JSON
    body =  request.get_json()
    print(body)

    user = User.query.filter_by(email )













#     @api.route("/profile", methods=["GET"])
# @jwt_required()
# def protected():
#     response_body = {}
#     # Access the identity of the current user with get_jwt_identity
#     current_user = get_jwt_identity()
#     print(current_user)
#     response_body['message'] = f'User logueado: {current_user}'
#     return response_body, 200

#     access_token = create_access_token(identity=username)
#     return jsonify(access_token=access_token)


#     response_body = {}
#     response_body['message'] = "Hello! I'm a message that came from the backend"

#     return jsonify(response_body), 200
