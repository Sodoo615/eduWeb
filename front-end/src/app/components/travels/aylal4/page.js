"use client";
import { useState } from "react";
import Header from "../../../header/page.js";
import Contact from "../../../components/contact/page.js";
import style from "../../../components/travels/ice/ice.css";
export default function ICE() {
  const [mainImage, setMainImage] = useState("https://cdn.mongolia-guide.com/generated/sum/0B2diuNpustiWxvry1uC8jso3ExuXZpSwEDuYHsl_1920_1000.jpeg");

  const switchMainImage = (newImage) => {
    setMainImage(newImage);
  };
  return (
    <div>
      <Header></Header>
      <div className="howsgol">
        <div>
          <h2>KHOVSGOL ICE FESTIVAL</h2>
          <p>
            While relaxing on the shores of Khuvsgul Lake, one of the 17 oldest
            lakes on our planet and one of the cleanest lakes in the world, you
            can also visit the remote Darkhad depression, get to know the life
            behind it, admire the view of the Zhargant River, which does not
            freeze in winter, and go skiing on pure sleds. We invite you to a
            round-trip flight that will make your time in the air full of fun
            and adventure.
          </p>
        </div>
      </div>
      <div className="iceMain">
        <div className="imageMain">
          <img
            className="mainImg"
            src={mainImage}
            alt=""
            onClick={() => switchMainImage("https://cdn.mongolia-guide.com/generated/sum/0B2diuNpustiWxvry1uC8jso3ExuXZpSwEDuYHsl_1920_1000.jpeg")}
          />
          <div className="imageCon">
            <div className="imageMains">
              <img
                src="https://cdn.mongolia-guide.com/generated/sum/0B2diuNpustiWxvry1uC8jso3ExuXZpSwEDuYHsl_1920_1000.jpeg"
                alt=""
                onClick={() => switchMainImage("https://cdn.mongolia-guide.com/generated/sum/0B2diuNpustiWxvry1uC8jso3ExuXZpSwEDuYHsl_1920_1000.jpeg")}
              />
              <img
                src="https://live.staticflickr.com/4375/37344468336_81095e3bb2_b.jpg"
                alt=""
                onClick={() => switchMainImage("https://live.staticflickr.com/4375/37344468336_81095e3bb2_b.jpg")}
              />

              <img
                src="https://filmmongolia.gov.mn/wp-content/uploads/2022/05/uvas-nuur-003-940x520.jpg"
                alt=""
                onClick={() => switchMainImage("https://filmmongolia.gov.mn/wp-content/uploads/2022/05/uvas-nuur-003-940x520.jpg")}
              />
            </div>
            <div className="images">
              <img
                src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/e9/2e/97/suldet-tsakhir.jpg?w=1200&h=-1&s=1"
                alt=""
                onClick={() => switchMainImage("https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/e9/2e/97/suldet-tsakhir.jpg?w=1200&h=-1&s=1")}
              />
              <img
                src="https://live.staticflickr.com/4332/23539675478_130744db2b_b.jpg"
                alt=""
                onClick={() => switchMainImage("https://live.staticflickr.com/4332/23539675478_130744db2b_b.jpg")}
              />

              <img
                src="https://www.escapetomongolia.com/__data/assets/image/0020/11378/Ulaangom-Town.jpg"
                alt=""
                onClick={() => switchMainImage("https://www.escapetomongolia.com/__data/assets/image/0020/11378/Ulaangom-Town.jpg")}
              />
            </div>
          </div>
        </div>
      </div>

      <main>
        <h1>Feature of travel</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          mattis turpis eu neque tincidunt lacinia. Pellentesque habitant morbi
          tristique senectus et netus et malesuada fames ac turpis egestas.
          Aliquam auctor ultrices tortor et volutpat. Donec eu semper orci, eu
          fermentum orci. Vivamus aliquam lobortis egestas. Proin vel mauris
          vitae sem auctor cursus. Aenean sit amet odio at magna pharetra luctus
          nec eget urna. Vestibulum ante ipsum primis in faucibus orci luctus et
          ultrices posuere cubilia curae; Praesent in leo at tellus ultricies
          laoreet.
        </p>
        <div class="animalcards">
          <div class="animalcard-wrapper">
            <div class="animalcard">
              <div class="animalcard__image">
                <img
                  src="https://scontent.fuln2-2.fna.fbcdn.net/v/t39.30808-6/315406637_2787745208027228_2522131984555461539_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=a6ui8TL6DGMAX-YXYoq&_nc_ht=scontent.fuln2-2.fna&oh=00_AfCosyXVBcPlLbgNOCJnFqpm1Zwv8LL6lPp7bUzaFqgQLQ&oe=65F35FD0"
                  alt=""
                  width="1080"
                  height="720"
                />
              </div>
              <div class="animalcard__description">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum
                  architecto natus, libero nemo quae fugit totam quo officiis
                  modi eligendi perspiciatis exercitationem temporibus ad atque
                  corrupti aut placeat ex cumque quis sapiente explicabo
                  recusandae illum nesciunt. Necessitatibus quae esse cumque. In
                  repellat magnam dolor officiis nihil corporis dignissimos est
                  pariatur.
                </p>
              </div>
            </div>
          </div>
          <div class="animalcard-wrapper">
            <div class="animalcard">
              <div class="animalcard__image">
                <img
                  src="https://scontent.fuln2-2.fna.fbcdn.net/v/t39.30808-6/294198082_2685731381561945_6172377385720175092_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=J3-9gp1KCVsAX-NEfI6&_nc_ht=scontent.fuln2-2.fna&oh=00_AfCnOdym7RlWR1MK1wBAmZfZwS4E2I0JxLg0x6k7HZLcpw&oe=65F2AE85"
                  alt=""
                  width="1080"
                  height="720"
                />
              </div>
              <div class="animalcard__description">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum
                  architecto natus, libero nemo quae fugit totam quo officiis
                  modi eligendi perspiciatis exercitationem temporibus ad atque
                  corrupti aut placeat ex cumque quis sapiente explicabo
                  recusandae illum nesciunt. Necessitatibus quae esse cumque. In
                  repellat magnam dolor officiis nihil corporis dignissimos est
                  pariatur.
                </p>
              </div>
            </div>
          </div>
          <div class="animalcard-wrapper">
            <div class="animalcard">
              <div class="animalcard__image">
                <img
                  src="https://pbs.twimg.com/media/Byb6XsGCEAAj77k.jpg:large"
                  alt=""
                  width="1080"
                  height="720"
                />
              </div>
              <div class="animalcard__description">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum
                  architecto natus, libero nemo quae fugit totam quo officiis
                  modi eligendi perspiciatis exercitationem temporibus ad atque
                  corrupti aut placeat ex cumque quis sapiente explicabo
                  recusandae illum nesciunt. Necessitatibus quae esse cumque. In
                  repellat magnam dolor officiis nihil corporis dignissimos est
                  pariatur.
                </p>
              </div>
            </div>
          </div>
        </div>
        <h2>Aenean ac pellentesque ante</h2>
        <div class="animalcard-wrapper">
          <div class="animalcard">
            <div class="animalcard__images">
              <img
                src="https://juulchin.com/static/01398ac8cb484bd6653fbc722f39dc2a/61e60/1_d8906b1008.jpg"
                alt=""
                width="1080"
                height="720"
              />
            </div>
            <div class="animalcard__description">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum
                architecto natus, libero nemo quae fugit totam quo officiis modi
                eligendi perspiciatis exercitationem temporibus ad atque
                corrupti aut placeat ex cumque quis sapiente explicabo
                recusandae illum nesciunt. Necessitatibus quae esse cumque. In
                repellat magnam dolor officiis nihil corporis dignissimos est
                pariatur.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Contact> </Contact>
    </div>
  );
}
