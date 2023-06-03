import React from "react";
import './Home.scss';
import { Col, Container, Row, Button } from "react-bootstrap";
import { AiFillGithub } from 'react-icons/ai';

import Logo from '../resources/rota-logo.png';
import { Link } from "react-router-dom";

const Home = () => {
    return (

        <section id="home">

            <Container>

                <img src={Logo}  alt="" className="img-fluid"/>

                <Row >

                    <Col md className="mb-4">
                        <Button as={Link} to="/Q1" className="btnQuestion">Questão 1 - Conversor de números romanos</Button>
                    </Col>

                    <Col md className="mb-4">
                        <Button as={Link} to="/Q2" className="btnQuestion">Questão 2 - Jogo da vida</Button>
                    </Col>

                    <Col md className="mb-4">
                        <Button as={Link} to="/Q3" className="btnQuestion">Questão 3 - Divisor de conta de restaurante</Button>
                    </Col>

                </Row>
                
                <div className="mt-4">
                    <h4>Link para código completo no Github</h4>
                    <p>Ao entrar no repositório do Github, você encontrará uma tutorial de como clonar o projeto para sua máquina e como instalar as depedências para rodar-lo sem problemas</p>
                    <a href="https://github.com/abudluan/rota-das-oficinas" target="_blank"><Button className="btn-dark"><AiFillGithub/> Github</Button></a>
                </div>
            </Container>

        </section>
    )
}

export default Home;