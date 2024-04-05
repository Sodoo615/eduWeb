import style from "../english/englsih.css";
import styles from "./chess.css";
import { FaChessKing } from "react-icons/fa";
import { FaChessQueen } from "react-icons/fa";
import { FaChessKnight } from "react-icons/fa";
export default function English() {
  return (
    <div className="level-type">
      <div className="chess-img"></div>

      <div className="chess-mains">
        <h2>Шатар ой санамжаа алдах өвчний эсрэг хамгийн сайн тоглоом.</h2>
        <div className="cardsssd">
          <div className="grid">
            <div className="grid-item  chess1">
              <FaChessKing className="star" />
              <h3>
                ШАТРЫН СУРГАЛТ БЯМБА, НЯМ ГАРАГИЙН АНГИЙН БҮРТГЭЛ БАЙНГА ЯВАГДАЖ
                БАЙНА.
              </h3>
              <li>Сургалтанд бүх насныхан хамрагдах боломжтой.</li>
            </div>
            <div className="grid-item chess2">
              <FaChessQueen className="star" />
              <h3>ШАТРЫН УР ЧАДВАР /  Давуу тал: </h3>
              <li>Анхан, дунд, гүнзгий шатны мэдлэгтэй болох</li>
              <li> Бодлого дасгалтай ажиллаж сурах</li>
              <li>  Практик тоглолт хийж сурах</li>
            </div>
            <div className="grid-item chess3">
              <FaChessKnight className="star" />
              <h3> Хаяг: Бөхийн өргөө Эрхэт оффис 7 давхар</h3>
              <li>
              Утас: 99689839
              </li>
            </div>
          </div>
        </div>
      </div>
      <div>

      </div>
    </div>
  );
}
