import { Header } from "semantic-ui-react";
import { device } from "./size";
import styled from "styled-components";

const Banner = styled(Header)`
  position: relative;
`;

const BannerItem = styled.div`
  position: relative;
  overflow: hidden;
  height: 350px;
`;

const BannerImage = styled.div`
  clip-path: polygon(0 0, 78% 0, 100% 100%, 0 100%);
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
`;

const BannerDescription = styled.div`
  position: absolute;
  width: 60%;
  top: 0;
  right: 0;
  height: 100%;
  filter: drop-shadow(-12px 0px 4px rgba(0, 0, 0, 0.1));
`;

const BannerText = styled.div`
  clip-path: polygon(4% 0, 100% 0%, 100% 100%, 18% 100%);
  background-color: #ffffff;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  overflow-wrap: break-word;

  h1 {
    font-size: 14px;
  }

  @media ${device.tablet} {
    padding: 10px 30px 0px 80px;
    text-align: center;
    h1 {
      font-size: 50px;
    }
  }
`;
export { Banner, BannerItem, BannerImage, BannerDescription, BannerText };
