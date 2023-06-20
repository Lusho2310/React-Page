import React from 'react';
import './footer.css'; 

function Footer() {
  return (
    <footer>
<div class="row primary">
  <div class="column about">

  <h3>Foolish Developer</h3>

   <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
      voluptatem corporis error non,
  </p>

  <div class="social">
    <i class="fa-brands fa-facebook-square"></i>
    <i class="fa-brands fa-instagram-square"></i>
    <i class="fa-brands fa-twitter-square"></i>
    <i class="fa-brands fa-youtube-square"></i>
    <i class="fa-brands fa-whatsapp-square"></i>
  </div>
</div>

<div class="column">
<h3>Some Links</h3>

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


<div class="column">
  <h3>Some Links</h3>
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