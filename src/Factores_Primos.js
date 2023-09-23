
function mostrarPrimos(num)
{
    const Fac_Primos = []
    let divisor = 2;
    for (; num > 1; divisor++) {
        for (; num % divisor === 0; num /= divisor) {
          Fac_Primos.push(divisor);
        }
      }
    return Fac_Primos;
}

export default mostrarPrimos;
