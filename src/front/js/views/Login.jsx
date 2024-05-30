import React, { useContext, useState } from "react";
import {Context} from "../store/appContext"
import { useNavigate } from "react-router";


export const Login = () => {

    // 1 importamos siempre el store y action para poder utilizarlo y pasarle datos. No siempre tengo que traer los acciones y la store. Si en este caso solo vamos a utilizar las action, me traigo solo las actions.-
    const { actions } = useContext(Context)

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const navigate = useNavigate() // usamos el metodo useNavigate para que cuando presionemos el botón de submit, nos lleve directamente a la vista de contactos

    const handleSubmit = (event) => {
        event.preventDefault();
        const dataToSend = { name, email, phone, address } // Esto es la forma abreviada de lo de abajo en comentario
        // const dataToSend = {
        //      name : name,
        //      email : name,    // Esto es igual que lo de arriba, pero por abrevación de js, si la clave se llama igual que la variable, podemos suprimir el valor
        //      phone: phone,
        //      address: address }
        // console.log("datos enviando ", dataToSend);
        actions.addContact(dataToSend); // llamo a la acción addContact y le paso como parámetro dataTosend(que contiene los valores que quiero enviar a    la db)
        navigate('/contacts') //Aquí le pasamos la constate definita arriba y le ponemos la ruta a donde queremos que vaya cuando presione el handleSubmit. Navigate es una función, y por eso abrirmos parentesis y como parámetro le pasamos el path.
    }

    return (
        <form onSubmit={handleSubmit}>

            <div className="container">
                <h1 className="text-dark text-center bg-white border border-success border border-4 rounded " >Create your contact</h1>

                <div className="form-floating mb-2 mt-3 col-sm-6 col-md-6 col-lg-8 " style={{ margin: '0 auto' }}>
                    <input type="text" className="form-control" id="inputName" placeholder="name@example.com" value={name} onChange={(event) => setName(event.target.value)} />
                    <label className="text-center" htmlFor="inputName">Name</label>
                </div>

                <div className="form-floating mb-2 col-sm-6 col-md-6 col-lg-8" style={{ margin: '0 auto' }}>
                    <input type="text" className="form-control" id="inputPhone" placeholder="Password" value={phone} onChange={(event) => setPhone(event.target.value)} />
                    <label htmlFor="inputPhone">Phone</label>
                </div>

                <div className="form-floating mb-2 col-sm-6 col-md-6 col-lg-8" style={{ margin: '0 auto' }}>
                    <input type="email" className="form-control" id="inputEmail" placeholder="Password" value={email} onChange={(event) => setEmail(event.target.value)} />
                    <label htmlFor="inputEmail">email</label>
                </div>

                <div className="form-floating mb-2 col-sm-6 col-md-6 col-lg-8" style={{ margin: '0 auto' }}>
                    <input type="text" className="form-control" id="inputAddress" placeholder="Password" value={address} onChange={(event) => setAddress(event.target.value)} />
                    <label htmlFor="inputAddress">address</label>
                </div>

                

                <div className="d-flex justify-content-end me-5">
                    <p className="">
                        <button className="btn btn-success me-1 ">Submit</button>
                    </p>
                    <p className="text-center" >
                        <button className="btn btn-danger me-5">Cancel</button>
                    </p>
                </div>

            </div>
        </form>

    )
}