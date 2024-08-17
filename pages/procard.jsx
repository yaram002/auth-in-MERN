
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/tab.css'
import Button from 'react-bootstrap/Button';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function KSE() {
  const [responseData, setResponseData] = useState([]);

  useEffect(() => {
       

      

    fetchData();
}, []); // Empty dependency array to run effect only once
const fetchData = async () => {
  try {
      const response = await axios.get('http://localhost:3001');
      setResponseData(response.data);
  } catch (error) {
      console.error('Error fetching data:', error);
  }
};



async function delt(id) {
  let resu=await axios.delete('http://localhost:3001/pd/'+id);
  let dae=resu.data;
  fetchData();
}

  return (

<>  
<div>
    {responseData.map((item, index) => (
      
    
   



    
    <Card key={index} style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.image} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{item.city}</ListGroup.Item>
        <ListGroup.Item>{item.number}</ListGroup.Item>
        <ListGroup.Item>{item.profasion}</ListGroup.Item>
        <Button onClick={()=>delt(item._id)}>remove</Button>
      </ListGroup>
      <Card.Body>
     
      </Card.Body>
    </Card>

  ))}
  </div>
  </>

  );
}

export default KSE;