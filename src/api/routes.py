"""
Este módulo se encarga de iniciar el servidor API, cargar la base de datos y agregar los endpoints.
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from api.models import db, Users               

api = Blueprint('api', __name__)
CORS(api) # Permitir solicitudes CORS a esta API

@api.route('/hello', methods=['GET'])
def handle_hello():
    response_body = {}
    response_body['message'] = "Hello! I'm a message that came from the backend"

    return jsonify(response_body), 200
