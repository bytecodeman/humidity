const precision = 2;
const constA = 17.625;
const constB = 243.04;

function round(value, decimals) {
  return Number(Math.round(value + "e" + decimals) + "e-" + decimals);
}

function f2c(temp) {
  return (temp - 32.0) / 1.8;
}

function c2f(temp) {
  return 1.8 * temp + 32.0;
}

function calcActualTemp(dp, rel, tempScale) {
  const rh = +rel;

  let dew = +dp;
  if (tempScale === "F") {
    dew = f2c(dew);
  }

  const gamma = (constA * dew) / (constB + dew);
  const temp_numer = constB * (gamma - Math.log(rh / 100.0));
  const temp_denom = constA + Math.log(rh / 100.0) - gamma;
  let dummy_temp = temp_numer / temp_denom;
  if (tempScale === "F") {
    dummy_temp = c2f(dummy_temp);
  }
  return String(round(dummy_temp, precision));
}

function calcDewPoint(actualTemp, rel, tempScale) {
  const rh = +rel;

  let temp = +actualTemp;
  if (tempScale === "F") {
    temp = f2c(temp);
  }

  const dew_numer =
    constB * (Math.log(rh / 100.0) + (constA * temp) / (temp + constB)); //Math.log(rh/100*6.112/6.1078*Math.exp((17.67*temp)/(temp-0+243.5)));
  const dew_denom =
    constA - Math.log(rh / 100.0) - (constA * temp) / (temp + constB);
  let dummy_dew = dew_numer / dew_denom;

  if (tempScale === "F") {
    dummy_dew = c2f(dummy_dew);
  }
  return String(round(dummy_dew, precision));
}

function calcRelativeHumidity(actualTemp, dp, tempScale) {
  let dew = +dp;
  if (tempScale === "F") {
    dew = f2c(dew);
  }
  let temp = +actualTemp;
  if (tempScale === "F") {
    temp = f2c(temp);
  }

  const rh_numer = 100.0 * Math.exp((constA * dew) / (dew + constB));
  const rh_denom = Math.exp((constA * temp) / (temp + constB));
  return String(round(rh_numer / rh_denom, precision));
}

function calcHeatIndex(actualTemp, rel, tempScale) {
  const rh = +rel;

  let temp = +actualTemp;
  if (tempScale === "C") {
    temp = c2f(temp);
  }

  let hi;

  if (temp <= 40.0) {
    hi = temp;
  } else {
    const hitemp = 61.0 + (temp - 68.0) * 1.2 + rh * 0.094;
    const fptemp = temp;
    const hifinal = 0.5 * (fptemp + hitemp);

    if (hifinal > 79.0) {
      hi =
        -42.379 +
        2.0490153 * temp +
        10.14333127 * rh -
        0.22475541 * temp * rh -
        6.83783e-3 * temp * temp -
        5.481717e-2 * rh * rh +
        1.22874e-3 * temp * temp * rh +
        8.5282e-4 * temp * rh * rh -
        1.99e-6 * temp * temp * rh * rh;

      if (rh <= 13.0 && temp >= 80.0 && temp <= 112.0) {
        const adj1 = (13.0 - rh) / 4.0;
        const adj2 = Math.sqrt((17.0 - Math.abs(temp - 95.0)) / 17.0);
        const adj = adj1 * adj2;
        hi -= adj;
      } else if (rh > 85.0 && temp >= 80.0 && temp <= 87.0) {
        const adj1 = (rh - 85.0) / 10.0;
        const adj2 = (87.0 - temp) / 5.0;
        const adj = adj1 * adj2;
        hi += adj;
      }
    } else {
      hi = hifinal;
    }
  }

  if (tempScale === "C") {
    hi = f2c(hi);
  }
  return String(round(hi, precision));
}

module.exports = {
  calcActualTemp,
  calcDewPoint,
  calcRelativeHumidity,
  calcHeatIndex,
};
