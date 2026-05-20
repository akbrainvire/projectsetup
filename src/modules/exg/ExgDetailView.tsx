"use client";

import Link from "next/link";
import { useMemo } from "react";
import { Button, Descriptions, Space, Typography } from "antd";
import { useTranslation } from "react-i18next";
import { DetailsLayout } from "@/components/layouts/DetailsLayout";
import { ROUTES, TRANSLATION_KEYS } from "@/utility/strings";
import { getExgRowById } from "@/modules/exg/exgData";
import { ExgStyles } from "@/modules/exg/styles";

export function ExgDetailView({ id }: { id: string }) {
  const { t } = useTranslation("common");
  const row = useMemo(() => getExgRowById(id), [id]);

  return (
    <DetailsLayout titleBar={<span>{t(TRANSLATION_KEYS.EXG.DETAIL_TITLE_BAR)}</span>}>
      <ExgStyles.DetailStack>
        <Space>
          <Link href={ROUTES.EXG}>
            <Button type="default">{t(TRANSLATION_KEYS.EXG.DETAIL_BACK)}</Button>
          </Link>
        </Space>
        {row ? (
          <>
            <ExgStyles.DetailSectionTitle>{t(TRANSLATION_KEYS.EXG.DETAIL_TITLE)}</ExgStyles.DetailSectionTitle>
            <Descriptions bordered column={1} size="small">
              <Descriptions.Item label={t(TRANSLATION_KEYS.EXG.FORM_NAME)}>{row.name}</Descriptions.Item>
              <Descriptions.Item label={t(TRANSLATION_KEYS.EXG.FORM_EMAIL)}>{row.email}</Descriptions.Item>
              <Descriptions.Item label={t(TRANSLATION_KEYS.EXG.FORM_ROLE)}>{row.role}</Descriptions.Item>
            </Descriptions>
          </>
        ) : (
          <Typography.Paragraph type="warning">{t(TRANSLATION_KEYS.EXG.DETAIL_MISSING)}</Typography.Paragraph>
        )}
        <Typography.Text type="secondary">{t(TRANSLATION_KEYS.EXG.DETAIL_FOOTER)}</Typography.Text>
      </ExgStyles.DetailStack>
    </DetailsLayout>
  );
}
