import React from "react";
import './Home.scss';
import { Col, Container, Row, Button } from "react-bootstrap";

import Logo from '../resources/rota-logo.png';

const Home = () => {
    return (

        <section id="home">

            <Container>

                <img src={Logo}  alt="" className="img-fluid"/>

                <Row >

                    <Col md className="mb-4">
                        <Button className="btn-warning">Questão 1 - Conversor de números romanos</Button>
                    </Col>

                    <Col md className="mb-4">
                        <Button className="btn-warning">Questão 2 - Jogo da vida</Button>
                    </Col>

                    <Col md className="mb-4">
                        <Button className="btn-warning">Questão 3 - Divisor de conta de restaurante</Button>
                    </Col>

                </Row>
            </Container>

        </section>
    )
}

export default Home;