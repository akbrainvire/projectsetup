"use client";

import type { InfoCardProps } from "@/types/infoCard.types";
import { InfoCardStyles } from "./styles";

export default function InfoCard({ items, className }: InfoCardProps) {
  const renderRows = () => {
    const rows: React.ReactElement[] = [];

    for (let i = 0; i < items.length; i += 2) {
      const leftItem = items[i];
      const rightItem = items[i + 1];

      rows.push(
        <InfoCardStyles.Row key={`row-${i}`}>
          {leftItem && (
            <InfoCardStyles.Field>
              <InfoCardStyles.Label>{leftItem.label}</InfoCardStyles.Label>
              <InfoCardStyles.ValueRow>
                <InfoCardStyles.Value>{leftItem.value}</InfoCardStyles.Value>
                {!!leftItem.status?.text && (
                  <InfoCardStyles.StatusChip
                    $textColor={leftItem.status.textColor}
                    $bgColor={leftItem.status.bgColor}
                  >
                    {leftItem.status.text}
                  </InfoCardStyles.StatusChip>
                )}
              </InfoCardStyles.ValueRow>
            </InfoCardStyles.Field>
          )}
          {rightItem && (
            <InfoCardStyles.Field>
              <InfoCardStyles.Label>{rightItem.label}</InfoCardStyles.Label>
              <InfoCardStyles.ValueRow>
                <InfoCardStyles.Value>{rightItem.value}</InfoCardStyles.Value>
                {!!rightItem.status?.text && (
                  <InfoCardStyles.StatusChip
                    $textColor={rightItem.status.textColor}
                    $bgColor={rightItem.status.bgColor}
                  >
                    {rightItem.status.text}
                  </InfoCardStyles.StatusChip>
                )}
              </InfoCardStyles.ValueRow>
            </InfoCardStyles.Field>
          )}
        </InfoCardStyles.Row>
      );
    }

    return rows;
  };

  return (
    <InfoCardStyles.Card className={className}>
      {renderRows()}
    </InfoCardStyles.Card>
  );
}

export type { InfoCardProps } from "@/types/infoCard.types";
