"use client";
import { useState } from "react";
import Header from "../../../header/page.js";
import Contact from "../../../components/contact/page.js";
import style from "../../../components/travels/ice/ice.css";
export default function ICE() {
  const [mainImage, setMainImage] = useState(
    "https://cdn.greensoft.mn/uploads/site/795/photos/block/20210909115238_bbca02662918f61efb585811ec5cf07c.jpg"
  );

  const switchMainImage = (newImage) => {
    setMainImage(newImage);
  };
  return (
    <div>
      <Header></Header>
      <div className="howsgol">
        <div>
          <h2>TRAVEL IN UVS PROVINCE</h2>
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
                "https://cdn.greensoft.mn/uploads/site/795/photos/block/20210909115238_bbca02662918f61efb585811ec5cf07c.jpg"
              )
            }
          />
          <div className="imageCon">
            <div className="imageMains">
              <img
                src="https://cdn.greensoft.mn/uploads/site/795/photos/block/20210909115238_bbca02662918f61efb585811ec5cf07c.jpg"
                alt=""
                onClick={() =>
                  switchMainImage(
                    "https://cdn.greensoft.mn/uploads/site/795/photos/block/20210909115238_bbca02662918f61efb585811ec5cf07c.jpg"
                  )
                }
              />
              <img
                src="https://scontent.fuln2-2.fna.fbcdn.net/v/t39.30808-6/315406637_2787745208027228_2522131984555461539_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=a6ui8TL6DGMAX-YXYoq&_nc_ht=scontent.fuln2-2.fna&oh=00_AfCosyXVBcPlLbgNOCJnFqpm1Zwv8LL6lPp7bUzaFqgQLQ&oe=65F35FD0"
                alt=""
                onClick={() =>
                  switchMainImage(
                    "https://scontent.fuln2-2.fna.fbcdn.net/v/t39.30808-6/315406637_2787745208027228_2522131984555461539_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=a6ui8TL6DGMAX-YXYoq&_nc_ht=scontent.fuln2-2.fna&oh=00_AfCosyXVBcPlLbgNOCJnFqpm1Zwv8LL6lPp7bUzaFqgQLQ&oe=65F35FD0"
                  )
                }
              />
             
              <img
                src="https://correctmongolia.com/wp-content/uploads/2024/01/Bulgan.jpg"
                alt=""
                onClick={() =>
                  switchMainImage(
                    "https://correctmongolia.com/wp-content/uploads/2024/01/Bulgan.jpg"
                  )
                }
              />
            </div>
            <div className="images">
            
              <img  
                src="https://juulchin.com/static/01398ac8cb484bd6653fbc722f39dc2a/61e60/1_d8906b1008.jpg"
                alt=""
                onClick={() => switchMainImage("https://juulchin.com/static/01398ac8cb484bd6653fbc722f39dc2a/61e60/1_d8906b1008.jpg")}
              />
              <img
                src="https://images.unsplash.com/photo-1472791108553-c9405341e398?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                onClick={() => switchMainImage("https://images.unsplash.com/photo-1472791108553-c9405341e398?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D")}
              />
              <img
                src="https://scontent.fuln2-2.fna.fbcdn.net/v/t39.30808-6/294198082_2685731381561945_6172377385720175092_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=J3-9gp1KCVsAX-NEfI6&_nc_ht=scontent.fuln2-2.fna&oh=00_AfCnOdym7RlWR1MK1wBAmZfZwS4E2I0JxLg0x6k7HZLcpw&oe=65F2AE85"
                alt=""
                onClick={() => switchMainImage("https://scontent.fuln2-2.fna.fbcdn.net/v/t39.30808-6/294198082_2685731381561945_6172377385720175092_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=J3-9gp1KCVsAX-NEfI6&_nc_ht=scontent.fuln2-2.fna&oh=00_AfCnOdym7RlWR1MK1wBAmZfZwS4E2I0JxLg0x6k7HZLcpw&oe=65F2AE85")}
              />
            </div>
          </div>
        </div>
      </div>
      <main>
	<h1>Feature of travel</h1>
	<p>Khuvsgul Lake or Khuvsgul Dalai is a freshwater lake located 1645 meters above sea level in Khuvsgul province in the northern part of Mongolia. This lake is the largest and deepest lake in Mongolia. Khuvsgul Lake is one of seventeen ancient lakes in the world. It is estimated that it is more than 2 million years old. The total volume of water is 381 km³, which is equal to 0.4 percent of the world's fresh water.

46 streams flow into Khuvsgul Lake, and only one flows into the Selenge River, which flows from the main source of the Aegean. Yavsaar covers a total distance of 1000 km and flows into Baigal Lake. The direct distance between these two lakes is only 200 km.

The deepest part of Khuvsgul Lake is 262 meters, its length is 136 km, and its widest part is 36.5 km.</p>
	<div className="animalcards">
		<div className="animalcard-wrapper">
			<div className="animalcard">
				<div className="animalcard__image">
					<img src="/IMG_2849.jpg" alt="" width="1080" height="720" />
				</div>
				<div className="animalcard__description">
				<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum architecto natus, libero nemo quae fugit totam quo officiis modi eligendi perspiciatis exercitationem temporibus ad atque corrupti aut placeat ex cumque quis sapiente explicabo recusandae illum nesciunt. Necessitatibus quae esse cumque. In repellat magnam dolor officiis nihil corporis dignissimos est pariatur.</p>
				</div>
			</div>
		</div>
		<div className="animalcard-wrapper">
			<div className="animalcard">
				<div className="animalcard__image">
					<img src="/IMG_2852.jpg" alt="" width="1080" height="720" />
				</div>
				<div className="animalcard__description">
				<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum architecto natus, libero nemo quae fugit totam quo officiis modi eligendi perspiciatis exercitationem temporibus ad atque corrupti aut placeat ex cumque quis sapiente explicabo recusandae illum nesciunt. Necessitatibus quae esse cumque. In repellat magnam dolor officiis nihil corporis dignissimos est pariatur.</p>
				</div>
			</div>
		</div>
		<div className="animalcard-wrapper">
			<div className="animalcard">
				<div className="animalcard__image">
					<img src="/IMG_2853.jpg" alt="" width="1080" height="720" />
				</div>
				<div className="animalcard__description">
				<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum architecto natus, libero nemo quae fugit totam quo officiis modi eligendi perspiciatis exercitationem temporibus ad atque corrupti aut placeat ex cumque quis sapiente explicabo recusandae illum nesciunt. Necessitatibus quae esse cumque. In repellat magnam dolor officiis nihil corporis dignissimos est pariatur.</p>
				</div>
			</div>
		</div>
	</div>
	<h2>Aenean ac pellentesque ante</h2>
	<div className="animalcard-wrapper">
		<div className="animalcard">
			<div className="animalcard__images">
				<img src="https://www.mongoliatours.org/content/Routes/Festival-and-Events/Ice-Festival/DSC_0648_2019.JPG" alt=""  />
			</div>
			<div className="animalcard__description">
			<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum architecto natus, libero nemo quae fugit totam quo officiis modi eligendi perspiciatis exercitationem temporibus ad atque corrupti aut placeat ex cumque quis sapiente explicabo recusandae illum nesciunt. Necessitatibus quae esse cumque. In repellat magnam dolor officiis nihil corporis dignissimos est pariatur.</p>
			</div>
		</div>
	</div>
</main>
      <Contact> </Contact>
    </div>
  );
}
