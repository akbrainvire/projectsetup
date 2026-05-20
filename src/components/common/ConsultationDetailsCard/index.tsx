"use client";

import { useTranslation } from "react-i18next";
import type { ConsultationDetailsCardProps } from "@/types/consultationDetailsCard.types";
import { TRANSLATION_KEYS } from "@/utility/strings";
import { ConsultationDetailsCardStyles } from "./styles";

export default function ConsultationDetailsCard({
  consultationId,
  patientName,
  consultationDateTime,
  consultationType,
  consultationDuration,
  paymentType,
  className,
}: ConsultationDetailsCardProps) {
  const { t } = useTranslation("common");

  return (
    <ConsultationDetailsCardStyles.Card className={className}>
      <ConsultationDetailsCardStyles.Row>
        <ConsultationDetailsCardStyles.Field>
          <ConsultationDetailsCardStyles.Label>
            {t(TRANSLATION_KEYS.CONSULTATION_DETAILS.LABELS.CONSULTATION_ID)}
          </ConsultationDetailsCardStyles.Label>
          <ConsultationDetailsCardStyles.Value>
            {consultationId}
          </ConsultationDetailsCardStyles.Value>
        </ConsultationDetailsCardStyles.Field>
        <ConsultationDetailsCardStyles.Field>
          <ConsultationDetailsCardStyles.Label>
            {t(TRANSLATION_KEYS.CONSULTATION_DETAILS.LABELS.PATIENT_NAME)}
          </ConsultationDetailsCardStyles.Label>
          <ConsultationDetailsCardStyles.Value>
            {patientName}
          </ConsultationDetailsCardStyles.Value>
        </ConsultationDetailsCardStyles.Field>
      </ConsultationDetailsCardStyles.Row>
      <ConsultationDetailsCardStyles.Row>
        <ConsultationDetailsCardStyles.Field>
          <ConsultationDetailsCardStyles.Label>
            {t(TRANSLATION_KEYS.CONSULTATION_DETAILS.LABELS.CONSULTATION_DATE_TIME)}
          </ConsultationDetailsCardStyles.Label>
          <ConsultationDetailsCardStyles.Value>
            {consultationDateTime}
          </ConsultationDetailsCardStyles.Value>
        </ConsultationDetailsCardStyles.Field>
        <ConsultationDetailsCardStyles.Field>
          <ConsultationDetailsCardStyles.Label>
            {t(TRANSLATION_KEYS.CONSULTATION_DETAILS.LABELS.CONSULTATION_TYPE)}
          </ConsultationDetailsCardStyles.Label>
          <ConsultationDetailsCardStyles.Value>
            {consultationType}
          </ConsultationDetailsCardStyles.Value>
        </ConsultationDetailsCardStyles.Field>
      </ConsultationDetailsCardStyles.Row>
      <ConsultationDetailsCardStyles.Row>
        <ConsultationDetailsCardStyles.Field>
          <ConsultationDetailsCardStyles.Label>
            {t(TRANSLATION_KEYS.CONSULTATION_DETAILS.LABELS.CONSULTATION_DURATION)}
          </ConsultationDetailsCardStyles.Label>
          <ConsultationDetailsCardStyles.Value>
            {consultationDuration}
          </ConsultationDetailsCardStyles.Value>
        </ConsultationDetailsCardStyles.Field>
        <ConsultationDetailsCardStyles.Field>
          <ConsultationDetailsCardStyles.Label>
            {t(TRANSLATION_KEYS.CONSULTATION_DETAILS.LABELS.PAYMENT_TYPE)}
          </ConsultationDetailsCardStyles.Label>
          <ConsultationDetailsCardStyles.Value>
            {paymentType}
          </ConsultationDetailsCardStyles.Value>
        </ConsultationDetailsCardStyles.Field>
      </ConsultationDetailsCardStyles.Row>
    </ConsultationDetailsCardStyles.Card>
  );
}

export type { ConsultationDetailsCardProps } from "@/types/consultationDetailsCard.types";
