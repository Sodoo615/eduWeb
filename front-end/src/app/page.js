"use client";

import Header from "./header/page.js";
import Travels from "./components/travels/page.js";
import ImageSlider from "./components/slider/page.js";
import ScrollToTopButton from "./components/scroll/page.js";
import ChatBot from "./ES4edu/chatbot/page.js";
import Social from "./components/socials/net.js";
export default function Home() {
  const YOUR_FACEBOOK_APP_ID =' https://www.facebook.com/profile.php?id=100087388012113&mibextid=LQQJ4d';
  const images = [
    "uul.webp",
    "khuvsgul-3.jpg",
    "kazak.avif",
    "otgontenger.jpeg",
    "zavi.jpeg",
  ];
  return (
    <div>
      <Social/>
      <Header></Header>
      <div>
        {/* <Socials></Socials> */}
        <ImageSlider images={images} />
      </div>
      <div>
        <ChatBot appId={YOUR_FACEBOOK_APP_ID}/>
        <Travels></Travels>
        <ScrollToTopButton />
      
      </div>
    </div>
  );
}
