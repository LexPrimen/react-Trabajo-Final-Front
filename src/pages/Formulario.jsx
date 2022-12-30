
import React, {useState} from "react";
import {Button, Form} from 'react-bootstrap';
import validacion from './Validacion'
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
        <div className="div-productos">
        <Form>  
       <input type="text" className="labelstyle" name="usuario" id="usuario" placeholder="Nombre de usuario"   />
       </Form>
       <Form> 
        <input type="text" className="labelstyle" name="contraseña" id="contraseña" placeholder="Contraseña"   />
        </Form>
        <Form> 
        <input type="text" className="labelstyle" name="email" id="email" placeholder="Email"   />
        </Form>
         

        </div>

        <p> al registrarse, recibira nuevos mensajes de los ultimos perisfericos del mercado</p>
        
 
        <Button variant="primary" className="boton" type="button" onClick={handleClick}>
                      ENVIAR
                  </Button>
                  <h2>LOS DATOS INGRESADOS QUEDARAN A LA VISTA HASTA QUE SE REFRESQUE LA PAGINA!! ASI PODRA GUARDAR SUS DATOS</h2>
       
    </Form>


        
    )
}

export default Formulario;


  {/* //   <Form className="div-productos" onChange={handleChange}>

      //   <div>
      //   <Form>  
      //  <input type="text" className="labelstyle" name="usuario" id="usuario" placeholder="Nombre de usuario"   />
      //  </Form>
      //  <Form> 
      //   <input type="text" className="labelstyle" name="contraseña" id="contraseña" placeholder="Contraseña"   />
      //   </Form>
      //   <Form> 
      //   <input type="text" className="labelstyle" name="email" id="email" placeholder="Email"   />
      //   </Form>
        {/* <button className="boton" type="submit" onChange={onChange} onClick={handleClick}>Registrarse</button> */}

      //   </div>

//       <div className='div-productos'>
      

//           {Object.keys(inputs).map((key, index) => ( */}
//               <Form.Group className="labelstyle" key={index}>
//                   <Form.Label id="from" className='div-productos'>
//                       {key}
//                   </Form.Label>
//                   <Form.Control name={key} className='labelstyle' value={inputs[key]} onChange={handleChange} />
//               </Form.Group>
//           ))}

//           <div className='div-productos'>
//               <Button variant="primary" type="submit" onClick={handleClick} className="boton">
//                   Enviar Datos
//               </Button>
//           </div>

//         </div>

        
//     )
// }


















// <div>
//          <Form className="div-productos" onChange={handleChange}>
       
        
//          <Form>  
//         <input type="text" className="labelstyle" name="usuario" id="usuario" placeholder="Nombre de usuario"   />
//         </Form>
//         <Form> 
//          <input type="text" className="labelstyle" name="contraseña" id="contraseña" placeholder="Contraseña"   />
//          </Form>
//          <Form> 
//          <input type="text" className="labelstyle" name="email" id="email" placeholder="Email"   />
//          </Form>
//           {/* <button className="boton" type="submit" onChange={handleClick} onClick={handleClick}>Registrarse</button>   */}
//           <div>
//           <button onClick={(e) => handleClick(e)}>Search</button>
//           <Button className="boton" type="submit"  onClick={handleClick}>Registrarse</Button> 
//          </div>
//          </Form>

//          <div>
//          <button onClick={(e) => handleClick(e)}>Search</button>
//          <Button className="boton" type="submit"  onClick={handleClick}>Registrarse</Button> 
//          </div>
        
//     </div>
        