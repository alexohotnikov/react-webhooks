import React, { Component } from 'react';
import { render } from 'react-dom';
import Clock from './components/Clock';
import Conunter from './components/Reduce';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';


class App extends Component {
  render() {
    return(
      <React.Fragment>
        <Container>
          <Row>
            <Col>
              <Clock variant = "success"/>
            </Col>
            <Col>
              <Conunter variant = "danger"/>
            </Col>
          </Row>
        </Container>

      </React.Fragment>
    )
  }
}


render(<App/>, document.querySelector('#root'))