import {
  faCcAmex,
  faCcMastercard,
  faCcVisa,
  faPaypal,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Copyright = () => {
  return (
    <div className="bg-black">
      <div className="container flex justify-between text-white ">
        <div className="flex space-x-1">
          <p className=" font-medium">© Logo</p>
          <p className="capitalize">All rights reserved</p>
        </div>
        <div className="space-x-2 text-lg text-white">
          <FontAwesomeIcon icon={faPaypal} />
          <FontAwesomeIcon icon={faCcVisa} />
          <FontAwesomeIcon icon={faCcMastercard} />
          <FontAwesomeIcon icon={faCcAmex} />
        </div>
      </div>
    </div>
  );
};

export default Copyright;
