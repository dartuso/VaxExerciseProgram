import React from "react";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './Checkbox.css'

const Exercise = ({ activity }) => {
  return (
      <Row>
        <Col>
          {activity.img !== "" ? <img src={activity.img} alt="" /> : ""}
        </Col>
        <Col>
          <h4>
            {activity.name}
          </h4>
          <p>
            {activity.description}
          </p>
        </Col>
        <Col>
          <p>{activity.repitions}</p>
          <input type="checkbox" className="checkmark" onClick={() => {
            activity.complete = !activity.complete
          }}/>
        </Col>
      </Row>
  );
};
export default Exercise;
