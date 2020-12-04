import React from "react";
import "../../styles/home.css";
import {
  Banner,
  BannerImage,
  BannerItem,
  BannerDescription,
  BannerText,
} from "../../styled-components/banner";
import Slider from "react-slick";

function Index() {
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };
  return (
    <>
      <Banner>
        <Slider {...settings}>
          <div>
            <BannerItem>
              <BannerImage src="https://cdn.pocket-lint.com/r/s/1200x/assets/images/151737-games-feature-batman-games-in-order-how-to-play-the-arkham-series-and-more-image1-m8vygjidfb.jpg" />
              <BannerDescription>
                <BannerText>
                  <h1>Batman Arkham Knight</h1>
                </BannerText>
              </BannerDescription>
            </BannerItem>
          </div>
          <div>
            <BannerItem>
              <BannerImage src="https://i.pinimg.com/originals/ce/05/40/ce05406160b493c152407fa4e08ffa17.jpg" />
              <BannerDescription>
                <BannerText>
                  <h1>Batman Arkham Knight</h1>
                </BannerText>
              </BannerDescription>
            </BannerItem>
          </div>
        </Slider>
      </Banner>
    </>
  );
}

export default Index;
