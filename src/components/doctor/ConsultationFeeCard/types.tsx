import type React from "react";

export type ConsultationFeeCardInsurance = {
  label: string;
  amount: string;
  icon?: React.ReactNode;
};

export type ConsultationFeeCardDeductible = {
  title: string;
  subtitle: string;
  amount: string;
};

export type ConsultationFeeCardAction = {
  label: string;
  onClick: () => void;
  ariaLabel?: string;
  disabled?: boolean;
  loading?: boolean;
};

export type ConsultationFeeCardProps = {
  totalLabel: string;
  totalAmount: string;
  insurance?: ConsultationFeeCardInsurance;
  deductible: ConsultationFeeCardDeductible;
  action?: ConsultationFeeCardAction;
  className?: string;
};
