function convertUnit(id, value){
  //Variables where to display output
  var outputInches = document.querySelector("#inputInches"), 
      outputFeet = document.querySelector("#inputFeet"), 
      outputYards = document.querySelector("#inputYards"), 
      outputMiles = document.querySelector("#inputMiles"), 
      outputCm = document.querySelector("#inputCm"), 
      outputM = document.querySelector("#inputMetres"), 
      outputKm = document.querySelector("#inputKm");
  
  //Declare measurement variables
  var inches,feet,yards,miles,cm,m,km;
  
  //Change input value to a number for calculations
  value = Number(value);
  
  //Depending on input id, calculate the number value
  switch(id){
    case "inputInches":
      inches = value;
      feet = value * 0.083333;
      yards = value * 0.027778;
      miles = value * 0.000015783;
      cm = value / 0.39370;
      m = value / 39.370;
      km = value / 39370;
      break;
    case "inputFeet":
      inches = value * 12;
      feet = value;
      yards = value * 0.033333;
      miles = value * 0.00018939;
      cm = value / 0.032808;
      m = value / 3.2808;
      km = value / 3280.8;
      break;
    case "inputYards":
      inches = value * 36;
      feet = value * 3;
      yards = value;
      miles = value * 0.00056818;
      cm = value / 0.010936;
      m = value / 1.0936;
      km = value / 1093.6;
      break;
    case "inputMiles":
      inches = value * 63360;
      feet = value * 5280;
      yards = value * 1760;
      miles = value;
      cm = value / 0.0000062137;
      m = value / 0.00062137;
      km = value / 0.62137;
      break;
    case "inputCm":
      inches = value * 0.39370;
      feet = value * 0.032808;
      yards = value * 0.010936;
      miles = value * 0.0000062137;
      cm = value;
      m = value / 100;
      km = value / 100000;
      break;
    case "inputMetres":
      inches = value * 39.370;
      feet = value * 3.2808;
      yards = value * 1.0936;
      miles = value * 0.00062137;
      cm = value / 0.01;
      m = value;
      km = value / 1000;
      break;
    case "inputKm":
      inches = value * 39370;
      feet = value * 3280.8;
      yards = value * 1093.6;
      miles = value * 0.62137;
      cm = value * 100000;
      m = value * 1000;
      km = value;
      break;
    default:
  }
  
  //Display calculated values on screen
  outputInches.value = inches;
  outputFeet.value = feet;
  outputYards.value = yards;
  outputMiles.value = miles;
  outputCm.value = cm;
  outputM.value = m;
  outputKm.value = km;
  }
