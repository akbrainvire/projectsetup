import { NotoSansFont, NotoSerifFont } from "@/styles/fonts";
import { SITE_COLORS as c } from "@/utility/strings";
import styled from "styled-components";

const TableContainer = styled.div`
  width: 100%;

  @media (max-width: 576px) {
    padding: 0 8px;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
`;

const TableTitle = styled.h3`
  font-family: ${NotoSerifFont.style.fontFamily};
  font-size: 1.8rem;
  font-weight: bold;
  color: ${c.BLUE_1};
  margin: 20px 0;
  text-transform: capitalize;

  &.custom_font {
    font-size: 1rem;
    text-transform: uppercase;
    font-weight: 700;
  }

  @media (max-width: 576px) {
    font-size: 1.4rem;
    margin: 10px 0;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-family: ${NotoSansFont.style.fontFamily};
  border: 1px solid ${c.GREY_7};

  @media (max-width: 576px) {
    min-width: 600px;
  }
`;

const TableHeader = styled.th`
  text-align: left;
  padding: 10px;
  background-color: #f5f5f5;
  font-size: 1.3rem;
  color: #001f54;
`;

const TableRow = styled.tr<{ $even: boolean }>`
  background-color: ${({ $even }) => ($even ? c.WHITE : c.GREY_7)};
  height: 54px;
`;

const TableData = styled.td<{
  $width?: string;
  $colorKey?: boolean;
  $fontWeight?: string;
}>`
  word-break: break-word;
  padding: 10px 15px;
  vertical-align: middle;
  border-bottom: 1px solid ${c.GREY_7};
  font-size: 1rem;
  font-weight: ${({ $fontWeight }) => $fontWeight};
  width: ${({ $width }) => $width};
  color: ${({ $colorKey }) => ($colorKey ? c.BLACK : c.BLUE_1)};
  border-left: 1px solid rgba(0, 40, 82, 0.05);
  &:nth-child(2),
  &:nth-child(3),
  &:nth-child(4),
  &:nth-child(5) {
    background-color: rgba(242, 242, 242, 0.5);
  }
`;

const SuccessStatusIcon = styled.span`
  display: inline-flex;
  line-height: 1;
  color: ${c.LIGHT_GREEN_5};
  font-size: 16px;

  .anticon {
    color: ${c.LIGHT_GREEN_5};
    font-size: 16px;
  }
`;

export const CustomTableStyles = {
  TableContainer,
  TableTitle,
  Table,
  TableHeader,
  TableRow,
  TableData,
  SuccessStatusIcon,
};
