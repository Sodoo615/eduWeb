"use client";
import Headers from "../../ES4edu/es-header/page.js";
import Contact from "../../components/contact/page.js";
import Anket from "../../ES4edu/anket/page.js";
import Ontslog from "../../ES4edu/edu-ontslog/page.js"
import Social from "../../components/socials/net.js";
import TimeTable from "../../ES4edu/timeTable/page.js"
import LevelType from "../../ES4edu/typeLessons/english/page.js";
import ScrollToTopButton from "../../components/scroll/page.js";
import style from "./es4.css";
export default function ES4() {
  const data = {
    labels: ['English', 'Math', 'Chess'],
    values: [50, 30, 20],
    colors: ['#ff6384', '#36a2eb', '#cc65fe'],
  };
  return (  
    <div>
       <Social/>
      <Headers/>
      <div className="edu">
      </div>
      <div className="taniltsuulga">
        <div className="main-taniltsuulga">
          <div className="logo">
            <img src="/es.png" alt="" />
            <h2 className="es">“ES4” Боловсрол төсөл хөтөлбөр</h2>
          </div>
          <div className="tani">
            <h2 className="tanilts">Танилцуулга :</h2>
            <div className="tanilts1">
              <p>Танилцуулга :</p>
              <p className="t1">
                Тус боловсрол төсөл хөтөлбөр нь 2021 оны 6-р сарын 1-ний өдөр
                “ES4 Боловсрол аялал” ХХК компанийн нэр доор үндэслэн
                байгуулагдсан.
              </p>
            </div>
            <div className="tanilts2">
              <p>Алсын хараа :</p>
              <p className="t2">
                Зөв хүүхдээс эрдэм мэдлэг, ур чадвартай иргэн болж эх орондоо
                үнэт зүйлийг бүтээнэ.
              </p>
            </div>
            <div className="tanilts3">
              <p className="erhem"> Эрхэм зорилго :</p>
              <p className="t3">
                EQ чадвараараа онцгойрсон хувь хүнийг хөгжүүлж, дэлхийн
                чансаатай их сургуульд 100%-ийн тэтгэлэгтэй суралцуулах
                боловсролыг эзэмшлүүлнэ
              </p>
            </div>
            <div className="zorilt">
              <p className="health">Эрүүл мэнд</p>
              <p className="hamt">Хамтын зүтгэл</p>
              <p> Хүндэтгэл</p>
              <p className="erdem"> Эрдэм мэдлэг</p>
              <p className="togs"> Төгс иргэн</p>
              <p>Боловсрол</p>
            </div>
          </div>
        </div>
      </div>
      {/* <div>
      <Anket data={data} />
      </div> */}
      <Ontslog />
     <div>
      <div className="level-main">
        <section id="conference-timeline">
          <div className="timeline-start">Level Type</div>
          <div className="conference-center-line"></div>
          <div className="conference-timeline-content">
            <div className="timeline-article">
              <div className="content-left-container">
                <div className="content-left">
                  <h3>Анхан</h3>
                  <p>
                    Энэ сургалт нь англи хэл бараг мэдэхгүй суралцагчид үгийн
                    дуудлага, үгийн сан, энгийн өгүүлбэрийн бүтэц, өдөр тутмын
                    практикт хэрэгтэй үг ярианы тухай суурь мэдлэгтэй болохыг
                    хүссэн хүмүүст зориулан бодит амьдралаас сэдэвлэсэн англи
                    хэлний ярих, сонсох, унших, бичих үндсэн чадварыг олох
                    идэвхтэй дадалд зориулсан хичээлүүд байх болно.{" "}
                    <span className="article-number">01</span>
                  </p>
                </div>
                <span className="timeline-author">ES4 Education Programm</span>
              </div>
              <div className="content-right-container">
                <div className="content-right">
                  <h3>Суурьтай анхан</h3>
                  <p>
                    {" "}
                    Энэ сургалтыг англи хэлний үндсэн дүрэм, өгүүлбэрийн бүтэц,
                    үгийн сан болон өдөр тутмын практикт хэрэгтэй үг ярианы
                    тухай суурь мэдлэгтэй болохыг хүссэн сурагчдад зориулан
                    бэлтгэгдсэн. Үүнд өдөр тутмын амьдралаас сэдвэлсэн англи
                    хэлний ярих, сонсох, унших, бичих үндсэн чадварыг олгох
                    идэвхтэй дадлага хийхэд зориулсан хичээлүүд байх болно.
                    <span className="article-number">02</span>
                  </p>
                </div>
                <span className="timeline-author">ES4 Education Programm</span>
              </div>
              <div className="meta-date">
                <span className="date">#</span>
              </div>
            </div>

            <div className="timeline-article">
              <div className="content-left-container">
                <div className="content-left">
                  <h3>Анхан дунд</h3>
                  <p>
                    Энэ сургалтаар өдөр тутмын харилцаан дунд өргөн хүрээ бүхий
                    англи ярианы агуулгын дагуу суралцагчдад англи хэлний дүрмээ
                    бататган хөгжүүлэх, чөлөөтэй ярилцдаг болох болон үгсийн
                    сангаа баяжуулах боломжийг олгох болно. Сургалтын төгсгөлд
                    оюутнууд дунд шатны англи хэлний сургалтад шилжихээс өмнө уг
                    хэлээр илүү итгэлтэйгээр ярих, сонсох, унших, бичих
                    чадвартай болно <span className="article-number">03</span>
                  </p>
                </div>
                <span className="timeline-author">ES4 Education Programm</span>
              </div>
              <div className="content-right-container">
                <div className="content-right">
                  <h3>Дунд шат</h3>
                  <p>
                    Энэ сургалтын зорилго нь сурагчдыг англи хэлний дунд шатны
                    төвшинд хүрэхэд тусалж тэдний хэл зүйн дүрмийн дагуу зөв
                    бичих, өөрийгөө англи ярианы хэлээр төгс илэрхийлэх ярих
                    чадварыг сайжруулж өгөх болно. Хичээлийн явцад жүжигчилсэн
                    дүрд тоглох , харилцан ярилцах байдлаар ярих, сонсох, унших,
                    бичих чадварын дадлага хийснээр оюутнууд үгсийн сангаа орчин
                    үеийн дэлхийн өдөр бүрийн хэвшмэл нөхцөл байдалд таарсан
                    өргөн хүрээтэй үгсээр үгсийн сангаа өргөтгөн нэмэх болно
                    <span className="article-number">04</span>
                  </p>
                </div>
                <span className="timeline-author">ES4 Education Programm</span>
              </div>
              <div className="meta-date">
                <span className="date">#</span>
              </div>
            </div>
            <div className="timeline-article">
              <div className="content-left-container">
                <div className="content-left">
                  <h3>Ахисан дунд</h3>
                  <p>
                    Энэ сургалт бол оюутнуудын хэл ярианы цогц чадвар болон
                    хэлний дүрмийг илүү сайн эзэмшсэн байдлыг цаашид улам
                    бэхжүүлэн бататгах зорилготой болно. Оюутнууд бусадтай
                    ярилцах, харилцан ажиллах болон хариу үйлдэл үзүүлэх
                    хэрэгтэй болсон янз бүрийн тохиолдолд тохиромжтой дадлага
                    болон тохирох англи хэлийг хэрэглэсээр өөрийгөө итгэлтэйгээр
                    илэрхийлэхэд сайтар бэлтгэгдэх болно. Сургалтын төгсгөлд
                    хэлзүйн дүрэм хийгээд харилцааны ур чадвартай илүү итгэлтэй
                    болно.
                    <span className="article-number">05</span>
                  </p>
                </div>
                <span className="timeline-author">ES4 Education Programm</span>
              </div>
              <div className="meta-date">
                <span className="date">#</span>
              </div>
            </div>
          </div>
          <div className="timeline-end">End</div>
        </section>
        </div></div>
      <TimeTable/>
      <ScrollToTopButton/>
      <Contact/>
    </div>
  );
}
