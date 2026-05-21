import applePayImage from "@/assets/Payment/apple.png";
import codImage from "@/assets/Payment/cod.png";
import creditCardImage from "@/assets/Payment/crediccard.png";
import stcPayImage from "@/assets/Payment/stcpay.png";
import tabbyImage from "@/assets/Payment/tabby.png";
import tamaraImage from "@/assets/Payment/tamara.png";
import { TRANSLATION_KEYS } from "@/utility/strings";
import type { PaymentMethodOption } from "@/modules/payment/types";

export const PAYMENT_CONSTANTS = {
  METHOD_KEYS: {
    CREDIT_CARD: "creditCard",
    APPLE_PAY: "applePay",
    STC_PAY: "stcPay",
    CASH_ON_DELIVERY: "cashOnDelivery",
    TAMARA: "tamara",
    TABBY: "tabby",
  },
  DEFAULTS: {
    PAGE_VERTICAL_PADDING: "23px",
    PAGE_BOTTOM_PADDING: "80px",
    LAYOUT_GAP: "clamp(16px, 2vw, 32px)",
    METHODS_STACK_GAP: "14px",
    DISCOUNT_MARGIN_TOP: "10px",
    HEADER_GAP: "4px",
    FEE_COLUMN_WIDTH: "minmax(300px, 360px)",
  },
  FEE_VALUES: {
    TOTAL_AMOUNT: "SAR 55",
    INSURANCE_AMOUNT: "- SAR 45",
    DEDUCTIBLE_AMOUNT: "SAR 10",
  },
  TYPOGRAPHY: {
    TITLE: {
      FONT_SIZE: "20px",
      FONT_WEIGHT: "800",
      LINE_HEIGHT: "1",
      LETTER_SPACING: "0",
    },
    SUBTITLE: {
      FONT_SIZE: "14px",
      FONT_WEIGHT: "400",
      LINE_HEIGHT: "1",
      LETTER_SPACING: "0",
    },
  },
  VALID_DISCOUNT_CODE: "COUPON",
  INITIAL_METHOD_KEY: "applePay",
  FORM_KEYS: {
    PAYMENT_METHOD: "paymentMethod",
  },
  LOADER_SIMULATION_MS: 600,
} as const;

export const PAYMENT_METHOD_OPTIONS: ReadonlyArray<PaymentMethodOption> = [
  {
    id: PAYMENT_CONSTANTS.METHOD_KEYS.CREDIT_CARD,
    labelKey: TRANSLATION_KEYS.PAYMENT.METHODS.CREDIT_CARD,
    altKey: TRANSLATION_KEYS.PAYMENT.ALT_TEXT.CREDIT_CARD,
    image: creditCardImage,
    imageHeight: 22,
  },
  {
    id: PAYMENT_CONSTANTS.METHOD_KEYS.APPLE_PAY,
    labelKey: TRANSLATION_KEYS.PAYMENT.METHODS.APPLE_PAY,
    altKey: TRANSLATION_KEYS.PAYMENT.ALT_TEXT.APPLE_PAY,
    image: applePayImage,
    imageHeight: 18,
  },
  {
    id: PAYMENT_CONSTANTS.METHOD_KEYS.STC_PAY,
    labelKey: TRANSLATION_KEYS.PAYMENT.METHODS.STC_PAY,
    altKey: TRANSLATION_KEYS.PAYMENT.ALT_TEXT.STC_PAY,
    image: stcPayImage,
    imageHeight: 20,
  },
  {
    id: PAYMENT_CONSTANTS.METHOD_KEYS.CASH_ON_DELIVERY,
    labelKey: TRANSLATION_KEYS.PAYMENT.METHODS.CASH_ON_DELIVERY,
    altKey: TRANSLATION_KEYS.PAYMENT.ALT_TEXT.CASH_ON_DELIVERY,
    image: codImage,
    imageHeight: 28,
  },
  {
    id: PAYMENT_CONSTANTS.METHOD_KEYS.TAMARA,
    labelKey: TRANSLATION_KEYS.PAYMENT.METHODS.TAMARA,
    altKey: TRANSLATION_KEYS.PAYMENT.ALT_TEXT.TAMARA,
    image: tamaraImage,
    imageHeight: 22,
  },
  {
    id: PAYMENT_CONSTANTS.METHOD_KEYS.TABBY,
    labelKey: TRANSLATION_KEYS.PAYMENT.METHODS.TABBY,
    altKey: TRANSLATION_KEYS.PAYMENT.ALT_TEXT.TABBY,
    image: tabbyImage,
    imageHeight: 22,
  },
];
