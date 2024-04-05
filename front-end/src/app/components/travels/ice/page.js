"use client"
import { useState } from "react";
import Header from "../../../header/page.js";
import Contact from "../../../components/contact/page.js";
import style from "../../../components/travels/ice/ice.css";
export default function ICE() {
  const [mainImage, setMainImage] = useState("/horse.jpg");

  const switchMainImage = (newImage) => {
    setMainImage(newImage);
  };
  return (
    <div >
      <Header></Header>
      <div className="howsgol">
          <div >
          <h2>KHOVSGOL ICE FESTIVAL</h2>
          <p>
          While relaxing on the shores of Khuvsgul Lake, one of the 17 oldest lakes on our planet and one of the cleanest lakes in the world, you can also visit the remote Darkhad depression, get to know the life behind it, admire the view of the Zhargant River, which does not freeze in winter, and go skiing on pure sleds. We invite you to a round-trip flight that will make your time in the air full of fun and adventure.
            </p>
            </div>
        </div>
      <div className="iceMain">
        
        <div className="imageMain">
          
        <img
          className="mainImg"
          src={mainImage}
          alt=""
          onClick={() => switchMainImage("/horse.jpg")}
        />
        <div className="imageCon">
            <div className="imageMains">
        <img
            src="/zavi.jpeg"
            alt=""
            onClick={() => switchMainImage("/zavi.jpeg")}
          />
        <img
            src="https://dominik-photography.com/wp-content/uploads/2017/03/06-Snow-Ice-Festival-Harbin-China.jpg"
            alt=""
            onClick={() => switchMainImage("https://dominik-photography.com/wp-content/uploads/2017/03/06-Snow-Ice-Festival-Harbin-China.jpg")}
          />
        <img
            src="/screen.jpeg"
            alt=""
            onClick={() => switchMainImage("/screen.jpeg")}
          />
        </div>
        <div className="images">
          <img
            src="/horse.jpg"
            alt=""
            onClick={() => switchMainImage("/horse.jpg")}
          />
          <img
            src="/ice.jpg"
            alt=""
            onClick={() => switchMainImage("/ice.jpg")}
          />
          <img
            src="https://i.pinimg.com/736x/35/a4/a5/35a4a5bc3661ac875bc4120a1b01271c.jpg"
            alt=""
            onClick={() => switchMainImage("https://i.pinimg.com/736x/35/a4/a5/35a4a5bc3661ac875bc4120a1b01271c.jpg")}
          />
    
          
          </div>
        </div>
        </div>
      </div>

      <main>
	<h1>Аяллын онцлог</h1>
	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mattis turpis eu neque tincidunt lacinia. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam auctor ultrices tortor et volutpat. Donec eu semper orci, eu fermentum orci. Vivamus aliquam lobortis egestas. Proin vel mauris vitae sem auctor cursus. Aenean sit amet odio at magna pharetra luctus nec eget urna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent in leo at tellus ultricies laoreet.</p>
	<div class="animalcards">
		<div class="animalcard-wrapper">
			<div class="animalcard">
				<div class="animalcard__image">
					<img src="https://mongoliatravelon.com/en/wp-content/uploads/2023/04/27503677_880155508824411_8515281372377155476_o.jpg" alt="" width="1080" height="720" />
				</div>
				<div class="animalcard__description">
				<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum architecto natus, libero nemo quae fugit totam quo officiis modi eligendi perspiciatis exercitationem temporibus ad atque corrupti aut placeat ex cumque quis sapiente explicabo recusandae illum nesciunt. Necessitatibus quae esse cumque. In repellat magnam dolor officiis nihil corporis dignissimos est pariatur.</p>
				</div>
			</div>
		</div>
		<div class="animalcard-wrapper">
			<div class="animalcard">
				<div class="animalcard__image">
					<img src="https://s-media-cache-ak0.pinimg.com/736x/99/a0/91/99a091f93090f28714ac418b9ba32dc0.jpg" alt="" width="1080" height="720" />
				</div>
				<div class="animalcard__description">
				<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum architecto natus, libero nemo quae fugit totam quo officiis modi eligendi perspiciatis exercitationem temporibus ad atque corrupti aut placeat ex cumque quis sapiente explicabo recusandae illum nesciunt. Necessitatibus quae esse cumque. In repellat magnam dolor officiis nihil corporis dignissimos est pariatur.</p>
				</div>
			</div>
		</div>
		<div class="animalcard-wrapper">
			<div class="animalcard">
				<div class="animalcard__image">
					<img src="https://silkroadmongolia.com/wp-content/uploads/2023/07/reindeers-1024x603.jpg" alt="" width="1080" height="720" />
				</div>
				<div class="animalcard__description">
				<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum architecto natus, libero nemo quae fugit totam quo officiis modi eligendi perspiciatis exercitationem temporibus ad atque corrupti aut placeat ex cumque quis sapiente explicabo recusandae illum nesciunt. Necessitatibus quae esse cumque. In repellat magnam dolor officiis nihil corporis dignissimos est pariatur.</p>
				</div>
			</div>
		</div>
	</div>
	<h2>Aenean ac pellentesque ante</h2>
	<div class="animalcard-wrapper">
		<div class="animalcard">
			<div class="animalcard__images">
				<img src="https://www.mongoliatours.org/content/Routes/Festival-and-Events/Ice-Festival/DSC_0648_2019.JPG" alt=""  />
			</div>
			<div class="animalcard__description">
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum architecto natus, libero nemo quae fugit totam quo officiis modi eligendi perspiciatis exercitationem temporibus ad atque corrupti aut placeat ex cumque quis sapiente explicabo recusandae illum nesciunt. Necessitatibus quae esse cumque. In repellat magnam dolor officiis nihil corporis dignissimos est pariatur.</p>
              <img src="https://www.mongoliatours.org/content/Routes/Festival-and-Events/Ice-Festival/DSC_0648_2019.JPG" alt=""  />
			</div>
		</div>
	</div>
</main>
      <Contact> </Contact>
    </div>
  );
}

