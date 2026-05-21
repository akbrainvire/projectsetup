import styled, { keyframes } from "styled-components";
import { LOADER_CONSTANTS } from "@/components/common/Loader/constant";
import { NotoSansFont } from "@/styles/fonts";
import { SITE_COLORS as c } from "@/utility/strings";

const loader = LOADER_CONSTANTS;
const sans = NotoSansFont.style.fontFamily;

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const Root = styled.div<{ $overlay: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  width: 100%;
  box-sizing: border-box;

  ${({ $overlay }) =>
    $overlay
      ? `
    position: absolute;
    inset: 0;
    z-index: ${loader.Z_INDEX};
    background: ${loader.OVERLAY_BACKGROUND};
  `
      : `
    padding: 32px 16px;
  `}
`;

const Spinner = styled.span`
  display: inline-block;
  width: ${loader.SIZE};
  height: ${loader.SIZE};
  border-radius: 50%;
  border: ${loader.BORDER_WIDTH} solid ${loader.BORDER_COLOR};
  border-top-color: ${loader.BORDER_TOP_COLOR};
  animation: ${spin} 0.8s linear infinite;
`;

const Label = styled.span`
  font-family: ${sans};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
  color: ${c.GREY_4};
  text-align: center;
`;

export const LoaderStyles = {
  Root,
  Spinner,
  Label,
};
