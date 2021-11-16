import { sumar, restar, multplicar, dividir } from "../operations";

/**
 * *Part1: test('recibe la descripcion de la prueba', 'callback')
 */
test("Esta funcion va a recibir 3 + 4 y retorna 7", () => {
  // Dentro de expect debo llamar a la funcion y saber que me va a retornar
  expect(sumar(3,4)).toBe(7);
});

test("Esta funcion va a restar 4 - 3 y retorna 1", () => {
  expect(restar(4,3)).toBe(1);
});

test("Esto es una multiplicacion 6 * 5 y retorna 30", () => {
    expect(multplicar(6, 5)).toBe(30);
});

test("Esto es una division 10 / 2 y retorna 5", () => {
expect(dividir(10, 0)).toBe(0);
});