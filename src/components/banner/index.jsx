import React from "react";
import {
  Banner,
  BannerImage,
  BannerItem,
  BannerDescription,
  BannerText,
} from "../../styled-components/banner";
import Slider from "react-slick";

const Index = ({ dataComics }) => {
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };
  return (
    <Banner>
      <Slider {...settings}>
        {dataComics.map((item) => (
          <BannerItem key={item.id}>
            <BannerImage
              style={{
                backgroundImage: `url(${
                  item.thumbnail.path +
                  "/landscape_xlarge." +
                  item.thumbnail.extension
                })`,
              }}
            />
            <BannerDescription>
              <BannerText>
                <h1>{item.title}</h1>
              </BannerText>
            </BannerDescription>
          </BannerItem>
        ))}
      </Slider>
    </Banner>
  );
};

export default Index;
