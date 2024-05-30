import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom"



export const Contacts = () => {

    const { store, actions } = useContext(Context)

    const editTask = (item) => {
        console.log("este es el item para editar ", item);
    }

    const handleDelete = (contactID) => {
        console.log("item para borrar :", contactID);
        actions.handleDelete(contactID)
    }

    return (
        <div className="container">

            <h1 className="text-center bg-white border border-success border border-4 rounded">Contacts</h1>
            <Link to='/login' className="btn btn-success mt-2 me-3" style={{ marginRight: "100px" }}>Add contact</Link>

            {store.contacts.map((item, index) => (
                <div>

                    <ul className="list-group mt-3 text-center" style={{ margin: '0 auto' }}>

                        <li className="list-group-item col-sm-6 col-md-4 col-lg-3" style={{ margin: '0 auto' }}>
                            <div className="d-flex justify-content-between align-items-center">
                                <b>NAME:</b> {item.name}
                            </div>
                        </li>


                        <li className="list-group-item col-sm-6 col-md-4 col-lg-3" style={{ margin: '0 auto' }}>
                            <div className="d-flex justify-content-between align-items-center">
                                <b>ADDRESS:</b> {item.address}
                            </div>
                        </li>

                    </ul>
                    <div className="d-flex justify-content-center">
                        <span onClick={() => editTask(item.name)} className="ms-3"><i className="fas fa-edit text-success"></i></span>
                        <span onClick={() => handleDelete(item.id)} className="ms-3"><i className="fas fa-trash text-danger"></i></span>
                    </div>
                </div>

            ))}

        </div>
    )
}