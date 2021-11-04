import React from "react";
import axios from 'axios';

import {
  Row,
  Col,
  InputGroup,
  Input,
  Button,
  Label,
  Container,
  List
} from "reactstrap";

class Index extends React.Component {
  constructor() {
    super()
    this.state = {
      value: "",
      number: "",
      primeNumbers: [],
      dividerNumbers: []
    }

    this.handleSubmitProject = this.handleSubmitProject.bind(this)
    this.handleChangeProject = this.handleChangeProject.bind(this)
  }

  handleSubmitProject = async e => {
    e.preventDefault();
    if (this.state.value) {
      const body = {
        "number": this.state.value
      }
      const responseProject = await axios.post(`http://localhost:3003/task/index`, body)
      this.setState({ number: this.state.value });
      if (responseProject.status === 200) {
        this.setState({ primeNumbers: JSON.stringify(responseProject.data.primeNumbers) });
        this.setState({ dividerNumbers: JSON.stringify(responseProject.data.dividerNumbers) });
      }
    } else {
      alert('Número de entrada é obrigatório')
    }
  };

  handleChangeProject(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <>
        <Container style={{ height: '800px' }} className="bg-light border">
          <div>
            <Row>
              <Col md="12">
                <form>
                  <Row style={{ padding: '10px' }}>
                    <Col md="12">
                      <Label>Número de entrada</Label>
                      <InputGroup>
                        <Input
                          placeholder="Exemplo: 45"
                          value={this.state.value}
                          onChange={this.handleChangeProject}
                          required
                        />
                        <Button onClick={this.handleSubmitProject} className="btn-simple" color="primary" type="submit">
                          enviar
                        </Button>
                      </InputGroup>
                    </Col>
                  </Row>
                  <hr></hr>
                  <Row style={{ padding: '10px' }}>
                    <Col md="12">
                      <List type="unstyled">
                        <li>
                          <b>Número de entrada:</b> {this.state.value}
                        </li>
                        <li style={{ overflow: 'auto' }}>
                          <b>Números divisores:</b> {this.state.dividerNumbers}
                        </li>
                        <li style={{ overflow: 'auto' }}>
                          <b>Números Primos:</b> {this.state.primeNumbers}
                        </li>
                      </List>
                    </Col>
                  </Row>
                </form>
              </Col>
            </Row>
          </div >
        </Container>
      </>
    );
  }
}

export default Index;
