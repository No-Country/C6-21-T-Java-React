import { React } from "react";


function Form({ handleSubmit, handleChange, GenerateBuyOrder, user }) {

    const validation = (input) => {
        return input.includes ('@')
    }

    return (
        <form onSubmit={handleSubmit}>
            <label
                htmlFor="fullName"> Nombre y Apellido
            </label>
            <input
                type="text" name="fullName" autoComplete="off"  onChange={handleChange}>
            </input>
            <label
                htmlFor="email">Email
            </label>
            <input
                type="email" name="email" autoComplete="off" onChange={handleChange}>
            </input>
                        <label
                htmlFor="emailValidation">Repetir Email
            </label>
            <input
                type="email" autoComplete="off"  name="emailValidation" onChange={handleChange}>
            </input>

            <label
                htmlFor="phoneNumber"> Numero de telefono
            </label>
            <input
                type="text" autoComplete="off" name="phoneNumber" onChange={handleChange}>
            </input>
            <button id="submit"  className={!user.fullName || validation(user.email) ||!user.email || !user.phoneNumber || !(user.email === user.emailValidation) ? 'disabled' : 'enabled'} disabled={!user.fullName|| !(user.email===user.emailValidation)|| validation(user.email) || !user.phoneNumber} onClick={GenerateBuyOrder}>
                FINALIZAR COMPRA
            </button>
        </form>
    )
}

export default Form;