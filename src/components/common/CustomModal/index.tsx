"use client";

import { CloseOutlined } from "@ant-design/icons";
import type React from "react";
import CustomButton from "@/components/common/CustomButton";
import { customModalButtonDefaults as ModalButtonDefaults } from "@/components/common/CustomModal_AK/modalButtonDefaults";
import { CustomModalStyles } from "@/components/common/CustomModal/styles";

export type CustomModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: React.ReactNode;
  description?: React.ReactNode;
  icon?: React.ReactNode;
  buttonText?: React.ReactNode;
  onButtonClick?: () => void;
  showButton?: boolean;
  buttonDivWidth?: string;
  submitIcon?: React.ReactNode;
  cancelIcon?: React.ReactNode;
  submitText?: React.ReactNode;
  cancelText?: React.ReactNode;
  onSubmit?: () => void;
  onCancel?: () => void;
  isSubmitButton?: boolean;
  isCancelButton?: boolean;
  width?: string;
  height?: string;
  alignModal?: "center" | "flex-start" | "flex-end" | "baseline" | "stretch";
  showCloseIcon?: boolean;
};

export default function CustomModal({
  isOpen,
  onClose,
  title,
  description,
  icon,
  buttonText,
  onButtonClick,
  showButton,
  buttonDivWidth,
  submitIcon,
  submitText,
  onSubmit,
  isSubmitButton,
  width = "",
  height = "",
  alignModal,
  showCloseIcon = false,
}: CustomModalProps) {
  if (!isOpen) {
    return null;
  }

  const actionText = buttonText ?? submitText;
  const shouldShowButton = showButton ?? isSubmitButton ?? Boolean(actionText);
  const handleButtonClick = onButtonClick ?? onSubmit;

  return (
    <CustomModalStyles.Overlay $alignModal={alignModal || "center"}>
      <CustomModalStyles.ModalContainer
        $width={width || undefined}
        $height={height || undefined}
      >
        {showCloseIcon ? (
          <CustomModalStyles.CloseIconDiv onClick={onClose}>
            <CloseOutlined />
          </CustomModalStyles.CloseIconDiv>
        ) : null}
        {icon ? (
          <CustomModalStyles.IconWrapper>{icon}</CustomModalStyles.IconWrapper>
        ) : null}
        <CustomModalStyles.ModalHeading>{title}</CustomModalStyles.ModalHeading>
        {description ? (
          <CustomModalStyles.Description>
            {description}
          </CustomModalStyles.Description>
        ) : null}
        {shouldShowButton && actionText ? (
          <CustomModalStyles.ButtonMainDiv $buttonDivWidth={buttonDivWidth}>
            <CustomButton
              {...ModalButtonDefaults.buttonProps}
              {...ModalButtonDefaults.button1Props}
              type="button"
              icon={submitIcon}
              text={actionText}
              onClick={handleButtonClick}
            />
          </CustomModalStyles.ButtonMainDiv>
        ) : null}
      </CustomModalStyles.ModalContainer>
    </CustomModalStyles.Overlay>
  );
}
