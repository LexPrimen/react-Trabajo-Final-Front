import React, {useState, useEffect} from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';

 const About = () =>{

    const [personas, setPersonas] = useState([]);
     //api de mi database
    const URL = 'https://react-trabajo-final-back-production.up.railway.app/datos'

    //creamos una funcion para usar el useEffect

    const getPersonas =  async () =>{
        try{
             const {data} = await axios.get(URL);
             setPersonas(data.personas)
             console.log(data.personas);

        } catch (error) {
         console.log(error);
        }
    }
    
        useEffect(()=> {
            getPersonas();
        }, []);
    

    return(
        <div className="section m-10">
            <h2>
                ABOUUUUT
            </h2>
            <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>usuario</th>
          <th>email</th>
        </tr>
      </thead>
      <tbody>
        { personas.map(personas =>
        <tr>
        
          <td>{personas._id}</td>
          <td>{personas.usuario}</td>
          <td>{personas.email}</td>
        </tr>
       ) }
      </tbody>
    </Table>

        </div>
    )
}
 

export default About;


