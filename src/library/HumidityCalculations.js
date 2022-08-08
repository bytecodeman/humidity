const precision = 2;
const constA = 17.625; //17.271;
const constB = 243.04; //237.7;

function round(value, decimals) {
  return Number(Math.round(value + "e" + decimals) + "e-" + decimals);
}

function calcActualTemp(dp, rel, tempScale) {
  const rh = +rel;

  let dew = +dp;
  if (tempScale === "F") {
    dew = (dew - 32.0) / 1.8;
  }

  const gamma = (constA * dew) / (constB + dew);
  const temp_numer = constB * (gamma - Math.log(rh / 100.0));
  const temp_denom = constA + Math.log(rh / 100.0) - gamma;
  let dummy_temp = temp_numer / temp_denom;
  if (tempScale === "F") {
    dummy_temp = dummy_temp * 1.8 + 32.0;
  }
  return String(round(dummy_temp, precision));
}

function calcDewPoint(actualTemp, rel, tempScale) {
  const rh = +rel;

  let temp = +actualTemp;
  if (tempScale === "F") {
    temp = (temp - 32.0) / 1.8;
  }

  const dew_numer =
    constB * (Math.log(rh / 100.0) + (constA * temp) / (temp + constB)); //Math.log(rh/100*6.112/6.1078*Math.exp((17.67*temp)/(temp-0+243.5)));
  const dew_denom =
    constA - Math.log(rh / 100.0) - (constA * temp) / (temp + constB);
  let dummy_dew = dew_numer / dew_denom;

  if (tempScale === "F") {
    dummy_dew = dummy_dew * 1.8 + 32.0;
  }
  return String(round(dummy_dew, precision));
}

function calcRelativeHumidity(actualTemp, dp, tempScale) {
  let dew = +dp;
  if (tempScale === "F") {
    dew = (dew - 32.0) / 1.8;
  }
  let temp = +actualTemp;
  if (tempScale === "F") {
    temp = (temp - 32.0) / 1.8;
  }

  const rh_numer = 100.0 * Math.exp((constA * dew) / (dew + constB));
  const rh_denom = Math.exp((constA * temp) / (temp + constB));
  return String(round(rh_numer / rh_denom, precision));
}

module.exports = {
  calcActualTemp,
  calcDewPoint,
  calcRelativeHumidity,
};
