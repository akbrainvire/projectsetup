"use client";

import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import DiscountCodeInput from "@/components/common/DiscountCodeInput";
import PaymentMethodCard from "@/components/common/PaymentMethodCard";
import ConsultationFeeCard from "@/components/doctor/ConsultationFeeCard";
import { DISCOUNT_CODE_INPUT_STATES } from "@/constants/discountCodeInput";
import {
  PAYMENT_FEE_VALUES,
  PAYMENT_METHOD_KEYS,
  PAYMENT_METHOD_OPTIONS,
} from "@/constants/payment";
import type {
  PaymentMethodId,
  PaymentMethodOption,
} from "@/types/payment.types";
import { TRANSLATION_KEYS } from "@/utility/strings";
import { PaymentStyles as S } from "./styles";

const paymentKeys = TRANSLATION_KEYS.PAYMENT;
const VALID_DISCOUNT_CODE = "COUPON";
const INITIAL_PAYMENT_METHOD: PaymentMethodId = PAYMENT_METHOD_KEYS.APPLE_PAY;

export function Payment() {
  const { t } = useTranslation("common");

  const [selectedMethodId, setSelectedMethodId] = useState<PaymentMethodId>(
    INITIAL_PAYMENT_METHOD,
  );
  const [discountCodeValue, setDiscountCodeValue] = useState("");
  const [submittedDiscountCode, setSubmittedDiscountCode] = useState<
    string | null
  >(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const discountCodeState = useMemo(() => {
    if (
      submittedDiscountCode === null ||
      submittedDiscountCode !== discountCodeValue
    ) {
      return DISCOUNT_CODE_INPUT_STATES.IDLE;
    }
    if (submittedDiscountCode === VALID_DISCOUNT_CODE) {
      return DISCOUNT_CODE_INPUT_STATES.APPLIED;
    }
    return DISCOUNT_CODE_INPUT_STATES.ERROR;
  }, [discountCodeValue, submittedDiscountCode]);

  const handleSelectMethod = (id: string) => {
    setSelectedMethodId(id as PaymentMethodId);
  };

  const handleDiscountChange = (nextValue: string) => {
    setDiscountCodeValue(nextValue);
  };

  const handleDiscountApply = () => {
    setSubmittedDiscountCode(discountCodeValue);
  };

  const handleDiscountRemove = () => {
    setDiscountCodeValue("");
    setSubmittedDiscountCode(null);
  };

  const handlePayNow = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
    }, 800);
  };

  return (
    <S.Page>
      <S.Container>
        <S.Header>
          <S.Title>{t(paymentKeys.TITLE)}</S.Title>
          <S.Subtitle>{t(paymentKeys.SUBTITLE)}</S.Subtitle>
        </S.Header>

        <S.Layout>
          <S.MethodsColumn>
            <S.MethodsList role="radiogroup" aria-label={t(paymentKeys.SUBTITLE)}>
              {PAYMENT_METHOD_OPTIONS?.map((option: PaymentMethodOption) => (
                <PaymentMethodCard
                  key={option?.id}
                  id={option?.id}
                  label={t(option?.labelKey)}
                  image={option?.image}
                  imageAlt={t(option?.altKey)}
                  imageHeight={option?.imageHeight}
                  selected={selectedMethodId === option?.id}
                  onSelect={handleSelectMethod}
                />
              ))}
            </S.MethodsList>

            <S.DiscountSlot>
              <DiscountCodeInput
                value={discountCodeValue}
                state={discountCodeState}
                onChange={handleDiscountChange}
                onApply={handleDiscountApply}
                onRemove={handleDiscountRemove}
              />
            </S.DiscountSlot>
          </S.MethodsColumn>

          <S.FeeColumn>
            <ConsultationFeeCard
              totalLabel={t(paymentKeys.FEE.TOTAL_LABEL)}
              totalAmount={PAYMENT_FEE_VALUES.TOTAL_AMOUNT}
              insurance={{
                label: t(paymentKeys.FEE.INSURANCE_LABEL),
                amount: PAYMENT_FEE_VALUES.INSURANCE_AMOUNT,
              }}
              deductible={{
                title: t(paymentKeys.FEE.DEDUCTIBLE_TITLE),
                subtitle: t(paymentKeys.FEE.DEDUCTIBLE_SUBTITLE),
                amount: PAYMENT_FEE_VALUES.DEDUCTIBLE_AMOUNT,
              }}
              action={{
                label: t(paymentKeys.ACTIONS.PAY_NOW),
                onClick: handlePayNow,
                loading: isProcessing,
                disabled: !selectedMethodId,
              }}
            />
          </S.FeeColumn>
        </S.Layout>
      </S.Container>
    </S.Page>
  );
}
