import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";

function IMCCalculadora() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [result, setResult] = useState(null);

  const calculateIMC = (e) => {
    e.preventDefault();

    const heightInMeters = height / 100;
    const imc = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    let classification = "";

    if (imc < 18.5) {
      classification = "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 24.9) {
      classification = "Peso normal";
    } else if (imc >= 25 && imc < 29.9) {
      classification = "Sobrepeso";
    } else if (imc >= 30 && imc < 34.9) {
      classification = "Obesidade Grau I";
    } else if (imc >= 35 && imc < 39.9) {
      classification = "Obesidade Grau II";
    } else {
      classification = "Obesidade Grau III";
    }

    setResult({ imc, classification });
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <h2 className="text-center">Calculadora de IMC</h2>
          <Form onSubmit={calculateIMC} className="p-4 border rounded shadow">
            <Form.Group controlId="height" className="mb-3">
              <Form.Label>Altura (cm):</Form.Label>
              <Form.Control
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                required
                min="0"
                step="0.01"
                placeholder="Digite sua altura em centímetros"
              />
            </Form.Group>

            <Form.Group controlId="weight" className="mb-3">
              <Form.Label>Peso (kg):</Form.Label>
              <Form.Control
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                required
                min="0"
                step="0.01"
                placeholder="Digite seu peso em quilogramas"
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Calcular IMC
            </Button>
          </Form>

          {result && (
            <Alert variant="info" className="mt-4">
              <h4>Resultado</h4>
              <p>
                <strong>IMC:</strong> {result.imc}
              </p>
              <p>
                <strong>Classificação:</strong> {result.classification}
              </p>
            </Alert>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default IMCCalculadora;
