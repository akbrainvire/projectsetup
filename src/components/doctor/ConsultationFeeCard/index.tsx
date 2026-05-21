"use client";

import { Icons } from "@/assets/svg";
import CustomButton from "@/components/common/CustomButton";
import { BUTTON_VARIANTS } from "@/constants/button";
import { CONSULTATION_FEE_CARD_DEFAULTS } from "@/constants/consultationFeeCard";
import type { ConsultationFeeCardProps } from "./types";
import { SITE_COLORS } from "@/utility/strings";
import { ConsultationFeeCardStyles } from "./styles";

export default function ConsultationFeeCard({
  totalLabel,
  totalAmount,
  insurance,
  deductible,
  action,
  className,
}: ConsultationFeeCardProps) {
  const insuranceIcon = insurance?.icon ?? <Icons.CoveredCheckSVG />;

  const handleActionClick = () => {
    action?.onClick();
  };

  return (
    <ConsultationFeeCardStyles.Card className={className}>
      <ConsultationFeeCardStyles.TopSection>
        <ConsultationFeeCardStyles.Row>
          <ConsultationFeeCardStyles.TotalLabel>
            {totalLabel}
          </ConsultationFeeCardStyles.TotalLabel>
          <ConsultationFeeCardStyles.TotalAmount>
            {totalAmount}
          </ConsultationFeeCardStyles.TotalAmount>
        </ConsultationFeeCardStyles.Row>

        {insurance ? <ConsultationFeeCardStyles.Divider /> : null}

        {insurance ? (
          <ConsultationFeeCardStyles.Row>
            <ConsultationFeeCardStyles.InsuranceLabelWrap>
              <ConsultationFeeCardStyles.InsuranceIconSlot aria-hidden>
                {insuranceIcon}
              </ConsultationFeeCardStyles.InsuranceIconSlot>
              <ConsultationFeeCardStyles.InsuranceLabel>
                {insurance?.label}
              </ConsultationFeeCardStyles.InsuranceLabel>
            </ConsultationFeeCardStyles.InsuranceLabelWrap>
            <ConsultationFeeCardStyles.InsuranceAmount>
              {insurance?.amount}
            </ConsultationFeeCardStyles.InsuranceAmount>
          </ConsultationFeeCardStyles.Row>
        ) : null}
      </ConsultationFeeCardStyles.TopSection>

      <ConsultationFeeCardStyles.DeductibleCard>
        <ConsultationFeeCardStyles.DeductibleTextBlock>
          <ConsultationFeeCardStyles.DeductibleTitle>
            {deductible?.title}
          </ConsultationFeeCardStyles.DeductibleTitle>
          <ConsultationFeeCardStyles.DeductibleSubtitle>
            {deductible?.subtitle}
          </ConsultationFeeCardStyles.DeductibleSubtitle>
        </ConsultationFeeCardStyles.DeductibleTextBlock>
        <ConsultationFeeCardStyles.DeductibleAmount>
          {deductible?.amount}
        </ConsultationFeeCardStyles.DeductibleAmount>
      </ConsultationFeeCardStyles.DeductibleCard>

      {action ? (
        <ConsultationFeeCardStyles.ActionSlot>
          <CustomButton
            text={action?.label}
            appearance={{
              variant: BUTTON_VARIANTS.CUSTOM,
              backgroundColor: SITE_COLORS.NAVY_DARK,
              color: SITE_COLORS.WHITE,
              border: "none",
              borderRadius: CONSULTATION_FEE_CARD_DEFAULTS.BUTTON_BORDER_RADIUS,
              padding: CONSULTATION_FEE_CARD_DEFAULTS.BUTTON_PADDING,
              fontSize: CONSULTATION_FEE_CARD_DEFAULTS.BUTTON_FONT_SIZE,
              fontWeight: CONSULTATION_FEE_CARD_DEFAULTS.BUTTON_FONT_WEIGHT,
              width: "100%",
            }}
            state={{
              disabled: action?.disabled ?? false,
              loading: action?.loading ?? false,
            }}
            events={{ onClick: handleActionClick }}
          />
        </ConsultationFeeCardStyles.ActionSlot>
      ) : null}
    </ConsultationFeeCardStyles.Card>
  );
}

export type { ConsultationFeeCardProps } from "./types";
