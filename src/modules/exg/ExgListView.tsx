"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Button, Space, Table, Typography } from "antd";
import { FilterOutlined, PlusOutlined, ReloadOutlined } from "@ant-design/icons";
import type { ColumnsType } from "antd/es/table";
import { useTranslation } from "react-i18next";
import { ListingLayout } from "@/components/layouts/ListingLayout";
import { ROUTES, TRANSLATION_KEYS } from "@/utility/strings";
import { EXG_TABLE_DATA, type ExgRow } from "@/modules/exg/exgData";
import { ExgStyles } from "@/modules/exg/styles";

export function ExgListView() {
  const { t } = useTranslation("common");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) {
      return EXG_TABLE_DATA;
    }
    return EXG_TABLE_DATA.filter((row: ExgRow) => {
      const hay = `${row.name} ${row.email} ${row.role}`.toLowerCase();
      return hay.includes(q);
    });
  }, [query]);

  const columns: ColumnsType<ExgRow> = useMemo(
    () => [
      { title: t(TRANSLATION_KEYS.EXG.COL_NAME), dataIndex: "name", key: "name" },
      { title: t(TRANSLATION_KEYS.EXG.COL_EMAIL), dataIndex: "email", key: "email" },
      { title: t(TRANSLATION_KEYS.EXG.COL_ROLE), dataIndex: "role", key: "role" },
      {
        title: "",
        key: "action",
        width: 120,
        render: (_: unknown, record: ExgRow) => (
          <Link href={`${ROUTES.EXG}/${record.id}`}>
            <Button type="link">{t(TRANSLATION_KEYS.EXG.ACTION_VIEW)}</Button>
          </Link>
        ),
      },
    ],
    [t],
  );

  return (
    <ListingLayout
      titleBar={<span>{t(TRANSLATION_KEYS.EXG.TITLE_BAR)}</span>}
      search={
        <ExgStyles.ListSearch
          allowClear
          placeholder={t(TRANSLATION_KEYS.EXG.SEARCH_PLACEHOLDER)}
          onChange={(e) => setQuery(e.target.value)}
        />
      }
      toolbarActions={
        <Space wrap>
          <Button type="primary" icon={<ReloadOutlined />} onClick={() => setQuery("")}>
            {t(TRANSLATION_KEYS.EXG.LIST_RESET)}
          </Button>
          <Button type="primary" icon={<FilterOutlined />} aria-label={t(TRANSLATION_KEYS.EXG.LIST_FILTER)} />
          <Button type="primary" icon={<PlusOutlined />}>
            {t(TRANSLATION_KEYS.EXG.LIST_ADD)}
          </Button>
        </Space>
      }
      header={
        <Space direction="vertical" size={4}>
          <ExgStyles.ListSectionTitle>{t(TRANSLATION_KEYS.EXG.LIST_TITLE)}</ExgStyles.ListSectionTitle>
          <Typography.Text type="secondary">{t(TRANSLATION_KEYS.EXG.HEADER_SUBTITLE)}</Typography.Text>
        </Space>
      }
    >
      <ExgStyles.TableCard>
        <Table<ExgRow>
          columns={columns}
          dataSource={filtered}
          rowKey={(row: ExgRow) => row.id}
          pagination={{ pageSize: 8, showSizeChanger: true, pageSizeOptions: [5, 8, 20, 50] }}
        />
      </ExgStyles.TableCard>
    </ListingLayout>
  );
}
