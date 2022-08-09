import { useState } from "react";
import logoPng from "../img/humidity-dewpoint.png";
import logoWebP from "../img/humidity-dewpoint.webp";
import ImgWithFallback from "./ImgWithFallback";

function JumboTron() {
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  return (
    <>
      <div className="p-6 bg-white text-gray-700">
        <h1 className="font-bold text-3xl mb-5 text-center">
          Calculate Temperature, Dewpoint, or Relative Humidity
        </h1>
        <div className="flex flex-col justify-center gap-y-10 items-center md:flex-row md:gap-x-10 md:gap-y-0 mb-6">
          <ImgWithFallback
            src={logoWebP}
            fallback={logoPng}
            alt="Humidity Calculator"
            title="Humidity Calculator"
            className="img-fluid rounded cursor-pointer max-w-xs"
            onClick={handleShowModal}
          />
          <div>
            <button
              type="button"
              className="mb-5 px-6 py-2.5 bg-primary text-white font-bold rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              onClick={handleShowModal}
            >
              About
            </button>{" "}
            <a
              href="https://github.com/bytecodeman/humidity"
              target="_blank"
              rel="noreferrer"
              className="block mb-3 text-primary font-semibold underline"
            >
              Source Code
            </a>
            <h3 className="font-bold mb-2">Instructions</h3>
            <ol className="list-decimal list-inside">
              <li>Choose a temperature scale.</li>
              <li>Enter values in 2 of the 3 boxes.</li>
              <li>Press "Calculate" to find the missing value.</li>
            </ol>
          </div>
        </div>
        <hr className="my-6 border-gray-300" />
      </div>
      {showModal && (
        <div
          className="relative z-10"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
          onClick={handleCloseModal}
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

          <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-full m-4 text-center">
              <div className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <h1 className="font-bold text-3xl mb-5 text-center">
                        Calculate Temperature, Dewpoint, or Relative Humidity
                      </h1>
                      <ImgWithFallback
                        src={logoWebP}
                        fallback={logoPng}
                        alt="Humidity Calculator"
                        title="Humidity Calculator"
                        className="img-fluid block rounded my-5"
                        width="800px"
                        height="auto"
                      />
                      <p className="text-sm text-gray-500">
                        Designed and Coded by: Antonio C. Silvestri
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row-reverse px-4 py-3">
                  <button
                    type="button"
                    onClick={handleCloseModal}
                    className="block w-full mb-5 px-6 py-2.5 bg-primary text-white font-bold rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out md:inline md:w-auto"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default JumboTron;
