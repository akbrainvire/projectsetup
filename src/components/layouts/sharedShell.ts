import { NotoSerifFont } from "@/styles/fonts";
import styled from "styled-components";
import { SITE_COLORS as c } from "@/utility/strings";

const Viewport = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
  width: 100%;
  background: ${c.PAGE_MUTED};
`;

const MainColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
  width: 100%;
  max-width: none;
  margin: 0;
  padding: 16px clamp(16px, 3vw, 40px) 0;
  box-sizing: border-box;
  gap: 16px;
`;

const TitleBarStrip = styled.div`
  flex-shrink: 0;
  width: 100%;
  box-sizing: border-box;
  background: ${c.TITLE_BAR_BG};
  color: ${c.WHITE};
  padding: 12px clamp(16px, 3vw, 40px);
  border-radius: 8px;
  font-family: ${NotoSerifFont.style.fontFamily};
  font-weight: 600;
  font-size: 15px;
  letter-spacing: 0.02em;
`;

const ListToolbar = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  padding: 14px clamp(16px, 2.5vw, 28px);
  background: ${c.WHITE};
  border-radius: 10px;
  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.05);
  border: 1px solid ${c.GREY_11};
`;

const ListToolbarStart = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
  min-width: 0;
  flex: 1;
`;

const ListToolbarEnd = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
`;

const ListSectionHeader = styled.div`
  flex-shrink: 0;
  width: 100%;
`;

const ListSurface = styled.div`
  flex: 1;
  min-height: 0;
  width: 100%;
  background: ${c.WHITE};
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(15, 23, 42, 0.06);
  border: 1px solid ${c.GREY_11};
  overflow: hidden;
  box-sizing: border-box;
`;

const DetailMain = styled.div`
  flex: 1;
  min-height: 0;
  width: 100%;
  background: ${c.WHITE};
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(15, 23, 42, 0.06);
  border: 1px solid ${c.GREY_11};
  padding: clamp(20px, 3vw, 32px);
  box-sizing: border-box;
`;

const FooterSlot = styled.footer`
  flex-shrink: 0;
  padding: 18px clamp(16px, 3vw, 40px) 28px;
  width: 100%;
  max-width: none;
  margin: 0;
  box-sizing: border-box;
  text-align: center;
`;

const PageShellBody = styled.div`
  flex: 1;
  min-height: 0;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

export const SharedLayoutStyles = {
  Viewport,
  PageShellBody,
  MainColumn,
  TitleBarStrip,
  ListToolbar,
  ListToolbarStart,
  ListToolbarEnd,
  ListSectionHeader,
  ListSurface,
  DetailMain,
  FooterSlot,
};
