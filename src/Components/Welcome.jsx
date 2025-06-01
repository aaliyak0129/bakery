import React from 'react'

function Welcome() {
  return (
  <div className="bakery-section">
      <div className="bakery-text">
        <h1>Welcome to our <strong style={{color:"#e25f96"}}>Bakery</strong></h1>
        <hr className="styled-hr" />
        <p className="subtitle">
          <em>
            Baked goods have been around for thousands of years. The art of baking was developed early during the Roman Empire.
          </em>
        </p>
        <p className="description">
          It was a highly famous art as Roman citizens loved baked goods and demanded them for important occasions such as feasts and weddings etc.
          Due to the fame and desire that the art of baking received, around 300 BC, baking was introduced as an occupation and respectable profession for Romans.
        </p>
        <button className="pink-button">Know more about us</button>
      </div>
      <div className="bakery-image">
<video src="/v1.mp4" autoPlay loop muted playsInline width="600px" style={{height:"500px"}} />


      </div>
    </div>
  )
}

export default Welcome