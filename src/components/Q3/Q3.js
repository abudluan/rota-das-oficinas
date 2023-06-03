import React, { useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './Q3.scss';

const Q3 = () => {
    const [customers, setCustomers] = useState([]);
    const [products, setProducts] = useState([]);
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [tipPayees, setTipPayees] = useState([]);

    const handleAddCustomer = () => {
        setCustomers([...customers, { id: customers.length + 1, name: '' }]);
    };

    const handleAddProduct = () => {
        setProducts([...products, { id: products.length + 1, name: '', price: 0 }]);
    };

    const handleCustomerNameChange = (customerId, name) => {
        const updatedCustomers = customers.map((customer) =>
            customer.id === customerId ? { ...customer, name } : customer
        );
        setCustomers(updatedCustomers);
    };

    const handleProductInfoChange = (productId, field, value) => {
        const updatedProducts = products.map((product) =>
            product.id === productId ? { ...product, [field]: value } : product
        );
        setProducts(updatedProducts);
    };

    const handleProductSelection = (customerId, productId) => {
        const selectedProductIndex = selectedProducts.findIndex(
            (item) => item.customerId === customerId && item.productId === productId
        );

        if (selectedProductIndex !== -1) {
            const updatedSelectedProducts = [...selectedProducts];
            updatedSelectedProducts.splice(selectedProductIndex, 1);
            setSelectedProducts(updatedSelectedProducts);
        } else {
            setSelectedProducts([...selectedProducts, { customerId, productId }]);
        }
    };

    const handleTipPayeeChange = (customerId, payee) => {
        const existingTipPayee = tipPayees.find((item) => item.customerId === customerId);

        if (existingTipPayee) {
            const updatedTipPayees = tipPayees.map((item) =>
                item.customerId === customerId ? { ...item, payee } : item
            );
            setTipPayees(updatedTipPayees);
        } else {
            setTipPayees([...tipPayees, { customerId, payee }]);
        }
    };

    const calculateResults = () => {
        const results = [];

        customers.forEach((customer) => {
            const customerSelectedProducts = selectedProducts.filter(
                (item) => item.customerId === customer.id
            );

            let total = 0;

            customerSelectedProducts.forEach((selectedProduct) => {
                const product = products.find((item) => item.id === selectedProduct.productId);
                const numConsumers = selectedProducts.filter(
                    (item) => item.productId === selectedProduct.productId
                ).length;
                const productPricePerConsumer = product.price / numConsumers;
                total += productPricePerConsumer;
            });

            const tipPayee = tipPayees.find((item) => item.customerId === customer.id);

            let tipAmount = 0;
            if (tipPayee && tipPayee.payee) {
                tipAmount = total * 0.1;
                total += tipAmount;
            }

            results.push({
                customerName: customer.name,
                total,
                tipAmount,
            });
        });

        return results;
    };

    const codeSnippet = `
    const [customers, setCustomers] = useState([]);
    const [products, setProducts] = useState([]);
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [tipPayees, setTipPayees] = useState([]);

    const handleAddCustomer = () => {
        setCustomers([...customers, { id: customers.length + 1, name: '' }]);
    };

    const handleAddProduct = () => {
        setProducts([...products, { id: products.length + 1, name: '', price: 0 }]);
    };

    const handleCustomerNameChange = (customerId, name) => {
        const updatedCustomers = customers.map((customer) =>
            customer.id === customerId ? { ...customer, name } : customer
        );
        setCustomers(updatedCustomers);
    };

    const handleProductInfoChange = (productId, field, value) => {
        const updatedProducts = products.map((product) =>
            product.id === productId ? { ...product, [field]: value } : product
        );
        setProducts(updatedProducts);
    };

    const handleProductSelection = (customerId, productId) => {
        const selectedProductIndex = selectedProducts.findIndex(
            (item) => item.customerId === customerId && item.productId === productId
        );

        if (selectedProductIndex !== -1) {
            const updatedSelectedProducts = [...selectedProducts];
            updatedSelectedProducts.splice(selectedProductIndex, 1);
            setSelectedProducts(updatedSelectedProducts);
        } else {
            setSelectedProducts([...selectedProducts, { customerId, productId }]);
        }
    };

    const handleTipPayeeChange = (customerId, payee) => {
        const existingTipPayee = tipPayees.find((item) => item.customerId === customerId);

        if (existingTipPayee) {
            const updatedTipPayees = tipPayees.map((item) =>
                item.customerId === customerId ? { ...item, payee } : item
            );
            setTipPayees(updatedTipPayees);
        } else {
            setTipPayees([...tipPayees, { customerId, payee }]);
        }
    };

    const calculateResults = () => {
        const results = [];

        customers.forEach((customer) => {
            const customerSelectedProducts = selectedProducts.filter(
                (item) => item.customerId === customer.id
            );

            let total = 0;

            customerSelectedProducts.forEach((selectedProduct) => {
                const product = products.find((item) => item.id === selectedProduct.productId);
                const numConsumers = selectedProducts.filter(
                    (item) => item.productId === selectedProduct.productId
                ).length;
                const productPricePerConsumer = product.price / numConsumers;
                total += productPricePerConsumer;
            });

            const tipPayee = tipPayees.find((item) => item.customerId === customer.id);

            let tipAmount = 0;
            if (tipPayee && tipPayee.payee) {
                tipAmount = total * 0.1;
                total += tipAmount;
            }

            results.push({
                customerName: customer.name,
                total,
                tipAmount,
            });
        });

        return results;
    };
    
    return (
        <section id='q3'>
            <Container>
                <Link to="#" onClick={() => window.history.back()}>
                    <Button className="mt-5 btn-warning">Voltar</Button>
                </Link>
                <h1>Questão 3 - Divisor de Conta</h1>

                <div>
                    <h2>Clientes</h2>
                    <Button className="mb-3" onClick={handleAddCustomer}>
                        Adicionar Cliente
                    </Button>

                    {customers.map((customer) => (
                        <div key={customer.id} className="mb-3">
                            <Form.Group>
                                <Form.Label>Nome do Cliente</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={customer.name}
                                    onChange={(e) => handleCustomerNameChange(customer.id, e.target.value)}
                                />
                            </Form.Group>
                        </div>
                    ))}
                </div>

                <div>
                    <h2>Produtos</h2>
                    <Button className="mb-3" onClick={handleAddProduct}>
                        Adicionar Produto
                    </Button>

                    {products.map((product) => (
                        <div key={product.id} className="mb-3">
                            <Form.Group>
                                <Form.Label>Nome do Produto</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={product.name}
                                    onChange={(e) => handleProductInfoChange(product.id, 'name', e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Preço do Produto</Form.Label>
                                <Form.Control
                                    type="number"
                                    step="0.01"
                                    value={product.price}
                                    onChange={(e) =>
                                        handleProductInfoChange(product.id, 'price', parseFloat(e.target.value))
                                    }
                                />
                            </Form.Group>
                        </div>
                    ))}
                </div>

                <div>
                    <h2>Seleção de Produtos por Cliente</h2>
                    {customers.map((customer) => (
                        <div key={customer.id} className="mb-3">
                            <h4>{customer.name}</h4>
                            {products.map((product) => (
                                <Form.Check
                                    key={product.id}
                                    type="checkbox"
                                    label={product.name}
                                    checked={selectedProducts.some(
                                        (item) => item.customerId === customer.id && item.productId === product.id
                                    )}
                                    onChange={() => handleProductSelection(customer.id, product.id)}
                                />
                            ))}
                        </div>
                    ))}
                </div>

                <div>
                    <h2>Pagamento dos 10%</h2>
                    {customers.map((customer) => (
                        <div key={customer.id} className="mb-3">
                            <h4>{customer.name}</h4>
                            <Form.Group>
                                <Form.Check
                                    type="checkbox"
                                    label="Pagar 10%"
                                    checked={tipPayees.some((item) => item.customerId === customer.id)}
                                    onChange={(e) => handleTipPayeeChange(customer.id, e.target.checked)}
                                />
                            </Form.Group>
                        </div>
                    ))}
                </div>

                <div>
                    <h2>Resultados</h2>
                    {calculateResults().map((result, index) => (
                        <div key={index} className="mb-3">
                            <h4>{result.customerName}</h4>
                            <p>Total: R$ {result.total.toFixed(2)}</p>
                            <p>Valor da Taxa de 10%: R$ {result.tipAmount.toFixed(2)}</p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>

    `

    return (
        <section id='q3'>
            <Container>
                <Link to="#" onClick={() => window.history.back()}>
                    <Button className="mt-5 btn-warning">Voltar</Button>
                </Link>
                <h1>Questão 3 - Divisor de Conta</h1>

                <div>
                    <h2>Clientes</h2>
                    <Button className="btn-warning mb-3" onClick={handleAddCustomer}>
                        Adicionar Cliente
                    </Button>

                    {customers.map((customer) => (
                        <div key={customer.id} className="mb-3">
                            <Form.Group>
                                <Form.Label>Nome do Cliente</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={customer.name}
                                    onChange={(e) => handleCustomerNameChange(customer.id, e.target.value)}
                                />
                            </Form.Group>
                        </div>
                    ))}
                </div>

                <div>
                    <h2>Produtos</h2>
                    <Button className="btn-warning mb-3" onClick={handleAddProduct}>
                        Adicionar Produto
                    </Button>

                    {products.map((product) => (
                        <div key={product.id} className="mb-3">
                            <Form.Group>
                                <Form.Label>Nome do Produto</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={product.name}
                                    onChange={(e) => handleProductInfoChange(product.id, 'name', e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Preço do Produto</Form.Label>
                                <Form.Control
                                    type="number"
                                    step="0.01"
                                    value={product.price}
                                    onChange={(e) =>
                                        handleProductInfoChange(product.id, 'price', parseFloat(e.target.value))
                                    }
                                />
                            </Form.Group>
                        </div>
                    ))}
                </div>

                <div>
                    <h2>Seleção de Produtos por Cliente</h2>
                    {customers.map((customer) => (
                        <div key={customer.id} className="mb-3">
                            <h4>{customer.name}</h4>
                            {products.map((product) => (
                                <Form.Check
                                    key={product.id}
                                    type="checkbox"
                                    label={product.name}
                                    checked={selectedProducts.some(
                                        (item) => item.customerId === customer.id && item.productId === product.id
                                    )}
                                    onChange={() => handleProductSelection(customer.id, product.id)}
                                />
                            ))}
                        </div>
                    ))}
                </div>

                <div>
                    <h2>Pagamento dos 10%</h2>
                    {customers.map((customer) => (
                        <div key={customer.id} className="mb-3">
                            <h4>{customer.name}</h4>
                            <Form.Group>
                                <Form.Check
                                    type="checkbox"
                                    label="Pagar 10%"
                                    checked={tipPayees.some((item) => item.customerId === customer.id)}
                                    onChange={(e) => handleTipPayeeChange(customer.id, e.target.checked)}
                                />
                            </Form.Group>
                        </div>
                    ))}
                </div>

                <div>
                    <h2>Resultados</h2>
                    {calculateResults().map((result, index) => (
                        <div key={index} className="mb-3">
                            <h4>{result.customerName}</h4>
                            <p>Total: R$ {result.total.toFixed(2)}</p>
                            <p>Valor da Taxa de 10%: R$ {result.tipAmount.toFixed(2)}</p>
                        </div>
                    ))}
                </div>
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
    );
};

export default Q3;