import React from "react";
import './Home.scss';
import { Col, Container, Row, Button } from "react-bootstrap";

import Logo from '../resources/rota-logo.png';
import { Link } from "react-router-dom";

const Home = () => {
    return (

        <section id="home">

            <Container>

                <img src={Logo}  alt="" className="img-fluid"/>

                <Row >

                    <Col md className="mb-4">
                        <Button as={Link} to="/Q1" className="btn-warning">Questão 1 - Conversor de números romanos</Button>
                    </Col>

                    <Col md className="mb-4">
                        <Button as={Link} to="/Q2" className="btn-warning">Questão 2 - Jogo da vida</Button>
                    </Col>

                    <Col md className="mb-4">
                        <Button as={Link} to="/Q3" className="btn-warning">Questão 3 - Divisor de conta de restaurante</Button>
                    </Col>

                </Row>
            </Container>

        </section>
    )
}

export default Home;