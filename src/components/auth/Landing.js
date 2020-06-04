import React, { Component } from 'react'
import { Jumbotron, Container, Col } from 'react-bootstrap';

export default class Landing extends Component {
    render() {
        return (
            <Container>
                <Jumbotron>
                    <Col sm={8}>
                        <h1>Welcome</h1>
                    </Col>
                </Jumbotron>

            </Container>
        )
    }
}


