import React from "react";
import Exercise from "./Exercise";
import { activities } from "./activities";
import { Col, Container, Row, Button } from "react-bootstrap";
import "./Checkbox.css";
const ActivityList = () => {

  activities.map((data) => {
    return data.complete = false;
  })

  return (
    <>
      <div>
        <h2>
          Activities
        </h2>
      </div>
      <Container fluid>
        {activities.map((data) => {
          return (
            <Exercise activity={data}/>
          );
        })}
        <Row>
          <Col>
            <Button>Complete hourly</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default ActivityList;
