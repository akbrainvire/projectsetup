import styled, { css } from "styled-components";
import {
  DOCTOR_APPOINTMENT_BOOKING_COLORS,
  DOCTOR_APPOINTMENT_BOOKING_DEFAULTS,
} from "@/constants/doctorAppointmentBooking";
import { NotoSansFont } from "@/styles/fonts";

const sans = NotoSansFont.style.fontFamily;
const colors = DOCTOR_APPOINTMENT_BOOKING_COLORS;
const defaults = DOCTOR_APPOINTMENT_BOOKING_DEFAULTS;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${defaults.SECTION_GAP};
  width: 100%;
  min-width: 0;
  font-family: ${sans};
`;

const CalendarCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${defaults.CARD_PADDING};
  border-radius: ${defaults.BORDER_RADIUS};
  background: ${colors.CARD_BACKGROUND};
  border: 1px solid ${colors.BORDER};
  box-sizing: border-box;
  font-family: ${sans};
`;

const CalendarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 2px;
  font-family: ${sans};
`;

const CalendarMonthLabel = styled.span`
  color: ${colors.TEXT_PRIMARY};
  font-size: 16px;
  font-weight: 600;
  line-height: 1.2;
`;

const CalendarNavGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const CalendarNavButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 0;
  border: 1px solid ${colors.BORDER};
  border-radius: 50%;
  background: ${colors.CARD_BACKGROUND};
  color: ${colors.TEXT_PRIMARY};
  cursor: pointer;
  font-family: ${sans};
  box-shadow: 0 1px 3px rgba(15, 23, 42, 0.08);

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background: ${colors.PANEL_BACKGROUND};
  }
`;

const CalendarSurface = styled.div`
  font-family: ${sans};

  .doctor-appointment-booking-calendar,
  .doctor-appointment-booking-calendar * {
    font-family: ${sans} !important;
  }

  .doctor-appointment-booking-calendar {
    width: 100%;
    background: transparent;
    border: none;
  }

  .doctor-appointment-booking-calendar.ant-picker-calendar-mini {
    background: transparent;
  }

  .doctor-appointment-booking-calendar .ant-picker-calendar-header {
    display: none;
  }

  .doctor-appointment-booking-calendar .ant-picker-panel,
  .doctor-appointment-booking-calendar .ant-picker-panel-container {
    border: none;
    background: transparent;
    box-shadow: none;
  }

  .doctor-appointment-booking-calendar .ant-picker-body {
    padding: 0;
  }

  .doctor-appointment-booking-calendar .ant-picker-content {
    width: 100%;
  }

  .doctor-appointment-booking-calendar .ant-picker-content th {
    color: ${colors.TEXT_MUTED};
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
    padding-bottom: 8px;
    text-align: center;
  }

  .doctor-appointment-booking-calendar .ant-picker-cell {
    padding: 2px 0;
  }

  .doctor-appointment-booking-calendar .ant-picker-cell::before {
    display: none;
  }

  .doctor-appointment-booking-calendar .ant-picker-cell-inner {
    display: none;
  }
`;

const cellStateStyles = {
  available: css`
    border: 1px solid ${colors.AVAILABLE_BORDER};
    color: ${colors.PRIMARY};
    background: ${colors.CARD_BACKGROUND};
  `,
  selected: css`
    border: 1px solid ${colors.PRIMARY};
    color: ${colors.CARD_BACKGROUND};
    background: ${colors.PRIMARY};
    font-weight: 600;
  `,
  default: css`
    border: 1px solid transparent;
    color: inherit;
    background: transparent;
  `,
};

const CalendarDayButton = styled.button<{
  $available: boolean;
  $selected: boolean;
  $disabled: boolean;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${defaults.CALENDAR_CELL_SIZE};
  height: ${defaults.CALENDAR_CELL_SIZE};
  margin: 0 auto;
  padding: 0;
  border-radius: 8px;
  font-family: ${sans};
  font-size: 13px;
  font-weight: 500;
  line-height: 1;
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
  opacity: ${({ $disabled }) => ($disabled ? 0.45 : 1)};

  ${({ $selected, $available, $disabled }) => {
    if ($disabled) {
      return cellStateStyles.default;
    }
    if ($selected) {
      return cellStateStyles.selected;
    }
    if ($available) {
      return cellStateStyles.available;
    }
    return cellStateStyles.default;
  }}
`;

const SlotsSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-width: 0;
`;

const SlotsTitle = styled.h3`
  margin: 0;
  color: ${colors.TEXT_PRIMARY};
  font-size: 16px;
  font-weight: 600;
  line-height: 1.2;
`;

const PeriodBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const PeriodTitle = styled.h4`
  margin: 0;
  color: ${colors.TEXT_MUTED};
  font-size: 13px;
  font-weight: 500;
  line-height: 1.2;
`;

const SlotGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${defaults.SLOT_GAP};
`;

const SlotButton = styled.button<{ $selected: boolean }>`
  min-width: 72px;
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid
    ${({ $selected }) => ($selected ? colors.PRIMARY : colors.SLOT_BORDER)};
  background: ${({ $selected }) => ($selected ? colors.PRIMARY : colors.CARD_BACKGROUND)};
  color: ${({ $selected }) => ($selected ? colors.CARD_BACKGROUND : colors.TEXT_PRIMARY)};
  font-family: ${sans};
  font-size: 12px;
  font-weight: 500;
  line-height: 1.2;
  cursor: pointer;
  transition: background 0.15s ease, border-color 0.15s ease, color 0.15s ease;

  &:hover {
    border-color: ${colors.PRIMARY};
  }

  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
`;

const EmptyMessage = styled.p`
  margin: 0;
  color: ${colors.TEXT_MUTED};
  font-size: 13px;
  line-height: 1.4;
`;

const FooterCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: ${defaults.CARD_PADDING};
  border-radius: ${defaults.BORDER_RADIUS};
  background: ${colors.CARD_BACKGROUND};
  border: 1px solid ${colors.BORDER};
  box-sizing: border-box;
`;

const FooterSummary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
`;

const FooterSummaryLabel = styled.span`
  color: ${colors.TEXT_MUTED};
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.04em;
  line-height: 1.2;
`;

const FooterSummaryValue = styled.span`
  color: ${colors.TEXT_PRIMARY};
  font-size: 14px;
  font-weight: 600;
  line-height: 1.3;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const FooterAction = styled.div`
  flex-shrink: 0;
`;

export const DoctorAppointmentBookingStyles = {
  Container,
  CalendarCard,
  CalendarHeader,
  CalendarMonthLabel,
  CalendarNavGroup,
  CalendarNavButton,
  CalendarSurface,
  CalendarDayButton,
  SlotsSection,
  SlotsTitle,
  PeriodBlock,
  PeriodTitle,
  SlotGrid,
  SlotButton,
  EmptyMessage,
  FooterCard,
  FooterSummary,
  FooterSummaryLabel,
  FooterSummaryValue,
  FooterAction,
};
