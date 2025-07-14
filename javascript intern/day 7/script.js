"use strict";

// Problem 01: Simple Amplitude Calculator
const temps1 = [3, -2, -6, -1, "error", 9, 13, 17, 1514, 9, 5];

const calcTempAmplitudeSingle = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }

  console.log(max, min);
  return max - min;
};

const amplitude1 = calcTempAmplitudeSingle(temps1);
console.log(amplitude1);

// Problem 02: Amplitude Calculator from Two Arrays
const calcTempAmplitude = function (t1, t2) {
  const temps = t1.concat(t2);
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }

  console.log(max, min);
  return max - min;
};

const amplitude2 = calcTempAmplitude([3, 5, 1], [9, 0, 5]);
console.log(amplitude2);

// Problem 03: Measure Kelvin (Debugging Practice)
const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",
    value: 10, // Hardcoded instead of prompt for testing
  };

  console.table(measurement);
  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin());

// Problem 04: Bugged Amplitude Calculator (Initial Max/Min wrong)
const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    debugger;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }

  console.log(max, min);
  return max - min;
};

const amplitudeBugFixed = calcTempAmplitudeBug([3, 5, 1], [9, 0, 5]);
console.log(amplitudeBugFixed);
