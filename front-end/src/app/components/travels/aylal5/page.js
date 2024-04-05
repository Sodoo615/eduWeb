"use client"
import { useState } from "react";
import Header from "../../../header/page.js";
import Contact from "../../../components/contact/page.js";
import style from "../../../components/travels/ice/ice.css";
export default function ICE() {
  const [mainImage, setMainImage] = useState("https://www.admwe.org/eng/wp-content/uploads/2015/07/naadam.jpg  ");

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
          onClick={() => switchMainImage("https://www.admwe.org/eng/wp-content/uploads/2015/07/naadam.jpg")}
        />
        <div className="imageCon">
          <div className="imageMains">
        <img
            src="https://www.admwe.org/eng/wp-content/uploads/2015/07/naadam.jpg"
            alt=""
            onClick={() => switchMainImage("https://www.admwe.org/eng/wp-content/uploads/2015/07/naadam.jpg")}
          />
        <img
            src="https://montsame.mn/files/5eeffc5d2b9e5.jpeg"
            alt=""
            onClick={() => switchMainImage("https://montsame.mn/files/5eeffc5d2b9e5.jpeg")}
          />
        <img
            src="https://content.ikon.mn/news/2019/7/10/7bdd76_MPA_PHOTO-2018-6-6975_x974.jpg"
            alt=""
            onClick={() => switchMainImage("https://content.ikon.mn/news/2019/7/10/7bdd76_MPA_PHOTO-2018-6-6975_x974.jpg")}
          />
        </div>
        <div className="images">
          <img
            src="https://live.staticflickr.com/1924/44901315311_57d5215168_b.jpg"
            alt=""
            onClick={() => switchMainImage("https://live.staticflickr.com/1924/44901315311_57d5215168_b.jpg")}
          />
          <img
            src="https://www.steppenomad.com/public/upload/blog/202202161246033487.webp"
            alt=""
            onClick={() => switchMainImage("https://www.steppenomad.com/public/upload/blog/202202161246033487.webp")}
          />
          <img
            src="https://discovery.cathaypacific.com/wp-content/uploads/2018/07/Hero-In-Season-1.jpg"
            alt=""
            onClick={() => switchMainImage("https://discovery.cathaypacific.com/wp-content/uploads/2018/07/Hero-In-Season-1.jpg")}
          />
          
          </div>
        </div>
        </div>
      </div>
      <main>
	<h1>Feature of travel</h1>
	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mattis turpis eu neque tincidunt lacinia. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam auctor ultrices tortor et volutpat. Donec eu semper orci, eu fermentum orci. Vivamus aliquam lobortis egestas. Proin vel mauris vitae sem auctor cursus. Aenean sit amet odio at magna pharetra luctus nec eget urna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent in leo at tellus ultricies laoreet.</p>
	<div className="animalcards">
		<div className="animalcard-wrapper">
			<div className="animalcard">
				<div className="animalcard__image">
					<img src="https://www.selenatravel.com/upload/media/default/0001/01/thumb_770_default_big.jpeg" alt="" width="1080" height="720" />
				</div>
				<div className="animalcard__description">
				<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum architecto natus, libero nemo quae fugit totam quo officiis modi eligendi perspiciatis exercitationem temporibus ad atque corrupti aut placeat ex cumque quis sapiente explicabo recusandae illum nesciunt. Necessitatibus quae esse cumque. In repellat magnam dolor officiis nihil corporis dignissimos est pariatur.</p>
				</div>
			</div>
		</div>
		<div className="animalcard-wrapper">
			<div className="animalcard">
				<div className="animalcard__image">
					<img src="https://www.steppenomad.com/public/upload/gallery/202201120557554610.webp" alt="" width="1080" height="720" />
				</div>
				<div className="animalcard__description">
				<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum architecto natus, libero nemo quae fugit totam quo officiis modi eligendi perspiciatis exercitationem temporibus ad atque corrupti aut placeat ex cumque quis sapiente explicabo recusandae illum nesciunt. Necessitatibus quae esse cumque. In repellat magnam dolor officiis nihil corporis dignissimos est pariatur.</p>
				</div>
			</div>
		</div>
		<div className="animalcard-wrapper">
			<div className="animalcard">
				<div className="animalcard__image">
					<img src="https://media.cnn.com/api/v1/images/stellar/prod/230706152113-01-body-naadam-festival-mongolia-what-is-naadam.jpg?c=original" alt="" width="1080" height="720" />
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
				<img src="https://www.samarmagictours.com/sp/img/list-view/naadam5.jpg" alt="" width="1080" height="720" />
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
