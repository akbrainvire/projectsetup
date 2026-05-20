import styled from "styled-components";
import {
  CONSULTATION_FEE_CARD_DEFAULTS,
  CONSULTATION_FEE_CARD_TYPOGRAPHY,
} from "@/constants/consultationFeeCard";
import { NotoSansFont } from "@/styles/fonts";
import { SITE_COLORS as c } from "@/utility/strings";

const defaults = CONSULTATION_FEE_CARD_DEFAULTS;
const totalLabelType = CONSULTATION_FEE_CARD_TYPOGRAPHY.TOTAL_LABEL;
const totalAmountType = CONSULTATION_FEE_CARD_TYPOGRAPHY.TOTAL_AMOUNT;
const insuranceLabelType = CONSULTATION_FEE_CARD_TYPOGRAPHY.INSURANCE_LABEL;
const insuranceAmountType = CONSULTATION_FEE_CARD_TYPOGRAPHY.INSURANCE_AMOUNT;
const deductibleTitleType = CONSULTATION_FEE_CARD_TYPOGRAPHY.DEDUCTIBLE_TITLE;
const deductibleSubtitleType = CONSULTATION_FEE_CARD_TYPOGRAPHY.DEDUCTIBLE_SUBTITLE;
const deductibleAmountType = CONSULTATION_FEE_CARD_TYPOGRAPHY.DEDUCTIBLE_AMOUNT;
const sans = NotoSansFont.style.fontFamily;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${defaults.STACK_GAP};
  width: ${defaults.WIDTH};
  max-width: 100%;
  padding: ${defaults.PADDING};
  border-radius: ${defaults.BORDER_RADIUS};
  border: ${defaults.BORDER_WIDTH} solid ${c.BORDER_GREY};
  background: ${c.WHITE};
  box-sizing: border-box;
`;

const TopSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${defaults.TOP_SECTION_GAP};
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${defaults.ROW_GAP};
`;

const Divider = styled.hr`
  border: 0;
  border-top: 1px solid ${c.BORDER_GREY};
  margin: 0;
`;

const TotalLabel = styled.span`
  font-family: ${sans};
  font-size: ${totalLabelType.FONT_SIZE};
  font-weight: ${totalLabelType.FONT_WEIGHT};
  line-height: ${totalLabelType.LINE_HEIGHT};
  color: ${c.NAVY_DARK};
`;

const TotalAmount = styled.span`
  font-family: ${sans};
  font-size: ${totalAmountType.FONT_SIZE};
  font-weight: ${totalAmountType.FONT_WEIGHT};
  line-height: ${totalAmountType.LINE_HEIGHT};
  color: ${c.NAVY_DARK};
`;

const InsuranceLabelWrap = styled.span`
  display: inline-flex;
  align-items: center;
  gap: ${defaults.INSURANCE_LABEL_GAP};
  color: ${c.TEAL_PRIMARY};
`;

const InsuranceIconSlot = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 0;
`;

const InsuranceLabel = styled.span`
  font-family: ${sans};
  font-size: ${insuranceLabelType.FONT_SIZE};
  font-weight: ${insuranceLabelType.FONT_WEIGHT};
  line-height: ${insuranceLabelType.LINE_HEIGHT};
  color: ${c.TEAL_PRIMARY};
`;

const InsuranceAmount = styled.span`
  font-family: ${sans};
  font-size: ${insuranceAmountType.FONT_SIZE};
  font-weight: ${insuranceAmountType.FONT_WEIGHT};
  line-height: ${insuranceAmountType.LINE_HEIGHT};
  color: ${c.TEAL_PRIMARY};
`;

const DeductibleCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${defaults.ROW_GAP};
  padding: ${defaults.DEDUCTIBLE_PADDING};
  border-radius: ${defaults.DEDUCTIBLE_BORDER_RADIUS};
  background: ${c.SOFT_BLUE_BG};
`;

const DeductibleTextBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${defaults.DEDUCTIBLE_TEXT_GAP};
  min-width: 0;
`;

const DeductibleTitle = styled.span`
  font-family: ${sans};
  font-size: ${deductibleTitleType.FONT_SIZE};
  font-weight: ${deductibleTitleType.FONT_WEIGHT};
  line-height: ${deductibleTitleType.LINE_HEIGHT};
  color: ${c.NAVY_DARK};
`;

const DeductibleSubtitle = styled.span`
  font-family: ${sans};
  font-size: ${deductibleSubtitleType.FONT_SIZE};
  font-weight: ${deductibleSubtitleType.FONT_WEIGHT};
  line-height: ${deductibleSubtitleType.LINE_HEIGHT};
  color: ${c.NAVY_DARK};
`;

const DeductibleAmount = styled.span`
  font-family: ${sans};
  font-size: ${deductibleAmountType.FONT_SIZE};
  font-weight: ${deductibleAmountType.FONT_WEIGHT};
  line-height: ${deductibleAmountType.LINE_HEIGHT};
  color: ${c.NAVY_DARK};
  flex-shrink: 0;
`;

const ActionSlot = styled.div`
  display: flex;
  width: 100%;

  & > button {
    width: 100%;
  }
`;

export const ConsultationFeeCardStyles = {
  Card,
  TopSection,
  Row,
  Divider,
  TotalLabel,
  TotalAmount,
  InsuranceLabelWrap,
  InsuranceIconSlot,
  InsuranceLabel,
  InsuranceAmount,
  DeductibleCard,
  DeductibleTextBlock,
  DeductibleTitle,
  DeductibleSubtitle,
  DeductibleAmount,
  ActionSlot,
};
