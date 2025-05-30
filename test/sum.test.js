const request = require('supertest');
const express = require('express');
const app = require('../server'); // Ajusta la ruta si necesario

// Este bloque es necesario si el servidor en server.js no exporta `app` directamente
// Puedes extraer la lógica de Express en un archivo separado, ej: app.js

describe('POST /sumar', () => {
  it('debe devolver la suma de dos números', async () => {
    const respuesta = await request(app)
      .post('/sumar')
      .send({ num1: 5, num2: 7 });

    expect(respuesta.statusCode).toBe(200);
    expect(respuesta.body.resultado).toBe(12);
  });

  it('debe manejar strings numéricos correctamente', async () => {
    const respuesta = await request(app)
      .post('/sumar')
      .send({ num1: "3", num2: "2" });

    expect(respuesta.statusCode).toBe(200);
    expect(respuesta.body.resultado).toBe(5);
  });

  it('debe manejar números negativos', async () => {
    const respuesta = await request(app)
      .post('/sumar')
      .send({ num1: -4, num2: -6 });

    expect(respuesta.body.resultado).toBe(-10);
  });
});
