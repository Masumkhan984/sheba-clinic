import React from 'react';
import { Card, Col } from 'react-bootstrap';

const QualityDetails = props => {
    const {icon, title, text } = props.Quality;
    return (
        <div>
      <Col>
      <Card style={{backgroundColor:"#C0F9D7"}}>
      <i className={icon}/>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {text}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
        </div>
    );
};

export default QualityDetails;