
import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';


 const Formulario = () =>{
      
    //  const URL = 'http://localhost:3001/crear';

    const URL = 'https://react-trabajo-final-back-production.up.railway.app/crear'
    const [inputs, setInputs] = useState({
        usuario:"",
        contraseña:"",
        email:"",

     })

        //funcion para setear  las variables

        const handleChange = (e)=> {
            
           setInputs({
            ...inputs,
            [e.target.name]: e.target.value
            })
         }

     //funcion del post

     const handleClick = async () =>{

        console.log();
        await axios.post(URL,inputs) //enviamos datos
        setInputs({  //aca se limpiaria los datos enviados para volver a cargar 
            usuario:"",
            contraseña:"",
            email:"",
        })
        
     }
     
     

    return(
        <Form className="div-productos" onChange={handleChange}>
        <div>
        <Form>  
       <input type="text" className="labelstyle" name="usuario" id="usuario" placeholder="Nombre de usuario"   />
       </Form>
       <Form> 
        <input type="text" className="labelstyle" name="contraseña" id="contraseña" placeholder="Contraseña"   />
        </Form>
        <Form> 
        <input type="text" className="labelstyle" name="email" id="email" placeholder="Email"   />
        </Form>
        {/* <button className="boton" type="submit" onChange={onChange} onClick={handleClick}>Registrarse</button> */}

        </div>
        <p> al registrarse, recibira nuevos mensajes de los ultimos perisfericos del mercado</p>
        
 
     <div  className="div-productos">
      <button className="boton" type="submit" onClick={handleClick} >
        Submit
      </button>
      </div>
    </Form>


        
    )
}

export default Formulario;