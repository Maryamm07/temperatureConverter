const celcius = document.querySelector('#celcius > input');
const fahrenheit = document.querySelector('#fahrenheit > input');
const kelvin = document.querySelector('#kelvin > input');

function roundNum(num){
    return Math.round(num*100)/100;
}
function cToFandK(){
    const cTemp = parseFloat(celcius.value);
    const fTemp = (cTemp * (9/5)) + 32;
    const kTemp = cTemp + 273.15;
    fahrenheit.value = roundNum(fTemp);
    kelvin.value = roundNum(kTemp);
    if (cTemp > 30) {
        alert("🥵 It's hot!");
    } else {
        alert("🥶 It's cold!");
    }
}
function fToCandK(){
    const fTemp = parseFloat(fahrenheit.value);
    const cTemp = (fTemp - 32) * (5/9);
    const kTemp = (fTemp + 459.67) * 5/9;
    celcius.value = roundNum(cTemp);
    kelvin.value = roundNum(kTemp);
}
function kToCandF(){
    const kTemp = parseFloat(kelvin.value);
    const cTemp = kTemp - 273.15;
    const fTemp = 9/5 * (kTemp - 273) + 32;
    celcius.value = roundNum(cTemp);
    fahrenheit.value = roundNum(fTemp); 
}
function main(){
    celcius.addEventListener('change', cToFandK);
    fahrenheit.addEventListener('change', fToCandK);
    kelvin.addEventListener('change', kToCandF);
}

main();
