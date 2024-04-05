"use client"
import { useState } from "react";
import Header from "../../../header/page.js";
import Contact from "../../../components/contact/page.js";
import style from "../../../components/travels/ice/ice.css";
export default function ICE() {
  const [mainImage, setMainImage] = useState("https://www.nationalgeographic.com/content/dam/expeditions/destinations/asia/active/Mongolian-Horse-Trek/hero-mongolian-horse-trek-new.jpg");

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
          onClick={() => switchMainImage("https://www.nationalgeographic.com/content/dam/expeditions/destinations/asia/active/Mongolian-Horse-Trek/hero-mongolian-horse-trek-new.jpg")}
        />
        <div className="imageCon">
          <div className="imageMains">
        <img
            src="https://www.nationalgeographic.com/content/dam/expeditions/destinations/asia/active/Mongolian-Horse-Trek/hero-mongolian-horse-trek-new.jpg"
            alt=""
            onClick={() => switchMainImage("https://www.nationalgeographic.com/content/dam/expeditions/destinations/asia/active/Mongolian-Horse-Trek/hero-mongolian-horse-trek-new.jpg")}
          />
      
        <img
            src="https://www.equus-journeys.com/photos/1800x1200/a-rider-smiling-at-the-camera-in-mongolia-6890.jpg"
            alt=""
            onClick={() => switchMainImage("https://www.equus-journeys.com/photos/1800x1200/a-rider-smiling-at-the-camera-in-mongolia-6890.jpg")}
          />
        <img
            src="https://equestrianists.com/wp-content/uploads/2021/03/43126161752_57a98d6d9d_o-e1556108794320.jpg"
            alt=""
            onClick={() => switchMainImage("https://equestrianists.com/wp-content/uploads/2021/03/43126161752_57a98d6d9d_o-e1556108794320.jpg")}
          />
        </div>
        <div className="images">
          <img
            src="https://stonehorsemongolia.com/wp-content/uploads/2019/11/DSC08078-1024x683.jpg"
            alt=""
            onClick={() => switchMainImage("https://stonehorsemongolia.com/wp-content/uploads/2019/11/DSC08078-1024x683.jpg")}
          />
          <img
            src="https://www.castellucciodinorcia.it/castellucciodinorcia/wp-content/uploads/2014/12/riding-school-castelluccio-04.jpg"
            alt=""
            onClick={() => switchMainImage("https://www.castellucciodinorcia.it/castellucciodinorcia/wp-content/uploads/2014/12/riding-school-castelluccio-04.jpg")}
          />
          <img
            src="https://images.rove.me/w_1920,q_85/ey4unpxaj4rf1lcffpvx/mongolia-mongol-derby.jpg"
            alt=""
            onClick={() => switchMainImage("https://images.rove.me/w_1920,q_85/ey4unpxaj4rf1lcffpvx/mongolia-mongol-derby.jpg")}
          />
          
          </div>
        </div>
        </div>
      </div>

      <main>
	<h1>Feature of travel</h1>
	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mattis turpis eu neque tincidunt lacinia. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam auctor ultrices tortor et volutpat. Donec eu semper orci, eu fermentum orci. Vivamus aliquam lobortis egestas. Proin vel mauris vitae sem auctor cursus. Aenean sit amet odio at magna pharetra luctus nec eget urna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent in leo at tellus ultricies laoreet.</p>
	<div class="animalcards">
		<div class="animalcard-wrapper">
			<div class="animalcard">
				<div class="animalcard__image">
					<img src="https://res.cloudinary.com/djew0njor/image/upload/v1676543067/Nordvest/Bedrifter/Stall%20Kjellbotn/Topptur_iqw1gu.jpg" alt="" width="1080" height="720" />
				</div>
				<div class="animalcard__description">
				<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum architecto natus, libero nemo quae fugit totam quo officiis modi eligendi perspiciatis exercitationem temporibus ad atque corrupti aut placeat ex cumque quis sapiente explicabo recusandae illum nesciunt. Necessitatibus quae esse cumque. In repellat magnam dolor officiis nihil corporis dignissimos est pariatur.</p>
				</div>
			</div>
		</div>
		<div class="animalcard-wrapper">
			<div class="animalcard">
				<div class="animalcard__image">
					<img src="https://www.fairfield.mn/assets/Uploads/Pages/58/Resting-from-riding.jpg" alt="" width="1080" height="720" />
				</div>
				<div class="animalcard__description">
				<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum architecto natus, libero nemo quae fugit totam quo officiis modi eligendi perspiciatis exercitationem temporibus ad atque corrupti aut placeat ex cumque quis sapiente explicabo recusandae illum nesciunt. Necessitatibus quae esse cumque. In repellat magnam dolor officiis nihil corporis dignissimos est pariatur.</p>
				</div>
			</div>
		</div>
		<div class="animalcard-wrapper">
			<div class="animalcard">
				<div class="animalcard__image">
					<img src="https://i0.wp.com/oxandmonkey.com/wp-content/uploads/2019/08/IMG_0603.jpg?resize=860%2C645&ssl=1" alt="" width="1080" height="720" />
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
				<img src="https://www.yourhorse.co.uk/wp-content/uploads/sites/6/Riders-in-race-mode-CREDIT-SHARI-THOMPSON-scaled.jpg" alt="" width="1080" height="720" />
			</div>
			<div class="animalcard__description">
			<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum architecto natus, libero nemo quae fugit totam quo officiis modi eligendi perspiciatis exercitationem temporibus ad atque corrupti aut placeat ex cumque quis sapiente explicabo recusandae illum nesciunt. Necessitatibus quae esse cumque. In repellat magnam dolor officiis nihil corporis dignissimos est pariatur.</p>
			</div>
		</div>
	</div>
</main>
      <Contact> </Contact>
    </div>
  );
}
