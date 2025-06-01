import React from 'react'

function Footer() {
  return (
   <>
     <div class="footer">
    <h2>Cake-a-licious Bakery</h2>
    <p>Baking love into every slice. Deliciously crafted cakes for every occasion!</p>

    <div class="social-icons">
      <a href="#">Facebook</a> |
      <a href="#">Instagram</a> |
      <a href="#">Twitter</a>
    </div>

    <div class="bottom-text">
      &copy; 2025   CAKE-A-LICIOUS Bakery. All rights reserved.
    </div>
            <img
            src="./src/signature.png"
            alt="Chef Signature"
            style={{ width: '500px',marginBottom:"10px" }}
          />
  </div>
</>
  )
}

export default Footer