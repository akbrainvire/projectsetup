"use client";

import { NotoSansFont } from "@/styles/fonts";
import type { StyledButtonStyleConfig, StyledButtonTextConfig } from "@/types/button.types";
import styled, { css } from "styled-components";

const StyledButton = styled.button<{ $buttonStyle: StyledButtonStyleConfig }>`
  padding: ${({ $buttonStyle }) => $buttonStyle.padding};
  border: ${({ $buttonStyle }) => $buttonStyle.border};
  width: ${({ $buttonStyle }) => $buttonStyle.width};
  height: ${({ $buttonStyle }) => $buttonStyle.height};
  min-width: ${({ $buttonStyle }) => $buttonStyle.minWidth || "auto"};
  background-color: ${({ $buttonStyle }) => $buttonStyle.backgroundColor};
  color: ${({ $buttonStyle }) => $buttonStyle.color};
  font-family: ${NotoSansFont.style.fontFamily};
  font-weight: ${({ $buttonStyle }) => $buttonStyle.fontWeight};
  cursor: ${({ $buttonStyle }) =>
    $buttonStyle.isLoading
      ? "wait"
      : $buttonStyle.isCursorPointer === false
        ? "default"
        : "pointer"};
  border-radius: ${({ $buttonStyle }) => $buttonStyle.borderRadius};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: ${({ $buttonStyle }) => $buttonStyle.margin.top};
  margin-right: ${({ $buttonStyle }) => $buttonStyle.margin.right};
  margin-bottom: ${({ $buttonStyle }) => $buttonStyle.margin.bottom};
  margin-left: ${({ $buttonStyle }) => $buttonStyle.margin.left};
  white-space: nowrap;
  transition:
    background-color 0.2s ease,
    color 0.2s ease,
    border-color 0.2s ease;
  position: relative;
  overflow: hidden;
  box-shadow: ${({ $buttonStyle }) =>
    $buttonStyle.hideBoxShadow ? "none" : "0 4px 14px rgba(15, 23, 42, 0.12)"};

  ${({ $buttonStyle }) =>
    $buttonStyle.isOtpVerifying &&
    css`
      color: inherit;
      text-decoration: underline;
    `}

  ${({ $buttonStyle }) => {
    const buttonType = $buttonStyle.buttonType;
    if (buttonType !== "dashboardButton" && buttonType !== "action") {
      return null;
    }
    return css`
      padding: ${buttonType === "action" ? "15px 40px" : "10px 30px"};
      font-weight: 500;
      min-width: ${buttonType === "dashboardButton" ? "137px" : "auto"};
      min-height: ${buttonType === "action" ? "54px" : "44px"};
    `;
  }}

  ${({ $buttonStyle }) =>
    $buttonStyle.hover.active &&
    css`
      &:hover:not(:disabled) {
        background-color: ${$buttonStyle.hover.backgroundColor};
        color: ${$buttonStyle.hover.color};
      }
    `}

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }

  @media (max-width: 576px) {
    white-space: normal;
    text-align: center;
    line-height: 1.4;
  }
`;

const ButtonContent = styled.span<{ $buttonStyle: Pick<StyledButtonStyleConfig, "iconGap"> }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ $buttonStyle }) => $buttonStyle.iconGap};
`;

const IconSlot = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  line-height: 0;
  color: inherit;
`;

const ButtonText = styled.span<{ $textStyle: StyledButtonTextConfig }>`
  text-decoration: ${({ $textStyle }) => $textStyle.underline ?? "none"};
  text-underline-offset: 0.2rem;
  margin: 0;
  font-size: ${({ $textStyle }) => $textStyle.fontSize};
  line-height: 1.25;
`;

const ContentWrapper = styled.div<{ $hasInnerMarginTop: boolean }>`
  display: flex;
  align-items: center;
  width: 100%;

  .inner {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: ${({ $hasInnerMarginTop }) => ($hasInnerMarginTop ? "28px" : "0")};
  }
`;

export const CustomButtonStyles = {
  StyledButton,
  ButtonContent,
  IconSlot,
  ButtonText,
  ContentWrapper,
};
