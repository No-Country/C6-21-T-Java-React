import { React } from "react";


function Form({ handleSubmit, handleChange, GenerateBuyOrder, user }) {

    const validation = (input) => {
        return input.includes('@')
    }

    return (
        <form className="m-5 p-5" onSubmit={handleSubmit}>
            <div className="mb-3" >
                <label className="form-label"
                    htmlFor="fullName"> Nombre y Apellido
                </label>
                <input className="form-control"
                    type="text" name="fullName" autoComplete="off"  onChange={handleChange}>
                </input>
            </div>
            <div className="mb-3" >
                <label className="form-label"
                    htmlFor="email">Email
                </label>
                <input className="form-control"
                    type="email" name="email" autoComplete="off" onChange={handleChange}>
                </input>
            </div>
            <div className="mb-3" >
                <label className="form-label"
                    htmlFor="emailValidation">Repetir Email
                </label>
                <input className="form-control"
                    type="email" autoComplete="off"  name="emailValidation" onChange={handleChange}>
                </input>
            </div>
            <div className="mb-3" >
                <label className="form-label"
                    htmlFor="phoneNumber"> Numero de telefono
                </label>
                <input className="form-control"
                    type="text" autoComplete="off" name="phoneNumber" onChange={handleChange}>
                </input>
            </div>
            <button id="submit"  className={!user.fullName  ||!user.email || !user.phoneNumber || !(user.email === user.emailValidation) ? 'btn btn-secondary' : 'btn btn-dark'} disabled={!user.fullName|| !(user.email===user.emailValidation) || !user.phoneNumber} onClick={GenerateBuyOrder}>
                FINALIZAR COMPRA
            </button>
        </form>
    )
}

export default Form;