import { SITE_COLORS as c } from "@/utility/strings";
import styled from "styled-components";

const Overlay = styled.div<{ $alignModal?: string }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.72);
  display: flex;
  justify-content: center;
  align-items: ${({ $alignModal }) => $alignModal || "center"};
  z-index: 1000;
  padding: 16px;
`;

const ModalContainer = styled.div<{
  $width?: string;
  $height?: string;
}>`
  background-color: ${c.WHITE};
  width: ${({ $width }) => $width || "424px"};
  max-width: 100%;
  padding: 40px 40px;
  position: relative;
  min-height: ${({ $height }) => $height || "340px"};
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 22px;
  box-shadow: none;

  @media (max-width: 576px) {
    width: 100%;
    min-height: ${({ $height }) => $height || "320px"};
    padding: 32px 24px;
  }
`;

const ModalHeadingContainer = styled.div`
  padding: 20px;
  position: sticky;
  top: 0;
  background-color: ${c.WHITE};
  z-index: 1;

  @media (max-width: 576px) {
    padding: 16px;
  }
`;

const CloseIconDiv = styled.div`
  position: absolute;
  top: 18px;
  right: 18px;
  cursor: pointer;
  font-size: 18px;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${c.GREY_4};

  .anticon {
    font-size: 18px;
  }
`;

const ModalHeading = styled.h2`
  color: #414141;
  text-align: center;
  font-size: 16px;
  font-weight: 800;
  line-height: 22px;
  margin: 0;
  max-width: 360px;
  font-family: Noto Sans;
  font-style: ExtraBold;

  @media (max-width: 576px) {
    max-width: 100%;
  }
`;

const HorizontalLine = styled.hr`
  border: none;
  border-top: 1px solid ${c.GREY_6};
  width: 100%;
  margin: 0;
  position: sticky;
  top: 40px;
  background-color: ${c.WHITE};
  z-index: 1;
`;

const Content = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 18px;
`;

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 15px;
  margin-bottom: 10px;

  @media (max-width: 576px) {
    padding: 0 12px;
    justify-content: center;
  }
`;

const ButtonMainDiv = styled.div<{ $buttonDivWidth?: string }>`
  width: ${({ $buttonDivWidth }) => $buttonDivWidth || "100%"};
  max-width: 343px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 18px;
`;

const ButtonContainer = styled.section`
  width: 100%;
  display: flex;
  gap: 15px;
`;

const IconWrapper = styled.div`
  width: 152px;
  min-height: 152px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 18px;

  svg,
  img {
    max-width: 152px;
    max-height: 152px;
    width: auto;
    height: auto;
    display: block;
    object-fit: contain;
  }
`;

const Description = styled.p`
  color: #414141;
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  margin: 16px 0 0;
  max-width: 360px;
  font-family: Noto Sans;
`;

export const CustomModalStyles = {
  Overlay,
  ModalContainer,
  ModalHeadingContainer,
  CloseIconDiv,
  ModalHeading,
  HorizontalLine,
  Content,
  Footer,
  ButtonMainDiv,
  ButtonContainer,
  IconWrapper,
  Description,
};
