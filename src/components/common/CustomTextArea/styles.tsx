import { SITE_COLORS as c } from "@/utility/strings";
import styled from "styled-components";

const StyledTextAreaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 1rem;
  width: 100%;
  position: relative;

  textarea::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 8px;
  }

  textarea::-webkit-scrollbar-thumb {
    background-color: #aaa;
    border-radius: 8px;
    border: 2px solid transparent;
    background-clip: content-box;
  }

  textarea::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }
`;

const StyledTextAreaLabel = styled.label`
  font-size: 1rem;
  font-weight: 400;
  text-align: left;
  color: ${c.BLUE_1};
  white-space: nowrap;

  @media (max-width: 375px) {
    font-size: 14px;
  }
`;

const StyledTextArea = styled.textarea<{
  $placeHolderColor?: string;
  $opacity?: string;
}>`
  border: 1px solid ${c.GREY_11};
  color: ${c.BLUE_1};
  padding: 15px 20px;
  outline: none;
  border-radius: 5px;
  background: ${c.WHITE};
  resize: none;
  font-size: 1rem;
  white-space: pre-wrap;
  width: 100%;

  &::placeholder {
    color: ${({ $placeHolderColor }) => $placeHolderColor || c.BLUE_1};
    opacity: ${({ $opacity }) => $opacity || "50%"};
    font-size: 1rem;
    margin-top: 0 !important;
  }

  &.disabled {
    background-color: ${c.GREY_2};
  }

  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
`;

const ErrorMessage = styled.p`
  color: ${c.RED};
  font-size: 0.875rem;
  margin: 0;
`;

export const CustomTextAreaStyles = {
  StyledTextAreaWrapper,
  StyledTextAreaLabel,
  StyledTextArea,
  ErrorMessage,
};
