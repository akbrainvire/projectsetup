"use client";

import { CheckCircleOutlined } from "@ant-design/icons";
import type React from "react";
import { CustomTableStyles as TableStyle } from "@/components/common/CustomTable/styles";

export type CustomTableColumn = {
  label?: React.ReactNode;
  key?: string;
  width?: string;
  colorKey?: boolean;
  fontWeight?: string;
  isIcon?: boolean;
};

export type CustomTableProps = {
  columns?: CustomTableColumn[];
  data?: Record<string, unknown>[];
  isHeader?: boolean;
  tableTitle?: string;
  customClassName?: string;
  tableClassName?: string;
};

export default function CustomTable({
  columns,
  data,
  isHeader,
  tableTitle,
  customClassName,
  tableClassName,
}: CustomTableProps) {
  return (
    <TableStyle.TableContainer className={tableClassName}>
      {tableTitle && data?.length ? (
        <TableStyle.TableTitle className={customClassName}>
          {tableTitle}
        </TableStyle.TableTitle>
      ) : null}
      <TableStyle.Table>
        {isHeader ? (
          <thead>
            <tr>
              {columns?.length
                ? columns.map((column, index) => (
                    <TableStyle.TableHeader
                      key={"Column_" + String(column?.label) + String(index)}
                    >
                      {column?.label}
                    </TableStyle.TableHeader>
                  ))
                : null}
            </tr>
          </thead>
        ) : null}
        <tbody>
          {data?.length
            ? data.map((rowData, index) => (
                <TableStyle.TableRow
                  key={"Row_" + String(rowData?.id ?? index)}
                  $even={index % 2 === 0}
                >
                  {columns?.length
                    ? columns.map((column, columnIndex) => (
                        <TableStyle.TableData
                          key={
                            "Cell_" +
                            String(rowData?.id ?? index) +
                            "_" +
                            String(column?.key ?? columnIndex)
                          }
                          $width={column?.width}
                          $colorKey={column?.colorKey}
                          $fontWeight={column?.fontWeight}
                        >
                          {column?.isIcon ? (
                            <TableStyle.SuccessStatusIcon>
                              <CheckCircleOutlined />
                            </TableStyle.SuccessStatusIcon>
                          ) : column?.key ? (
                            (rowData[column.key] as React.ReactNode) ?? null
                          ) : null}
                        </TableStyle.TableData>
                      ))
                    : null}
                </TableStyle.TableRow>
              ))
            : null}
        </tbody>
      </TableStyle.Table>
    </TableStyle.TableContainer>
  );
}
