import mostrarPrimos from "./Factores_Primos";

describe("Factores Primos", () => {
  it("Se debe devolver una lista vacia al ingresar 1", () => {
    expect(mostrarPrimos(1)).toEqual([]);
  });

  it("La lista devuelve los factores al escribir 2", () => {
    expect(mostrarPrimos(2)).toEqual([2]);
  });
});
