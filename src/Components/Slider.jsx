import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

function Slider() {
  return (
<>
 <Carousel fade>
      <Carousel.Item>

<img src="https://thumbs.dreamstime.com/b/stunning-pink-abstract-th-birthday-cake-wallpaper-vibrant-texture-design-mobile-desktop-backgrounds-perfect-elevate-your-phone-356036692.jpg" alt="" width={"100%"} height={"500px"} />
      <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>

<img src="https://i.pinimg.com/736x/89/7f/f0/897ff0ef441e38e9192d4d0e93f1cebc.jpg" alt="" width={"100%"} height={"500px"}/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>

 <img src="https://i.pinimg.com/736x/b1/ef/bf/b1efbf50a3157c7d071184ecfbe10024.jpg" alt=""  width={"100%"} height={"500px"}/> 
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

</>  )
}

export default Slider