import { useState } from "react";
import {
  calcActualTemp,
  calcDewPoint,
  calcRelativeHumidity,
} from "../library/HumidityCalculations";

const HumidityForm = (props) => {
  const [formData, setFormData] = useState({
    tempScale: "",
    actualTemperature: "",
    dewPoint: "",
    relativeHumidity: "",
  });
  const [errMsg, setErrMsg] = useState("");

  const reset = () => {
    setErrMsg("");
    setFormData({
      tempScale: "",
      actualTemperature: "",
      dewPoint: "",
      relativeHumidity: "",
    });
  };

  const calculate = () => {
    const { tempScale, actualTemperature, dewPoint, relativeHumidity } =
      formData;
    const [ta, dp, rh] = [
      actualTemperature.trim(),
      dewPoint.trim(),
      relativeHumidity.trim(),
    ];

    function isNum(val) {
      return !isNaN(val);
    }

    if (tempScale !== "F" && tempScale !== "C") {
      setErrMsg("Select a Temperature Scale");
      return;
    }

    switch (true) {
      case ta === "":
        if (dp === "" || rh === "") {
          setErrMsg("Only 1 field should be blank");
        } else if (!isNum(dp) || !isNum(rh)) {
          setErrMsg("Not Blank Fields must be numbers");
        } else {
          const calc = calcActualTemp(dp, rh, tempScale);
          setErrMsg("");
          setFormData({ ...formData, actualTemperature: calc });
        }
        break;

      case dp === "":
        if (ta === "" || rh === "") {
          setErrMsg("Only 1 field should be blank");
        } else if (!isNum(ta) || !isNum(rh)) {
          setErrMsg("Not Blank Fields must be numbers");
        } else {
          const calc = calcDewPoint(ta, rh, tempScale);
          setErrMsg("");
          setFormData({ ...formData, dewPoint: calc });
        }
        break;

      case rh === "":
        if (ta === "" || dp === "") {
          setErrMsg("Only 1 field should be blank");
        } else if (!isNum(ta) || !isNum(dp)) {
          setErrMsg("Not Blank Fields must be numbers");
        } else {
          const calc = calcRelativeHumidity(ta, dp, tempScale);
          setErrMsg("");
          setFormData({ ...formData, relativeHumidity: calc });
        }
        break;

      default:
        setErrMsg("Leave one Field Blank");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form className="w-full max-w-lg mx-auto mb-10">
      {errMsg && (
        <div className="font-bold text-2xl text-red-500 text-center mb-5">
          {errMsg}
        </div>
      )}
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/2 mb-1 md:mb-0">
          <label
            htmlFor="fahrenheitScale"
            className="text-gray-500 block font-bold md:text-right pr-4"
          >
            Temperature Scale
          </label>
        </div>
        <div className="md:1/2 border border-gray-400 p-2 rounded md:border-none">
          <div className="flex items-center mb-4">
            <input
              type="radio"
              id="fahrenheitScale"
              name="tempScale"
              value="F"
              className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
              checked={formData.tempScale === "F"}
              onChange={handleChange}
            />
            <label
              htmlFor="fahrenheitScale"
              className="text-sm font-medium text-gray-900 ml-2 block"
            >
              Fahrenheit
            </label>
          </div>

          <div className="flex items-center">
            <input
              type="radio"
              id="celciusScale"
              name="tempScale"
              value="C"
              className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
              checked={formData.tempScale === "C"}
              onChange={handleChange}
            />
            <label
              htmlFor="celciusScale"
              className="text-sm font-medium text-gray-900 ml-2 block"
            >
              Celcius
            </label>
          </div>
        </div>
      </div>

      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/2 mb-1 md:mb-0">
          <label
            className="text-gray-500 block font-bold md:text-right pr-4"
            htmlFor="actualTemperature"
          >
            Actual Temperature <b className="text-2xl">(T) &deg;</b>
          </label>
        </div>
        <div className="md:w-1/2">
          <input
            type="text"
            id="actualTemperature"
            name="actualTemperature"
            value={formData.actualTemperature}
            onChange={handleChange}
            placeholder="Enter Actual Temperature"
            className="border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-1"
          />
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/2 mb-1 md:mb-0">
          <label
            className="text-gray-500 block font-bold md:text-right pr-4"
            htmlFor="dewPoint"
          >
            Dew Point <b className="text-2xl">(TD) &deg;</b>
          </label>
        </div>
        <div className="md:w-1/2">
          <input
            type="text"
            id="dewPoint"
            name="dewPoint"
            value={formData.dewPoint}
            onChange={handleChange}
            placeholder="Enter Dew Point"
            className="border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-1"
          />
        </div>
      </div>
      <div className="md:flex md:items-center mb-10">
        <div className="md:w-1/2 mb-1 md:mb-0">
          <label
            className="text-gray-500 block font-bold md:text-right pr-4"
            htmlFor="relativeHumidity"
          >
            Relative Humidity <b className="text-2xl">(RH) %</b>
          </label>
        </div>
        <div className="md:w-1/2">
          <input
            type="text"
            id="relativeHumidity"
            name="relativeHumidity"
            value={formData.relativeHumidity}
            onChange={handleChange}
            placeholder="Enter Relative Humidity"
            className="border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-1"
          />
        </div>
      </div>

      <div className="mb-20 md:mb-0 md:flex md:items-center">
        <div className="md:w-1/2"></div>
        <div className="md:w-1/2">
          <button
            className="bg-primary hover:bg-primaryhover focus:outline-1 text-white font-bold py-2 px-4 rounded mr-3"
            type="button"
            onClick={calculate}
          >
            Calculate
          </button>
          <button
            className="bg-secondary hover:bg-secondaryhover focus:outline-1 text-white font-bold py-2 px-4 rounded"
            type="button"
            onClick={reset}
          >
            Reset
          </button>
        </div>
      </div>
    </form>
  );
};

export default HumidityForm;
