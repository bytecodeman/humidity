const Footer = () => {
  return (
    <footer className="flex justify-center mb-24">
      <div>
        <h3 className="font-bold mb-2">Equations Used:</h3>
        <div className="font-mono mb-2">
          <p className="mb-2">
            RH = 100 * (EXP((17.625*TD) / (243.04+TD)) / EXP((17.625*T) /
            (243.04+T)))
          </p>
          <p className="mb-2">
            TD = 243.04 * (LN(RH/100) + ((17.625*T) / (243.04+T))) / (17.625 -
            LN(RH/100) - ((17.625*T) / (243.04+T)))
          </p>
          <p className="mb-3">
            T = 243.04 * (((17.625*TD) / (243.04+TD)) - LN(RH/100)) / (17.625 +
            LN(RH/100) - ((17.625*TD) / (243.04+TD)))
          </p>
        </div>
        <ul className="list-disc list-inside mb-6">
          <li>
            T and TD inputs/outputs to the equations are in <b>Celsius</b>
          </li>
          <li>
            EXP and LN are the exponential and natural logarithm functions
          </li>
        </ul>
        <h3 className="font-bold mb-2">Heat Index Equation:</h3>
        <div className="font-mono mb-2">
          HI = -42.379
          <div className="ml-6">
            + 2.04901523 * T<br /> + 10.14333127 * RH
            <br /> - 0.22475541 * T * RH
            <br /> - 0.00683783 * T * T<br /> - 0.05481717 * RH * RH +
            0.00122874 * T * T * RH
            <br /> + 0.00085282 * T * RH * RH
            <br /> - 0.00000199 * T * T * RH * RH
          </div>
        </div>
        <ul className="list-disc list-inside mb-6">
          <li>
            T and HI inputs/outputs to the equations are in <b>Fahrenheit</b>.
          </li>
          <li>
            Some adjustments are made based on{" "}
            <a
              href="http://www.wpc.ncep.noaa.gov/html/heatindex_equation.shtml"
              target="_blank"
              rel="noreferrer"
              className="text-primary font-semibold underline"
            >
              National Weather Service
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
