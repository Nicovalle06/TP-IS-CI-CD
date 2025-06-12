const request = require('supertest');
const express = require('express');
const app = require('../server'); // Ajusta la ruta si necesario
const assert = require('assert'); // Usa assert de Node.js


function suma(a, b) {
  return Number(a) + Number(b);
}


describe('Función suma', () => {
  it('debería sumar dos números', () => {
    assert.strictEqual(suma(2, 3), 5);
  });
});

