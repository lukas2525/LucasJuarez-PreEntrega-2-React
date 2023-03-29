import { useState } from "react";

const Form = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("")

 
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    //Validacion
    if(userData.name.length < 4){
        console.log("nombre no valido");
        setError(true);
        setErrorMessage("El nombre no puede ser menor a 4 caracteres")
        return;
    }


    const incluye = userData.email.includes("@")

    if(!incluye){
        console.log("email no valido");
        setError(true);
        setErrorMessage("El email debe contener un arroba(@)")
        return;
    }  


    if(userData.password.length < 6){
        console.log("la contraseña debe tener al menos 6 caracteres");
        setError(true);
        setErrorMessage("Contraseña incorrecta, debe contener al menos 6 caracteres")
        return;
    }
    


    //Instruccion
    console.log(userData);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingrese su Nombre"
          onChange={handleChange}
          name="name"
        />
        <input
          type="text"
          placeholder="Ingrese su Email"
          onChange={handleChange}
          name="email"
        />
        <input
          type="text"
          placeholder="Ingrese su Password"
          onChange={handleChange}
          name="password"
        />
        <button type="submit">Ingresar</button>
      </form>

      {error && <h1>{errorMessage}</h1>}

    </div>
  );
};

export default Form;
