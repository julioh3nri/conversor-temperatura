function converter(){
    var TempAntes = document.getElementById('TempAntes').value;
    var TempDepois = document.getElementById('TempDepois').value;
    var temperatura = parseFloat(document.getElementById('temperatura').value);

    if (isNaN(temperatura)) {
        alert("Insira um valor numérico válido!");
        document.getElementById('resultado').value = "";
        return;
    }

    var convertedValue;

    
    if (TempAntes === TempDepois) {
        convertedValue = temperatura; 
    } else if (TempAntes === 'C' && TempDepois === 'F') {
        convertedValue = (temperatura * 9/5) + 32;
    } else if (TempAntes === 'C' && TempDepois === 'K') {
        convertedValue = temperatura + 273;
    } else if (TempAntes === 'F' && TempDepois === 'C') {
        convertedValue = (temperatura - 32) * 5/9;
    } else if (TempAntes === 'F' && TempDepois === 'K') {
        convertedValue = (temperatura - 32) * 5/9 + 273;
    } else if (TempAntes === 'K' && TempDepois === 'C') {
        convertedValue = temperatura - 273;
    } else if (TempAntes === 'K' && TempDepois === 'F') {
        convertedValue = (temperatura - 273) * 9/5 + 32;
    }

    document.getElementById('resultado').value = `${convertedValue.toFixed()} ${TempDepois}`;
}