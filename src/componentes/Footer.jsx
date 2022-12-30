import React from "react";
import Wsp from "../images/whattsapp-image.png"
import Instagram from "../images/ig-image.png"



function Footer() {




    return(
         <div className="footer">
              <h6 className="footer-h6">Copyright WorldGaming @2023</h6>
             
             
              <div className="footer-img">
              <a href="https://www.whatsapp.com/"><img src={Wsp} alt="whatsappimage" width="50px"/></a>
              <a href="https://www.instagram.com/"><img src={Instagram} alt="instagram" width="50px"/></a>
              </div>

              
              

         </div>

    )
}



export default Footer;