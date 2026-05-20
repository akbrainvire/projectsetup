import { SITE_COLORS as c } from "@/utility/strings";
import styled, { css } from "styled-components";

const StyledInputLabel = styled.label`
  display: flex;
  font-size: 1rem;
  font-weight: 400;
  text-align: left;
  color: ${c.BLUE_1};

  &.with-tooltip {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  @media (max-width: 475px) {
    font-size: 13px;
  }
  @media (width: 1024px) {
    font-size: 15px;
  }
`;

const InputWrapper = styled.div<{
  $placeHolderColor?: string;
  $isBorder?: boolean;
  $borderRadius?: string;
  $showDropdown?: boolean;
  $isValid?: boolean;
  $disabled?: boolean;
  $backgroundColor?: string;
  $showSearchIcon?: boolean;
  $height?: string;
  $showRightIconFixed?: boolean;
}>`
  background: ${({ $backgroundColor, $disabled }) =>
    $disabled ? c.GREY_2 : $backgroundColor || c.WHITE};
  border: ${({ $isBorder, $isValid }) =>
    $isValid
      ? `1px solid ${c.LIGHT_GREEN_5}`
      : $isBorder
        ? `1px solid ${c.GREY_11}`
        : "none"};
  height: ${({ $height }) => $height || "54px"};
  border-radius: ${({ $borderRadius }) => ($borderRadius ? `${$borderRadius}` : "5px")};
  border-top-left-radius: ${({ $showDropdown }) => ($showDropdown ? "0px" : "0")};
  border-bottom-left-radius: ${({ $showDropdown }) => ($showDropdown ? "0px" : "0")};
  border-left: ${({ $showDropdown, $isValid }) =>
    $showDropdown
      ? "0px"
      : $isValid
        ? `1px solid ${c.LIGHT_GREEN_5}`
        : `1px solid ${c.GREY_11}`};
  width: 100%;

  &::placeholder {
    color: ${({ $placeHolderColor }) => $placeHolderColor || c.PLACEHOLDER_GREY};
    opacity: 50%;
    font-size: 1rem !important;
    font-weight: 400;
  }
`;

const StyledInput = styled.input<{
  $backgroundColor?: string;
  $color?: string;
  $placeHolderColor?: string;
  $borderRadius?: string;
  $showDropdown?: boolean;
  $isValid?: boolean;
  $disabled?: boolean;
  $showSearchIcon?: boolean;
  $opacity?: string;
  $showRightIconFixed?: boolean;
}>`
  color: ${({ $color }) => $color || c.BLUE_1};
  height: 100%;
  padding: 0 15px;
  outline: none;
  border-radius: ${({ $borderRadius }) => ($borderRadius ? `${$borderRadius}` : "5px")};
  background: ${({ $backgroundColor, $disabled }) =>
    $disabled ? c.GREY_2 : $backgroundColor || c.WHITE};
  border-top-left-radius: ${({ $showDropdown }) => ($showDropdown ? "0px" : "0")};
  border-bottom-left-radius: ${({ $showDropdown }) => ($showDropdown ? "0px" : "0")};
  width: 100%;
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "")};
  font-size: 1rem !important;
  &::placeholder {
    color: ${({ $placeHolderColor }) => $placeHolderColor || c.BLUE_1};
    opacity: ${({ $opacity }) => $opacity || "50%"};
    font-size: 1rem !important;
    font-weight: 400;
  }
  border: none;
  width: ${({ $showSearchIcon, $showRightIconFixed }) =>
    $showSearchIcon ? "calc(100% - 30px)" : $showRightIconFixed ? "calc(100% - 50px)" : "100%"};

  ${({ $disabled }) =>
    $disabled &&
    css`
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    `};
`;

const StyledInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
  position: relative;

  &.customHeight {
    height: 100%;
  }

  &.inputWrapperClass {
    margin-top: 2rem;
  }

  &.customInputWrapperClass {
    margin-top: 1.95rem;
  }

  &.customInputWrapperClassForLastName {
    margin-top: 0.5rem;
  }
  &.customInputWrapperClassParent {
    margin-top: 1rem;
  }
  &.gap_0 {
    gap: 0;
  }

  &.gap_12 {
    gap: 12px;
  }
  @media (max-width: 576px) {
    &.inputWrapperClass {
      margin-top: 1rem;
    }
    &.gap_0 {
      gap: 0;
    }
  }
