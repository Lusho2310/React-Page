import React from 'react';
import './footer.css'; 

function Footer() {
  return (
    <footer>
<div class="row primary">
  <div class="column about">

  <h3>About me</h3>

   <p>
   My name is Luis Pazmiño Montero, 
   I am a student of the "Escuela Superior Politecnica de Chimborazo" 
   I am in the IT career in the first semester and this is my first web page in React
  </p>

  <div class="social">
    <i class="fa-brands fa-facebook-square"></i>
    <i class="fa-brands fa-instagram-square"></i>
    <i class="fa-brands fa-twitter-square"></i>
    <i class="fa-brands fa-youtube-square"></i>
    <i class="fa-brands fa-whatsapp-square"></i>
  </div>
</div>
<div></div>
<div></div>
<div class="column">


 <ul>

  <li>
   <a href="#faq">F.A.Q</a>
  </li>
  <li>
   <a href="#cookies-policy">Cookies Policy</a>
  </li>
  <li>
   <a href="#terms-of-services">Terms Of Service</a>
  </li>
  <li>
   <a href="#support">Support</a>
  </li>
 </ul>

</div>



</div>


</footer>
  );
}

export default Footer;