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

@api.route('/hello', methods=['GET'])
def handle_hello():


# Create a route to authenticate your users and return JWTs. The
# create_access_token() function is used to actually generate the JWT.
 @api.route("/login", methods=["POST"])
def login():
    response_body = {}
    username = request.json.get("email", None)
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



    @api.route("/profile", methods=["GET"])
@jwt_required()
def protected():
    response_body = {}
    # Access the identity of the current user with get_jwt_identity
    current_user = get_jwt_identity()
    print(current_user)
    response_body['message'] = f'User logueado: {current_user}'
    return response_body, 200

    access_token = create_access_token(identity=username)
    return jsonify(access_token=access_token)


    response_body = {}
    response_body['message'] = "Hello! I'm a message that came from the backend"

    return jsonify(response_body), 200
