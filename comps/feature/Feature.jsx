import {
  faClockRotateLeft,
  faMoneyBill,
  faMoneyBillTransfer,
  faMoneyCheckDollar,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Feature = () => {
  return (
    <div className="container py-8">
      <div className="w-10/12 grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto">
        <div className="border border-primary rounded py-5 flex items-center gap-4 justify-center">
          <div className="text-4xl text-primary">
            <FontAwesomeIcon icon={faTruck} />
          </div>
          <div>
            <h3 className="text-xl text-gray-800 font-medium capitalize dark:text-white">
              Free Shipping
            </h3>
            <p className="text-sm text-gray-500 font-medium capitalize dark:text-white">
              Oreder over 200TK
            </p>
          </div>
        </div>
        <div className="border border-primary rounded py-5 flex items-center gap-4 justify-center">
          <div className="text-4xl text-primary ">
            <FontAwesomeIcon icon={faMoneyBillTransfer} />
          </div>
          <div>
            <h3 className="text-xl text-gray-800  font-medium dark:text-white">Money Return</h3>
            <p className="text-sm text-gray-500 font-medium capitalize dark:text-white">
              30 days money return
            </p>
          </div>
        </div>
        <div className="border border-primary rounded py-5 flex items-center gap-4 justify-center">
          <div className="text-4xl text-primary">
            <FontAwesomeIcon icon={faClockRotateLeft} />
          </div>
          <div>
            <h3 className="text-xl text-gray-800 font-medium dark:text-white">24*7 Support</h3>
            <p className="text-sm text-gray-500 font-medium capitalize dark:text-white">
              Customer Support
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
