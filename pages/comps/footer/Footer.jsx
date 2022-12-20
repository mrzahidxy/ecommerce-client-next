import {
  faFacebook,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer className="bg-white border border-t bnorder-gray-200">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="col-span-1 space-y-4">
            <div className="text-3xl text-gray-800">LOGO</div>
            <p className="text-gray-500">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum
              voluptatibus voluptates dolore.
            </p>
            <div className="flex  items-center space-x-3">
              <span className="text-primary text-2xl">
                <FontAwesomeIcon icon={faFacebook} />
              </span>
              <span className="text-primary text-2xl">
                <FontAwesomeIcon icon={faLinkedin} />
              </span>
              <span className="text-primary text-2xl">
                <FontAwesomeIcon icon={faTwitter} />
              </span>
            </div>
          </div>

          <div className="col-span-2 grid grid-cols-3 gap-10">
            <div className="flex flex-col items-center">
              <h1 className="text-lg text-gray-800 font-medium">Solutions</h1>
              <a className="text-gray-500 text-sm" href="">
                Marketing
              </a>
              <a className="text-gray-500 text-sm" href="">
                Anyalytics
              </a>
              <a className="text-gray-500 text-sm" href="">
                Commerce
              </a>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="text-lg text-gray-800 font-medium">Solutions</h1>
              <a className="text-gray-500 text-sm" href="">
                Marketing
              </a>
              <a className="text-gray-500 text-sm" href="">
                Anyalytics
              </a>
              <a className="text-gray-500 text-sm" href="">
                Commerce
              </a>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="text-lg text-gray-800 font-medium">Solutions</h1>
              <a className="text-gray-500 text-sm" href="">
                Marketing
              </a>
              <a className="text-gray-500 text-sm" href="">
                Anyalytics
              </a>
              <a className="text-gray-500 text-sm" href="">
                Commerce
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
