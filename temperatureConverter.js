// Take user input for temperature in Kelvin
var kelvin = prompt('What is the termperature in Kelvin?');

// convert Kelvin to Celsius
const celsius = kelvin - 293;

// convert to Fahrenheit and round down
let fahrenheit = Math.floor(celsius * (9/5) + 32);

alert(`The temperature is ${fahrenheit} degrees Fahrenheit.`);