import React from "react";
import hyperX from '../images/hyperX-Pulsefire-rgb.png';


const hyperx =() =>{

    return(
      
        <div className="div-productos">
               <h3 className="perifericos-h4"> Mouse hyperX  Pulsefire</h3>
               <div>
                <img class="img2" width="400px" height="400px" src={hyperX} />
               </div>
               <h3> </h3>
 

               <div>
                <h3 className="perifericos-h4">Especificaciones</h3>
                <p className="p-perifericos">DPI: 16000</p>
                <p className="p-perifericos">RGB</p>
                <p className="p-perifericos">Sensor: optico</p>
                <p className="p-perifericos">No es  inalámbrico</p>
                
                <p className="p-perifericos-unidades">stock:12 unidades</p>
            </div>

        </div>
        
     
        

    )
}




export default hyperx