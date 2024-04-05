"use client";
import { useState } from "react";
import Header from "../../../header/page.js";
import Contact from "../../../components/contact/page.js";
import style from "../../../components/travels/ice/ice.css";
export default function ICE() {
  const [mainImage, setMainImage] = useState(
    "https://www.dimanoinmano.com/img/985661/full/scienze-umane/antropologia/tsaatan.jpg"
  );

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
            onClick={() =>
              switchMainImage(
                "https://www.dimanoinmano.com/img/985661/full/scienze-umane/antropologia/tsaatan.jpg"
              )
            }
          />
          <div className="imageCon">
            <div className="imageMains">
              <img
                src="https://images.squarespace-cdn.com/content/v1/5ce5ce4db382bb0001d10004/1560075287414-AYPCLPFPQO30IZS31H9E/011_Tsaatan+%28Reindeer+people%29%2C+also+Dukha%2C+Dukhans+or+Duhalar%2Cnorthern+Kho%CC%88vsgo%CC%88l+Aimag%2C+Mongolia_photo+by+Joel+Santos_.jpg"
                alt=""
                onClick={() =>
                  switchMainImage(
                    "https://images.squarespace-cdn.com/content/v1/5ce5ce4db382bb0001d10004/1560075287414-AYPCLPFPQO30IZS31H9E/011_Tsaatan+%28Reindeer+people%29%2C+also+Dukha%2C+Dukhans+or+Duhalar%2Cnorthern+Kho%CC%88vsgo%CC%88l+Aimag%2C+Mongolia_photo+by+Joel+Santos_.jpg"
                  )
                }
              />
              <img
                src="https://photos-optimized.lensculture.com/large/bf150dd1-409a-4227-80c9-26ce3b648903.jpg"
                alt=""
                onClick={() =>
                  switchMainImage(
                    "https://photos-optimized.lensculture.com/large/bf150dd1-409a-4227-80c9-26ce3b648903.jpg"
                  )
                }
              />
              <img
                src="https://www.toursmongolia.com/uploads/Tsaatans_the_Reindeer_People.jpg"
                alt=""
                onClick={() =>
                  switchMainImage(
                    "https://www.toursmongolia.com/uploads/Tsaatans_the_Reindeer_People.jpg"
                  )
                }
              />
            </div>
            <div className="images">
              <img
                src="https://www.discovermongolia.mn/uploads/tsaatan-reindeer.jpg"
                alt=""
                onClick={() =>
                  switchMainImage(
                    "https://www.discovermongolia.mn/uploads/tsaatan-reindeer.jpg"
                  )
                }
              />
              <img
                src="https://i0.wp.com/beyondthebucketlist.co/wp-content/uploads/2023/11/DSC01828.jpg?resize=1000%2C667&ssl=1"
                alt=""
                onClick={() =>
                  switchMainImage(
                    "https://i0.wp.com/beyondthebucketlist.co/wp-content/uploads/2023/11/DSC01828.jpg?resize=1000%2C667&ssl=1"
                  )
                }
              />
              <img
                src="https://www.dimanoinmano.com/img/985661/full/scienze-umane/antropologia/tsaatan.jpg"
                alt=""
                onClick={() =>
                  switchMainImage(
                    "https://www.dimanoinmano.com/img/985661/full/scienze-umane/antropologia/tsaatan.jpg"
                  )
                }
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
                  src="https://previews.123rf.com/images/chanwity/chanwity1705/chanwity170500012/77398441-beautiful-portrait-of-mongolian-reindeer-in-traditionally-tsaatan-family-on-their-reindeers-at-taiga.jpg"
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
                  src="https://www.goingthewholehogg.com/wp-content/uploads/Facebook-Graphics-2-5.png"
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
                  src="https://i.pinimg.com/originals/5c/0e/45/5c0e45a193182836189e030055dd8e42.jpg"
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
            <div class="animalcard__image">
              <img
                src="https://mongoliannomadic.com/wp-content/uploads/2017/06/thediplomat_2016-09-30_14-44-58.jpg"
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
