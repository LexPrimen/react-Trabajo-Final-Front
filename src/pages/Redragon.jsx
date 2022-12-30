import React from "react";
import yamak550 from '../images/Redragon-yama-k550.png';


const Redragon =() =>{

    return(
      
        <div className="div-productos">
               <h3 className="perifericos-h4">Teclado Redragon yamak550 </h3>
               <div>
                <img class="img2" width="400px" height="400px" src={yamak550} />
               </div>
               <h3> </h3>
 

               <div>
                <h3 className="p-perifericos">Especificaciones</h3>
                <p className="p-perifericos">Teclado mecanico con switches purple</p>
                <p className="p-perifericos">iluminacion RGB</p>
                <p className="p-perifericos">dimensiones 45,5 x 22,4 x 2,6 cm.</p>
                <p className="p-perifericos">contiene software en la pagina oficial de Redragon</p>
                <p className="p-perifericos">vida util de las teclas 50 millones de pulsaciones </p>
                <p className="p-perifericos-unidades">stock:9 unidades</p>
            </div>

        </div>
        
       
        

    )
}




export default Redragon