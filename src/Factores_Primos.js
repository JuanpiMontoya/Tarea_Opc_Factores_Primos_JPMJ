
function mostrarPrimos(num)
{
    const Fac_Primos = []
    if (num > 1) {
        while (num % 2 == 0) {
            Fac_Primos.push(2);
            num = num / 2;
        }
        if (num > 1){
            Fac_Primos.push(num);
        }
    }
    return Fac_Primos;
}

export default mostrarPrimos;
