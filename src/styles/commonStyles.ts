import { css } from "styled-components";

export const ellipsisTextStyles = css`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  min-width: 0;
  display: block;

  @media (max-width: 767px) {
    white-space: normal;
    overflow: visible;
    text-overflow: unset;
  }
`;
