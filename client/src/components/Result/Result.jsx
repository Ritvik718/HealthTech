import React from "react";
import { RxCross2 } from "react-icons/rx";

const Result = () => {
  return (
    <div className="container mx-auto">
      <h2 className="text-6xl font-bold mb-4 text-center ">
        Your Health Test Results
      </h2>
      <h3 className="text-lg mb-4 text-center pb-6">
        Based on your symptoms, we predict you may have the following condition:
      </h3>
      <div className="rounded overflow-hidden shadow-lg mb-24">
        <table className="w-full border border-gray-300 rounded-lg">
          <tbody>
            <tr>
              <td className="px-4 py-2 font-bold text-5xl text-center border border-gray-300 ">
                Disease A
              </td>
            </tr>
            <tr>
              <td className="px-4 py-6 text-center border border-gray-300">
                <ul>
                  <li className="text-lg mb-2">
                    Symptom 1{" "}
                    <span className="text-gray-500 text-lg">
                      {/* tick or cross */}
                    </span>
                  </li>
                  <li className="text-lg mb-2">
                    Symptom 2{" "}
                    <span className="text-gray-500 text-lg inline">
                      {/* tick or cross */}
                    </span>
                  </li>
                  <li className="text-lg mb-2">
                    Symptom 3{" "}
                    <span className="text-gray-500 text-lg">
                      {/* tick or cross */}
                    </span>
                  </li>
                  <li className="text-lg">
                    Symptom 4{" "}
                    <span
                      className="text-gray-500 
                    text-lg"
                    >
                      {/* tick or cross */}
                    </span>
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Result;
