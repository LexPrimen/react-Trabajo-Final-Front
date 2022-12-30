
import React from "react";
import products from "../data";


 const Productos = () =>{
    return(
    
        <div className="">
            <h2>
              PRUDCOTS
            </h2>

          <div className="products">
            {products.map((products)=>{
                return (
                    <article key={products.id}>
                        <h5>
                            {products.name}
                        </h5>
                        <img src={products.image} alt="{products.name}"/> 
                    </article>
                );
            })

            }

          </div>


        </div>
       
    )
}

export default Productos;