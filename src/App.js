import "./App.css";
import Timer from "./components/Timer";
import ActivityList from "./components/ActivityList";
import { Col, Container, Row } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Vaccine Exercise Program
        </h1>
      </header>
      <section>
        <Container fluid>
          <Row>
            <Col lg={3}>
              <Timer/>
            </Col>
            <Col lg={true}>
              <ActivityList />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default App;
