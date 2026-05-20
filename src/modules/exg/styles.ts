import { Input, Typography } from "antd";
import { NotoSerifFont } from "@/styles/fonts";
import styled from "styled-components";
import { SITE_COLORS as c } from "@/utility/strings";

const ListSearch = styled(Input.Search)`
  min-width: min(100%, 240px);
  max-width: none;
  flex: 1;
`;

const ListSectionTitle = styled(Typography.Title).attrs({ level: 4 })`
  &.ant-typography {
    margin-top: 0;
    margin-bottom: 0;
    font-family: ${NotoSerifFont.style.fontFamily};
  }
`;

const DetailStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`;

const DetailSectionTitle = styled(Typography.Title).attrs({ level: 4 })`
  &.ant-typography {
    margin-top: 0;
    margin-bottom: 0;
    font-family: ${NotoSerifFont.style.fontFamily};
  }
`;

const TableCard = styled.div`
  .ant-table {
    font-size: 14px;
  }

  .ant-table-thead > tr > th {
    background: ${c.TITLE_BAR_BG} !important;
    color: ${c.WHITE} !important;
    font-weight: 600;
    border-bottom: none !important;
  }

  .ant-table-thead > tr > th::before {
    display: none !important;
  }

  .ant-table-tbody > tr > td {
    border-color: ${c.GREY_7};
  }

  .ant-table-tbody > tr:last-child > td {
    border-bottom: none;
  }
`;

export const ExgStyles = {
  ListSearch,
  ListSectionTitle,
  DetailStack,
  DetailSectionTitle,
  TableCard,
};
