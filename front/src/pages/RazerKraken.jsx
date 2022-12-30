import React from "react";
import RazerKraken from '../images/auricular-razer-kraken.png';


const RazerKrakeN =() =>{

    return(
      
        <div className="div-productos">
               <h3 className="perifericos-h4"> Auriculares Razer Kraken </h3>
               <div>
                <img class="img2" width="400px" height="400px" src={RazerKraken} />
               </div>
               <h3> </h3>
 

               <div>
                <h3 className="perifericos-h4">Especificaciones</h3>
                <p className="p-perifericos">Calidad de sonido 7.1</p>
                <p className="p-perifericos">color verde</p>
                <p className="p-perifericos">incluye microfono de alta Calidad sin cancelacion de ruido</p>
                <p className="p-perifericos">No es  inalámbrico</p>
                
                <p className="p-perifericos-unidades">stock:20 unidades</p>
            </div>

        </div>
        
       
        

    )
}




export default RazerKrakeN