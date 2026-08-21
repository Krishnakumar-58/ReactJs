import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Home from './Home';

function About() {
  return (
    <div>
      <Home/>
    <Card style={{ width: '18rem', float:'left', margin:'10px',marginLeft:'25px' }}>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaUodhj2h_uNKvV17hydb0anv5osMDjqhUL2r_98eJvg&s=10"/>
      <Card.Body>
        <Card.Title>Bhoot Bangla</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="danger">Go somewhere</Button>
      </Card.Body>
    </Card>
     <Card style={{ width: '18rem', float:'left', margin:'10px'}}>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaUodhj2h_uNKvV17hydb0anv5osMDjqhUL2r_98eJvg&s=10"/>
      <Card.Body>
        <Card.Title>Bhoot Bangla</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="danger">Go somewhere</Button>
      </Card.Body>
    </Card>
     <Card style={{ width: '18rem', float:'left',margin:'10px'}}>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaUodhj2h_uNKvV17hydb0anv5osMDjqhUL2r_98eJvg&s=10"/>
      <Card.Body>
        <Card.Title>Bhoot Bangla</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="danger">Go somewhere</Button>
      </Card.Body>
    </Card>
     <Card style={{ width: '18rem',margin:'10px' }}>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaUodhj2h_uNKvV17hydb0anv5osMDjqhUL2r_98eJvg&s=10"/>
      <Card.Body>
        <Card.Title>Bhoot Bangla</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="danger">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
    
  );
  
}

export default About;