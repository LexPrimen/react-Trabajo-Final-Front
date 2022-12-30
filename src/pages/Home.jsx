import React from "react";
import products from "../data";

// import Carousel from 'react-bootstrap/Carousel';
import  'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
//  import { Link } from "react-router-dom";
import yamak550 from '../images/Redragon-yama-k550.png';
import razerkraken from '../images/auricular-razer-kraken.png'
import hyperX from '../images/hyperX-Pulsefire-rgb.png'
// import alloycore from '../images/HYPERX-ALLOY.png';

const Home = () =>{
    return(
    
        


      
      

            <body className="body">
      
             <h4 className="h4">World Gaming</h4>
        
          <Carousel className="carrousel">
            <Carousel.Item>
             <a href="/Redragon"> <img
             
                className="d-block w-100"
                src={ yamak550 } 
                alt="First slide"
                href="/Redragon"
              /></a>
              <Carousel.Caption>
                <h3>Teclado redragon kumara k552</h3>
                <p></p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <a href="/razer">  <img
                className="d-block w-100 "
                src={ razerkraken} 
                alt="Second slide"
              /> </a>
           
             
             
      
              <Carousel.Caption>
              <h5>Auriculares Razer Kraken</h5>
              
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <a href="/HyperX"> <img
                href="/razer"
                className="d-block w-100"
                src={ hyperX } 
                alt="Third slide"
              /> </a>
      
              <Carousel.Caption>
                <h3>Mouse HyperX Pulsefire</h3>
                <p>
                  
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        
      
          
      
          
          
          
          
          
          <h4 className="h4">Productos Destacados</h4>
           
      
           
          
          <div className="divindex">
               
                 
          
                <div className="divstyle"> 
                
                       <a href="/Redragon" className="a-title">  Teclado redragon kumara k552  </a>
                       <a href="/Redragon">  <img class="img" src={yamak550} alt="IMAGEN" width="400px" height="400px" />  </a> 
                       {/* <a class="a-title">  $12000  </a> */}
                   
                   {/* {product.id((product)=> ( <Productitem key={product.id} data={product} id={1} addToCart={addToCart}  /> 
                     
                    ))} */}
                  
                </div>
                 
               
               <div className="divstyle"> 
                 
                          <a href="/razer"className="a-title">  Auricular Razer  Kraken </a>        
                          <a href="/razer">  <img class="img" src={ razerkraken } alt="IMAGEN" width="400px" height="400px" />  </a> 
                 
                </div>
              
               <div className="divstyle"> 
                       <a href="/HyperX" className="a-title">  Mouse HyperX Pulsefire   </a>
                       <a href="/HyperX">  <img class="img" src={ hyperX } alt="IMAGEN" width="400px" height="400px" />  </a> 
                </div>
                
      
          
          
          </div>
      
      
         
      
            </body>
      
      
      
      
      
      
      
          )
       
      
              
            
              
          
      }

export default Home;