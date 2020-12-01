import React from 'react';
import '../../styles/home.css';
import { Banner, BannerImage, BannerItem, BannerDescription, BannerText } from '../../styled-components/banner';
import Slider from 'react-slick';

function Index() {
    const settings = {
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false
    }
    return (
        <>
            <Banner>
                <BannerItem>
                    <BannerImage src="https://cdn.pocket-lint.com/r/s/1200x/assets/images/151737-games-feature-batman-games-in-order-how-to-play-the-arkham-series-and-more-image1-m8vygjidfb.jpg" />
                    <BannerDescription>
                        <BannerText>
                            <h1>Batman Arkham Knight</h1>
                        </BannerText>
                    </BannerDescription>
                </BannerItem>
                {/* <Slider {...settings}>
                    <div>
                        <h3>1</h3>
                    </div>
                    <div>
                        <h3>2</h3>
                    </div>
                    <div>
                        <h3>3</h3>
                    </div>
                    <div>
                        <h3>4</h3>
                    </div>
                    <div>
                        <h3>5</h3>
                    </div>
                    <div>
                        <h3>6</h3>
                    </div>
                </Slider> */}
            </Banner>
        </>
    )
}

export default Index;
