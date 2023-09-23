
function mostrarPrimos(num)
{
    const Fac_Primos = []
    let divisor = 2;
    while (num > 1) {
        while (num % divisor == 0) {
            Fac_Primos.push(divisor);
            num = num / divisor;
        }    
        divisor++; 
    }
    return Fac_Primos;
}

export default mostrarPrimos;
