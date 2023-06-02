import React, { useState } from "react";
import './Q1.scss';
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';


const Q1 = () => {

    const [inputValue, setInputValue] = useState('');
    const [result, setResult] = useState('');

    const convertToArabic = () => {
        const romanToArabic = {
            I: 1,
            IV: 4,
            V: 5,
            IX: 9,
            X: 10,
            XL: 40,
            L: 50,
            XC: 90,
            C: 100,
            CD: 400,
            D: 500,
            CM: 900,
            M: 1000
        };

        let arabicNumber = 0;
        let currentCharIndex = 0;

        while (currentCharIndex < inputValue.length) {
            const currentChar = inputValue[currentCharIndex];
            const nextChar = inputValue[currentCharIndex + 1];

            if (nextChar && romanToArabic[currentChar + nextChar]) {
                arabicNumber += romanToArabic[currentChar + nextChar];
                currentCharIndex += 2;
            } else {
                arabicNumber += romanToArabic[currentChar];
                currentCharIndex += 1;
            }
        }

        setResult(arabicNumber);
    };

    const convertToRoman = () => {
        const arabicToRoman = {
            1: 'I',
            4: 'IV',
            5: 'V',
            9: 'IX',
            10: 'X',
            40: 'XL',
            50: 'L',
            90: 'XC',
            100: 'C',
            400: 'CD',
            500: 'D',
            900: 'CM',
            1000: 'M'
        };

        let romanNumber = '';
        let remainingNumber = inputValue;

        Object.keys(arabicToRoman)
            .sort((a, b) => b - a)
            .forEach((arabic) => {
                const roman = arabicToRoman[arabic];
                const repeatCount = Math.floor(remainingNumber / arabic);

                romanNumber += roman.repeat(repeatCount);
                remainingNumber -= repeatCount * arabic;
            });

        setResult(romanNumber);
    };

    const codeSnippet = ` 
    const [inputValue, setInputValue] = useState('');
    const [result, setResult] = useState('');

    const convertToArabic = () => {
        const romanToArabic = {
            I: 1,
            IV: 4,
            V: 5,
            IX: 9,
            X: 10,
            XL: 40,
            L: 50,
            XC: 90,
            C: 100,
            CD: 400,
            D: 500,
            CM: 900,
            M: 1000
        };

        let arabicNumber = 0;
        let currentCharIndex = 0;

        while (currentCharIndex < inputValue.length) {
            const currentChar = inputValue[currentCharIndex];
            const nextChar = inputValue[currentCharIndex + 1];

            if (nextChar && romanToArabic[currentChar + nextChar]) {
                arabicNumber += romanToArabic[currentChar + nextChar];
                currentCharIndex += 2;
            } else {
                arabicNumber += romanToArabic[currentChar];
                currentCharIndex += 1;
            }
        }

        setResult(arabicNumber);
    };

    const convertToRoman = () => {
        const arabicToRoman = {
            1: 'I',
            4: 'IV',
            5: 'V',
            9: 'IX',
            10: 'X',
            40: 'XL',
            50: 'L',
            90: 'XC',
            100: 'C',
            400: 'CD',
            500: 'D',
            900: 'CM',
            1000: 'M'
        };

        let romanNumber = '';
        let remainingNumber = inputValue;

        Object.keys(arabicToRoman)
            .sort((a, b) => b - a)
            .forEach((arabic) => {
                const roman = arabicToRoman[arabic];
                const repeatCount = Math.floor(remainingNumber / arabic);

                romanNumber += roman.repeat(repeatCount);
                remainingNumber -= repeatCount * arabic;
            });

        setResult(romanNumber);
    };
    
    return (
        <section id="q1">
            <Container>
                <Link to="#" onClick={() => window.history.back()}>
                    <Button className="mt-5 btn-warning">Voltar</Button>
                </Link>
                <h1>Questão 1 - Conversor de números romanos</h1>
                <div>
                    <input
                        type="text"
                        className="input"
                        placeholder="Digite um número"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <Row className="btns">
                        <Col md='2'><Button className="btn-warning mt-4" onClick={convertToArabic}>Converter em Arábico</Button></Col>
                        <Col md='2'> <Button className="btn-warning mt-4" onClick={convertToRoman}>Converter em Romano</Button></Col>
                    </Row>
                </div>
                <div className="result"><h2>Resultado: {result}</h2></div>
            </Container>
        </section>

    `;

    return (
        <section id="q1">
            <Container>
                <Link to="#" onClick={() => window.history.back()}>
                    <Button className="mt-5 btn-warning">Voltar</Button>
                </Link>
                <h1>Questão 1 - Conversor de números romanos</h1>
                <div>
                    <input
                        type="text"
                        className="input"
                        placeholder="Digite um número"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <Row className="btns">
                        <Col md='2'><Button className="btn-warning mt-4" onClick={convertToArabic}>Converter em Arábico</Button></Col>
                        <Col md='2'> <Button className="btn-warning mt-4" onClick={convertToRoman}>Converter em Romano</Button></Col>
                    </Row>


                </div>
                <div className="result"><h2>Resultado: {result}</h2></div>
            </Container>

            <div className="resoluc">
                <h1>Resolução da Questão</h1>

                <Container>
                    <SyntaxHighlighter language="javascript" style={atomDark}>
                        {codeSnippet}
                    </SyntaxHighlighter>
                </Container>

            </div>


        </section>
    )
}


export default Q1;