`;

const ErrorMessage = styled.p<{
  $isMessageRelative?: boolean;
  $messageBoxHeight?: string;
  $top?: string;
}>`
  min-height: 1.2rem;
  color: ${c.RED};
  font-size: 0.875rem;
  top: ${({ $top }) => $top || "100%"};
  height: ${({ $messageBoxHeight }) => $messageBoxHeight};

  ${({ $isMessageRelative }) =>
    $isMessageRelative &&
    css`
      margin-top: -5px;
      position: relative;
      margin-bottom: 5px;
      top: 0;
      height: unset;
      min-height: 15px;
    `};
`;

const InputGroup = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;

  &.label_group {
    justify-content: space-between;
  }
`;

const CountryCodeSelect = styled.select<{
  $isBorder?: boolean;
  $isValid?: boolean;
}>`
  padding: 8px;
  border: ${({ $isBorder, $isValid }) =>
    $isValid
      ? `1px solid ${c.LIGHT_GREEN_5}`
      : $isBorder
        ? `1px solid ${c.GREY_11}`
        : "none"};
  border-radius: 5px 0 0 5px;
  background-color: ${c.WHITE};
  background: ${({ disabled }) => (disabled ? c.GREY_2 : c.WHITE)};
  height: 54px;
  border-right: 0;
  opacity: 1;
  font-size: 1rem;
  font-weight: 400;
  color: ${c.BLUE_1};
  appearance: ${({ disabled }) => (disabled ? "none" : "auto")};
  text-align: ${({ disabled }) => (disabled ? "right" : "center")};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;

const VerifyTag = styled.p`
  color: ${c.LIGHT_GREEN_5};
  font-size: 1rem;
`;

const RightIcon = styled.div<{
  $showRightIconFixed?: boolean;
  $postText?: boolean;
}>`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  height: 100%;
  width: ${({ $postText }) => ($postText ? "58px" : "35px")};
  justify-content: flex-start;
  cursor: pointer;

  ${({ $showRightIconFixed }) =>
    $showRightIconFixed &&
    css`
      border-left: 1px solid ${c.LIGHT_GREY_3};
      width: 51px;
      justify-content: center;
    `};
`;

const IconContainer = styled.span`
  cursor: pointer;
  display: flex;
`;

const InfoLabelWrapper = styled.div`
  display: flex;
  align-items: center;

  &.verifiedWrapper {
    width: 75%;
  }

  &.notVerifiedWrapper {
    width: 100%;
  }
`;

const PrefixWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`;

const PrefixInnerWrapper = styled.div`
  width: 30%;
  border-right: 1px solid ${c.GREY_11};
  display: flex;
  align-items: center;
  height: 100%;
`;

const PostfixInnerWrapper = styled.div`
  width: 30%;
  border-left: 1px solid ${c.GREY_11};
  display: flex;
  align-items: center;
  height: 100%;
`;

const PreFixContext = styled.span`
  color: ${c.BLUE_1};
  opacity: 0.5;
  padding-left: 15px;

  @media (max-width: 480px) {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 10px;
    padding: 0 10px;
  }
`;

const PostfixContext = styled.span`
  color: ${c.BLUE_1};
  opacity: 0.5;
  width: 100%;
  text-align: center;
`;

const TooltipInputAnchor = styled.span`
  display: inline-block;
  width: 100%;
`;

const SearchTriggerIcon = styled.span`
  display: inline-flex;
  align-items: center;
  line-height: 1;
  font-size: 20px;

  .anticon {
    font-size: 20px;
  }
`;

const PasswordToggleIcon = styled.span`
  display: inline-flex;
  line-height: 1;
  font-size: 18px;

  .anticon {
    font-size: 18px;
  }
`;

export const CustomInputStyles = {
  TooltipInputAnchor,
  SearchTriggerIcon,
  PasswordToggleIcon,
  StyledInput,
  StyledInputLabel,
  StyledInputWrapper,
  errorMessage: ErrorMessage,
  InputGroup,
  VerifyTag,
  CountryCodeSelect,
  RightIcon,
  InputWrapper,
  IconContainer,
  InfoLabelWrapper,
  PrefixWrapper,
  PrefixInnerWrapper,
  PreFixContext,
  PostfixContext,
  PostfixInnerWrapper,
};
