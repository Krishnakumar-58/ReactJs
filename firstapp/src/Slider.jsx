import Carousel from 'react-bootstrap/Carousel';

function Slider() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block  w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw75KIEx81GK0p-ks88Sd9YZROEY4nwcZaMKaOrotbTg&s=10"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block  w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA0qxpSJk2adw85xJipxhAv9psMbF2Jp_tSwrIr8z7rg&s=10"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjlfNfq9uy9Bc9od6apnAXzXneFyKWfG7nQ_1yFdtfsg&s=10"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;