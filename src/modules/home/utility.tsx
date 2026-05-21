import type { ReactNode } from "react";
import { Icons } from "@/assets/svg";
import { HOME_CONSTANTS } from "@/modules/home/constant";

export const resolveHomeNavCardIcon = (iconKey: string): ReactNode => {
  if (iconKey === HOME_CONSTANTS.NAV_ICON_KEYS.CONSULTATION_HISTORY) {
    return <Icons.MedBagSVG />;
  }
  if (iconKey === HOME_CONSTANTS.NAV_ICON_KEYS.ORDERS) {
    return <Icons.MedBagTwoSVG />;
  }
  return null;
};
