import { SITE_COLORS as c } from "@/utility/strings";

const buttonProps = {
  width: "100%",
  height: "40px",
};

const button1Props = {
  color: c.WHITE,
  backgroundColor: c.ORANGE,
  isHideBoxShadow: true,
};

const button2Props = {
  color: c.BLUE_1,
  backgroundColor: "transparent",
  border: `1px solid ${c.GREY_5}`,
  hoveredColor: c.WHITE,
  isHideBoxShadow: true,
};

export const customModalButtonDefaults = {
  buttonProps,
  button1Props,
  button2Props,
};
