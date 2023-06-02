import React, { useState, useEffect } from "react";
import './Q2.scss';
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Q2 = () => {
    const [grid, setGrid] = useState([]);
    const [generation, setGeneration] = useState(0);

    
    const rows = 10;
    const cols = 10;

    
    const generateEmptyGrid = () => {
        const newGrid = [];
        for (let i = 0; i < rows; i++) {
            newGrid.push(Array.from(Array(cols), () => false));
        }
        return newGrid;
    };

    
    const generateRandomGrid = () => {
        const newGrid = [];
        for (let i = 0; i < rows; i++) {
            newGrid.push(Array.from(Array(cols), () => Math.random() > 0.7));
        }
        return newGrid;
    };

    
    useEffect(() => {
        setGrid(generateEmptyGrid());
        setGeneration(0);
    }, []);

    
    const handleCellClick = (row, col) => {
        const newGrid = [...grid];
        newGrid[row][col] = !newGrid[row][col];
        setGrid(newGrid);
    };

    
    const computeNextGeneration = () => {
        const newGrid = JSON.parse(JSON.stringify(grid));
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                const neighbors = countNeighbors(grid, i, j);
                if (grid[i][j]) {
                    if (neighbors < 2 || neighbors > 3) {
                        newGrid[i][j] = false; 
                    }
                } else {
                    if (neighbors === 3) {
                        newGrid[i][j] = true; 
                    }
                }
            }
        }
        setGrid(newGrid);
        setGeneration(generation + 1);
    };

    
    const countNeighbors = (grid, row, col) => {
        let count = 0;
        const directions = [
            [-1, -1],
            [-1, 0],
            [-1, 1],
            [0, -1],
            [0, 1],
            [1, -1],
            [1, 0],
            [1, 1]
        ];
        for (let i = 0; i < directions.length; i++) {
            const [dx, dy] = directions[i];
            const newRow = row + dx;
            const newCol = col + dy;
            if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols) {
                count += grid[newRow][newCol] ? 1 : 0;
            }
        }
        return count;
    };

   
    const renderGrid = () => {
        return grid.map((row, rowIndex) => (
            <div className="row" key={rowIndex}>
                {row.map((cell, colIndex) => (
                    <div
                        className={`cell ${cell ? 'alive' : 'dead'}`}
                        key={colIndex}
                        onClick={() => handleCellClick(rowIndex, colIndex)}
                    ></div>
                ))}
            </div>
        ));
    };

    const codeSnippet =`
    const [grid, setGrid] = useState([]);
    const [generation, setGeneration] = useState(0);

    
    const rows = 10;
    const cols = 10;

    
    const generateEmptyGrid = () => {
        const newGrid = [];
        for (let i = 0; i < rows; i++) {
            newGrid.push(Array.from(Array(cols), () => false));
        }
        return newGrid;
    };

    
    const generateRandomGrid = () => {
        const newGrid = [];
        for (let i = 0; i < rows; i++) {
            newGrid.push(Array.from(Array(cols), () => Math.random() > 0.7));
        }
        return newGrid;
    };

    
    useEffect(() => {
        setGrid(generateEmptyGrid());
        setGeneration(0);
    }, []);

    
    const handleCellClick = (row, col) => {
        const newGrid = [...grid];
        newGrid[row][col] = !newGrid[row][col];
        setGrid(newGrid);
    };

    
    const computeNextGeneration = () => {
        const newGrid = JSON.parse(JSON.stringify(grid));
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                const neighbors = countNeighbors(grid, i, j);
                if (grid[i][j]) {
                    if (neighbors < 2 || neighbors > 3) {
                        newGrid[i][j] = false; 
                    }
                } else {
                    if (neighbors === 3) {
                        newGrid[i][j] = true; 
                    }
                }
            }
        }
        setGrid(newGrid);
        setGeneration(generation + 1);
    };

    
    const countNeighbors = (grid, row, col) => {
        let count = 0;
        const directions = [
            [-1, -1],
            [-1, 0],
            [-1, 1],
            [0, -1],
            [0, 1],
            [1, -1],
            [1, 0],
            [1, 1]
        ];
        for (let i = 0; i < directions.length; i++) {
            const [dx, dy] = directions[i];
            const newRow = row + dx;
            const newCol = col + dy;
            if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols) {
                count += grid[newRow][newCol] ? 1 : 0;
            }
        }
        return count;
    };


    
    return (
        <section id="q2">

            <Container>
                <Link to="#" onClick={() => window.history.back()}>
                    <Button className="mt-5 btn-warning">Voltar</Button>
                </Link>
                <h1>Questão 2 - Jogo da vida</h1>
                <div className="game-container">
                    <div className="grid">{renderGrid()}</div>
                    <div className="generation"><h4>Geração: {generation}</h4></div>
                    <Button className="btn btn-warning" onClick={computeNextGeneration}>
                        Próxima Geração
                    </Button>
                </div>
            </Container>

            </div>

        </section>

    `


    return (
        <section id="q2">

            <Container>
                <Link to="#" onClick={() => window.history.back()}>
                    <Button className="mt-5 btn-warning">Voltar</Button>
                </Link>
                <h1>Questão 2 - Jogo da vida</h1>
                <div className="game-container">
                    <div className="grid">{renderGrid()}</div>
                    <div className="generation"><h4>Geração: {generation}</h4></div>
                    <Button className="btn btn-warning" onClick={computeNextGeneration}>
                        Próxima Geração
                    </Button>
                </div>
            </Container>

            <div className="resoluc">
                <h1>Resolução da Questão</h1>
                <h5 className="text-center"><span className="text-danger">OBS:</span> Uma função não pode aparecer na resolução, recomendo olhar o repositório do GitHub para uma explicação mais completa</h5>

                <Container>
                    <SyntaxHighlighter language="javascript" style={atomDark}>
                        {codeSnippet}
                    </SyntaxHighlighter>
                </Container>

            </div>

        </section>
    )
}

export default Q2;