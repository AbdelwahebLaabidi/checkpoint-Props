import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import PropTypes from "prop-types";


const Player= ({el}) =>{
    return (
       
          <Card style={{ width: '18rem', marginTop:'35px' }}>
              <Card.Img style={{ width: "286px",height: "325px"}} variant="top" src= {el.imageUrl} />
              <Card.Body>
                <Card.Title style={{display: 'flex', justifyContent :'center'}} >{el.name}</Card.Title>
                <Card.Text style={{display: 'flex', justifyContent :'center'}}> {el.age}</Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item style={{fontWeight: 'bold', color : 'red' }} >{el.nationality}</ListGroup.Item>
                <ListGroup.Item style={{color: 'green'}} >{el.team}</ListGroup.Item>
                <ListGroup.Item style={{textDecoration:'underline'}} >{el.jerseyNumber}</ListGroup.Item>
              </ListGroup>
              
          </Card>

       
    )
}


Player.defaultProps = {
  name : "All Star",
  team : "NBA",
  Nationality : "undefined",
}


Player.propTypes = {
  name : PropTypes.string,
  team : PropTypes.string,
  Nationality : PropTypes.string,
  age : PropTypes.number,
  jerseyNumber : PropTypes.number
}



export default Player