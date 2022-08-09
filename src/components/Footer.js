function Footer() {
  return (
    <section id="footer" className="flex justify-center mb-24">
      <div>
        <h3 className="font-bold mb-2">Equations Used:</h3>
        <div className="font-mono mb-2">
          <p className="mb-2">
            RH = 100*(EXP((17.625*TD)/(243.04+TD))/EXP((17.625*T)/(243.04+T)))
          </p>
          <p className="mb-2">
            TD =
            243.04*(LN(RH/100)+((17.625*T)/(243.04+T)))/(17.625-LN(RH/100)-((17.625*T)/(243.04+T)))
          </p>
          <p className="mb-5">
            T =
            243.04*(((17.625*TD)/(243.04+TD))-LN(RH/100))/(17.625+LN(RH/100)-((17.625*TD)/(243.04+TD)))
          </p>
        </div>
        <ul className="list-disc list-inside">
          <li>
            T and TD inputs/outputs to the equations are in <b>Celsius</b>
          </li>
          <li>
            EXP and LN are the exponential and natural logarithm functions
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Footer;
