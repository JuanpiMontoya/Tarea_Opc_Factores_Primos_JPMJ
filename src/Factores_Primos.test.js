import mostrarPrimos from "./Factores_Primos";

describe("Factores Primos", () => {
  it("Se debe devolver una lista vacia al ingresar 1", () => {
    expect(mostrarPrimos(1)).toEqual([]);
  });

  it("La lista devuelve los factores al escribir 2", () => {
    expect(mostrarPrimos(2)).toEqual([2]);
  });

  it("La lista devuelve los factores al escribir 3", () => {
    expect(mostrarPrimos(3)).toEqual([3]);
  });

  it("La lista devuelve los dos factores al escribir 4", () => {
    expect(mostrarPrimos(4)).toEqual([2,2]);
  });

  it("La lista devuelve los dos factores al escribir 6", () => {
    expect(mostrarPrimos(6)).toEqual([2,3]);
  });

});
