import { SITE_COLORS as c } from "@/utility/strings";
import styled from "styled-components";

const Overlay = styled.div<{ $alignModal?: string }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: ${({ $alignModal }) => $alignModal || "center"};
  z-index: 1000;
`;

const ModalContainer = styled.div<{
  $width?: string;
  $height?: string;
}>`
  background-color: ${c.WHITE};
  width: ${({ $width }) => $width || "970px"};
  padding: 0;
  position: relative;
  height: ${({ $height }) => $height || "90%"};
  display: flex;
  flex-direction: column;

  @media (max-width: 1033px) {
    width: 90%;
  }

  @media (max-width: 576px) {
    width: 95%;
    height: ${({ $height }) => $height || "95%"};
    margin-top: 30px;
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
  top: 17px;
  right: 10px;
  cursor: pointer;
  font-size: 22px;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  .anticon {
    font-size: 22px;
  }
`;

const ModalHeading = styled.h2`
  color: ${c.BLUE_1};
  text-align: center;
  font-size: 16px;
  margin: 0;

  @media (max-width: 576px) {
    font-size: 14px;
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
  padding: 10px 15px;
  overflow-y: auto;
  flex-grow: 1;
  overflow-x: hidden;
  scrollbar-width: thin;

  @media (max-width: 576px) {
    padding: 8px 12px;
  }
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
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 15px;
`;

const ButtonContainer = styled.section`
  width: 100%;
  display: flex;
  gap: 15px;
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
};
