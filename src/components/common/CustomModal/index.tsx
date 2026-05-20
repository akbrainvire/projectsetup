"use client";

import { CloseOutlined } from "@ant-design/icons";
import type React from "react";
import CustomButton from "@/components/common/CustomButton";
import { customModalButtonDefaults as ModalButtonDefaults } from "@/components/common/CustomModal/modalButtonDefaults";
import { CustomModalStyles } from "@/components/common/CustomModal/styles";

export type CustomModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: React.ReactNode;
  children: React.ReactNode;
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
  children,
  buttonDivWidth,
  submitIcon,
  cancelIcon,
  submitText,
  cancelText,
  onSubmit,
  onCancel,
  isCancelButton = true,
  isSubmitButton = true,
  width = "",
  height = "",
  alignModal,
  showCloseIcon = true,
}: CustomModalProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <CustomModalStyles.Overlay $alignModal={alignModal || "center"}>
      <CustomModalStyles.ModalContainer $width={width || undefined} $height={height || undefined}>
        <CustomModalStyles.ModalHeadingContainer>
          {showCloseIcon ? (
            <CustomModalStyles.CloseIconDiv onClick={onClose}>
              <CloseOutlined />
            </CustomModalStyles.CloseIconDiv>
          ) : null}
          <CustomModalStyles.ModalHeading>{title}</CustomModalStyles.ModalHeading>
        </CustomModalStyles.ModalHeadingContainer>
        <CustomModalStyles.HorizontalLine />
        <CustomModalStyles.Content>{children}</CustomModalStyles.Content>
        <CustomModalStyles.Footer>
          <CustomModalStyles.ButtonMainDiv $buttonDivWidth={buttonDivWidth}>
            <CustomModalStyles.ButtonContainer>
              {isSubmitButton ? (
                <CustomButton
                  {...ModalButtonDefaults.buttonProps}
                  {...ModalButtonDefaults.button1Props}
                  type="button"
                  icon={submitIcon}
                  text={submitText}
                  onClick={onSubmit}
                />
              ) : null}
            </CustomModalStyles.ButtonContainer>
            <CustomModalStyles.ButtonContainer>
              {isCancelButton ? (
                <CustomButton
                  {...ModalButtonDefaults.buttonProps}
                  {...ModalButtonDefaults.button2Props}
                  type="button"
                  icon={cancelIcon}
                  text={cancelText}
                  onClick={onCancel}
                />
              ) : null}
            </CustomModalStyles.ButtonContainer>
          </CustomModalStyles.ButtonMainDiv>
        </CustomModalStyles.Footer>
      </CustomModalStyles.ModalContainer>
    </CustomModalStyles.Overlay>
  );
}
