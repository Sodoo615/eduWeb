import Header from "../../ES4edu/es-header/page.js";
import Map from "../../components/Map/page.js";
import Contact from "../../components/contact/page.js";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdContactPhone } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import style from "../../holbooBarih/holboo.css";
export default function Holboo() {
  return (
    <div>
      <Header></Header>
      <Map />
      <div className="etsegHolboo">
        <div className="mainLoca">
          <div className="etsegLoc">
            <div className="contactLoc">
              <FaMapLocationDot />
            </div>
            <h3>Хаяг</h3>
          </div>

          <p>
            Улаанбаатар хот Баянзүрх дүүрэг 6-р хороо Эрхэс төвийн оффис 701
          </p>
        </div>
        <div className="mainLoca">
          <div className="etsegLoc">
            <div className="contactLoc">
              <MdContactPhone />
            </div>
            <h3>
              И-Мэйл & <br /> Утас
            </h3>
          </div>

          <p>
            es4@mongoltravel-edu.com <br />
           <br /> +(976) - 99689839 <br />
                   <br />   +(976) - 11457594
          </p>
        </div>
      </div>
      <Contact />
    </div>
  );
}
