"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import DiscountCodeInput from "@/components/common/DiscountCodeInput";
import Loader from "@/components/common/Loader";
import PaymentMethodCard from "@/components/common/PaymentMethodCard";
import ConsultationFeeCard from "@/components/doctor/ConsultationFeeCard";
import { DISCOUNT_CODE_INPUT_STATES } from "@/constants/discountCodeInput";
import { useForm } from "@/hooks/useForm";
import {
  PAYMENT_CONSTANTS,
  PAYMENT_METHOD_OPTIONS,
} from "@/modules/payment/constant";
import type {
  PaymentMethodId,
  PaymentMethodOption,
} from "./types";
import { TRANSLATION_KEYS } from "@/utility/strings";
import { PaymentStyles as S } from "./styles";

const paymentKeys = TRANSLATION_KEYS.PAYMENT;
const VALID_DISCOUNT_CODE = PAYMENT_CONSTANTS.VALID_DISCOUNT_CODE;
const INITIAL_PAYMENT_METHOD: PaymentMethodId =
  PAYMENT_CONSTANTS.INITIAL_METHOD_KEY as PaymentMethodId;
const paymentMethodFormKey = PAYMENT_CONSTANTS.FORM_KEYS.PAYMENT_METHOD;

export function Payment() {
  const { t } = useTranslation("common");
  const [isPageLoading, setIsPageLoading] = useState(true);
  const [discountCodeValue, setDiscountCodeValue] = useState("");
  const [submittedDiscountCode, setSubmittedDiscountCode] = useState<
    string | null
  >(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const paymentForm = useForm({
    [paymentMethodFormKey]: {
      value: INITIAL_PAYMENT_METHOD,
      error: "",
      required: true,
    },
  });

  const selectedMethodId = paymentForm.values[
    paymentMethodFormKey
  ] as PaymentMethodId;
  const paymentMethodError = String(
    paymentForm.errors[paymentMethodFormKey] ?? ""
  );

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsPageLoading(false);
    }, PAYMENT_CONSTANTS.LOADER_SIMULATION_MS);
    return () => {
      window.clearTimeout(timer);
    };
  }, []);

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
    paymentForm.handleOnValueChange(id, paymentMethodFormKey);
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

  const handlePayNow = useCallback(() => {
    paymentForm.validateSpecificFields(
      [paymentMethodFormKey],
      (_values: unknown, validationErrors: Record<string, string> | null) => {
        if (validationErrors) {
          return;
        }
        setIsProcessing(true);
        setTimeout(() => {
          setIsProcessing(false);
        }, PAYMENT_CONSTANTS.LOADER_SIMULATION_MS);
      }
    );
  }, [paymentForm]);

  return (
    <S.Page>
      {isPageLoading ? (
        <Loader overlay label={t(TRANSLATION_KEYS.LOADER.LABEL)} />
      ) : null}
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
            {paymentMethodError ? (
              <S.ErrorMessage role="alert">{paymentMethodError}</S.ErrorMessage>
            ) : null}

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
              totalAmount={PAYMENT_CONSTANTS.FEE_VALUES.TOTAL_AMOUNT}
              insurance={{
                label: t(paymentKeys.FEE.INSURANCE_LABEL),
                amount: PAYMENT_CONSTANTS.FEE_VALUES.INSURANCE_AMOUNT,
              }}
              deductible={{
                title: t(paymentKeys.FEE.DEDUCTIBLE_TITLE),
                subtitle: t(paymentKeys.FEE.DEDUCTIBLE_SUBTITLE),
                amount: PAYMENT_CONSTANTS.FEE_VALUES.DEDUCTIBLE_AMOUNT,
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
