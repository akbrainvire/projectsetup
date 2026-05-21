"use client";

import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Calendar, Spin } from "antd";
import dayjs, { type Dayjs } from "dayjs";
import updateLocale from "dayjs/plugin/updateLocale";
import "dayjs/locale/en";
import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import CustomButton from "@/components/common/CustomButton";
import { BUTTON_VARIANTS } from "@/constants/button";
import {
  DOCTOR_APPOINTMENT_BOOKING_PERIOD_ORDER,
  DOCTOR_APPOINTMENT_BOOKING_SLOT_PERIODS,
  DOCTOR_APPOINTMENT_BOOKING_TRANSLATION_KEYS,
} from "@/constants/doctorAppointmentBooking";
import type {
  AppointmentSlotPeriod,
  AppointmentTimeSlot,
  DoctorAppointmentBookingLabels,
  DoctorAppointmentBookingProps,
} from "./types";
import {
  buildAvailableDatesSet,
  filterBookableAppointmentSlots,
  formatAppointmentSelectionSummary,
  groupAppointmentSlotsByPeriod,
  isAppointmentDateBeforeToday,
  isAppointmentDateSelectable,
  toAppointmentDateKey,
} from "@/utility/appointmentBooking";
import { SITE_COLORS } from "@/utility/strings";
import { DoctorAppointmentBookingStyles } from "./styles";

const PERIOD_LABEL_KEYS: Record<
  AppointmentSlotPeriod,
  keyof Pick<
    DoctorAppointmentBookingLabels,
    "morningTitle" | "afternoonTitle" | "eveningTitle"
  >
> = {
  [DOCTOR_APPOINTMENT_BOOKING_SLOT_PERIODS.MORNING]: "morningTitle",
  [DOCTOR_APPOINTMENT_BOOKING_SLOT_PERIODS.AFTERNOON]: "afternoonTitle",
  [DOCTOR_APPOINTMENT_BOOKING_SLOT_PERIODS.EVENING]: "eveningTitle",
};

dayjs.extend(updateLocale);
dayjs.updateLocale("en", { weekStart: 1 });

export default function DoctorAppointmentBooking({
  availableDates,
  slots,
  selectedDate,
  selectedSlotId,
  onDateChange,
  onSlotChange,
  onBookAppointment,
  isLoading = false,
  isBookingDisabled = false,
  labels,
  className,
  calendarValue,
  onCalendarPanelChange,
}: DoctorAppointmentBookingProps) {
  const { t } = useTranslation("common");

  const defaultLabels: DoctorAppointmentBookingLabels = {
    availableSlotsTitle: t(DOCTOR_APPOINTMENT_BOOKING_TRANSLATION_KEYS.AVAILABLE_SLOTS_TITLE),
    morningTitle: t(DOCTOR_APPOINTMENT_BOOKING_TRANSLATION_KEYS.MORNING_TITLE),
    afternoonTitle: t(DOCTOR_APPOINTMENT_BOOKING_TRANSLATION_KEYS.AFTERNOON_TITLE),
    eveningTitle: t(DOCTOR_APPOINTMENT_BOOKING_TRANSLATION_KEYS.EVENING_TITLE),
    selectedTimeLabel: t(DOCTOR_APPOINTMENT_BOOKING_TRANSLATION_KEYS.SELECTED_TIME_LABEL),
    bookAppointmentLabel: t(DOCTOR_APPOINTMENT_BOOKING_TRANSLATION_KEYS.BOOK_APPOINTMENT_LABEL),
    noSlotsMessage: t(DOCTOR_APPOINTMENT_BOOKING_TRANSLATION_KEYS.NO_SLOTS_MESSAGE),
    selectDateMessage: t(DOCTOR_APPOINTMENT_BOOKING_TRANSLATION_KEYS.SELECT_DATE_MESSAGE),
  };

  const resolvedLabels = { ...defaultLabels, ...labels };
  const previousMonthLabel = t(DOCTOR_APPOINTMENT_BOOKING_TRANSLATION_KEYS.PREVIOUS_MONTH);
  const nextMonthLabel = t(DOCTOR_APPOINTMENT_BOOKING_TRANSLATION_KEYS.NEXT_MONTH);
  const emptySelectionLabel = t(DOCTOR_APPOINTMENT_BOOKING_TRANSLATION_KEYS.EMPTY_SELECTION);

  const availableDatesSet = useMemo(
    () => buildAvailableDatesSet(availableDates),
    [availableDates],
  );

  const [panelDate, setPanelDate] = useState<Dayjs>(() => {
    if (calendarValue) {
      return dayjs(calendarValue);
    }
    if (selectedDate) {
      return dayjs(selectedDate);
    }
    return dayjs();
  });

  const activePanelDate = calendarValue ? dayjs(calendarValue) : panelDate;
  const selectedDay = selectedDate ? dayjs(selectedDate) : null;

  useEffect(() => {
    if (selectedDate) {
      setPanelDate(dayjs(selectedDate));
    }
  }, [selectedDate]);

  const bookableSlots = useMemo(
    () => filterBookableAppointmentSlots(slots, selectedDate),
    [slots, selectedDate],
  );

  const groupedSlots = useMemo(
    () => groupAppointmentSlotsByPeriod(bookableSlots),
    [bookableSlots],
  );

  const selectedSlot = bookableSlots.find(
    (slot: AppointmentTimeSlot) => slot.id === selectedSlotId,
  );

  const selectionSummary = formatAppointmentSelectionSummary(
    selectedDate,
    selectedSlot?.label ?? null,
  );

  const isBookDisabled =
    isBookingDisabled || !selectedDate || !selectedSlotId || isLoading;

  const handlePanelChange = (nextPanelDate: Dayjs) => {
    setPanelDate(nextPanelDate);
    onCalendarPanelChange?.(toAppointmentDateKey(nextPanelDate));
  };

  const handlePreviousMonth = () => {
    handlePanelChange(activePanelDate.subtract(1, "month"));
  };

  const handleNextMonth = () => {
    handlePanelChange(activePanelDate.add(1, "month"));
  };

  const handleDateSelect = (date: Dayjs) => {
    const dateKey = toAppointmentDateKey(date);
    if (!isAppointmentDateSelectable(date, availableDatesSet)) {
      return;
    }
    onDateChange(dateKey);
  };

  const handleSlotClick = (slotId: string) => {
    onSlotChange(slotId);
  };

  const disabledDate = (date: Dayjs) =>
    !isAppointmentDateSelectable(date, availableDatesSet);

  const renderCalendarCell = (date: Dayjs) => {
    const dateKey = toAppointmentDateKey(date);
    const isCurrentMonth = date.month() === activePanelDate.month();
    const isSelectable = isAppointmentDateSelectable(date, availableDatesSet);
    const isSelected = selectedDay ? selectedDay.isSame(date, "day") : false;
    const isPast = isAppointmentDateBeforeToday(date);
    const isAvailable = availableDatesSet.has(dateKey) && !isPast;

    if (!isCurrentMonth) {
      return <span aria-hidden />;
    }

    return (
      <DoctorAppointmentBookingStyles.CalendarDayButton
        type="button"
        $available={isAvailable && !isSelected}
        $selected={isSelected}
        $disabled={!isSelectable}
        disabled={!isSelectable}
        onClick={() => handleDateSelect(date)}
        aria-label={dateKey}
        aria-pressed={isSelected}
      >
        {date.date()}
      </DoctorAppointmentBookingStyles.CalendarDayButton>
    );
  };

  const renderPeriodSlots = () =>
    DOCTOR_APPOINTMENT_BOOKING_PERIOD_ORDER.map((period: AppointmentSlotPeriod) => {
      const periodSlots = groupedSlots[period] ?? [];
      if (periodSlots.length === 0) {
        return null;
      }

      const periodLabelKey = PERIOD_LABEL_KEYS[period];
      const periodTitle =
        periodLabelKey === "morningTitle"
          ? resolvedLabels.morningTitle
          : periodLabelKey === "afternoonTitle"
            ? resolvedLabels.afternoonTitle
            : resolvedLabels.eveningTitle;

      return (
        <DoctorAppointmentBookingStyles.PeriodBlock key={period}>
          <DoctorAppointmentBookingStyles.PeriodTitle>
            {periodTitle}
          </DoctorAppointmentBookingStyles.PeriodTitle>
          <DoctorAppointmentBookingStyles.SlotGrid>
            {periodSlots.map((slot: AppointmentTimeSlot) => (
              <DoctorAppointmentBookingStyles.SlotButton
                key={slot.id}
                type="button"
                $selected={slot.id === selectedSlotId}
                onClick={() => handleSlotClick(slot.id)}
                aria-pressed={slot.id === selectedSlotId}
              >
                {slot.label}
              </DoctorAppointmentBookingStyles.SlotButton>
            ))}
          </DoctorAppointmentBookingStyles.SlotGrid>
        </DoctorAppointmentBookingStyles.PeriodBlock>
      );
    });

  const slotsContent = !selectedDate ? (
    <DoctorAppointmentBookingStyles.EmptyMessage>
      {resolvedLabels.selectDateMessage}
    </DoctorAppointmentBookingStyles.EmptyMessage>
  ) : isLoading ? (
    <Spin />
  ) : bookableSlots.length === 0 ? (
    <DoctorAppointmentBookingStyles.EmptyMessage>
      {resolvedLabels.noSlotsMessage}
    </DoctorAppointmentBookingStyles.EmptyMessage>
  ) : (
    renderPeriodSlots()
  );

  return (
    <DoctorAppointmentBookingStyles.Container className={className}>
      <DoctorAppointmentBookingStyles.CalendarHeader>
        <DoctorAppointmentBookingStyles.CalendarMonthLabel>
          {activePanelDate.format("MMMM YYYY")}
        </DoctorAppointmentBookingStyles.CalendarMonthLabel>
        <DoctorAppointmentBookingStyles.CalendarNavGroup>
          <DoctorAppointmentBookingStyles.CalendarNavButton
            type="button"
            onClick={handlePreviousMonth}
            aria-label={previousMonthLabel}
          >
            <LeftOutlined />
          </DoctorAppointmentBookingStyles.CalendarNavButton>
          <DoctorAppointmentBookingStyles.CalendarNavButton
            type="button"
            onClick={handleNextMonth}
            aria-label={nextMonthLabel}
          >
            <RightOutlined />
          </DoctorAppointmentBookingStyles.CalendarNavButton>
        </DoctorAppointmentBookingStyles.CalendarNavGroup>
      </DoctorAppointmentBookingStyles.CalendarHeader>

      <DoctorAppointmentBookingStyles.CalendarCard>
        <DoctorAppointmentBookingStyles.CalendarSurface>
          <Calendar
            className="doctor-appointment-booking-calendar"
            fullscreen={false}
            value={activePanelDate}
            disabledDate={disabledDate}
            fullCellRender={(date: Dayjs) => renderCalendarCell(date)}
            onSelect={handleDateSelect}
          />
        </DoctorAppointmentBookingStyles.CalendarSurface>
      </DoctorAppointmentBookingStyles.CalendarCard>

      <DoctorAppointmentBookingStyles.SlotsSection>
        <DoctorAppointmentBookingStyles.SlotsTitle>
          {resolvedLabels.availableSlotsTitle}
        </DoctorAppointmentBookingStyles.SlotsTitle>
        {slotsContent}
      </DoctorAppointmentBookingStyles.SlotsSection>

      <DoctorAppointmentBookingStyles.FooterCard>
        <DoctorAppointmentBookingStyles.FooterSummary>
          <DoctorAppointmentBookingStyles.FooterSummaryLabel>
            {resolvedLabels.selectedTimeLabel}
          </DoctorAppointmentBookingStyles.FooterSummaryLabel>
          <DoctorAppointmentBookingStyles.FooterSummaryValue>
            {selectionSummary || emptySelectionLabel}
          </DoctorAppointmentBookingStyles.FooterSummaryValue>
        </DoctorAppointmentBookingStyles.FooterSummary>
        <DoctorAppointmentBookingStyles.FooterAction>
          <CustomButton
            text={resolvedLabels.bookAppointmentLabel}
            appearance={{
              variant: BUTTON_VARIANTS.CUSTOM,
              backgroundColor: SITE_COLORS.NAVY_DARK,
              color: SITE_COLORS.WHITE,
              border: "none",
              borderRadius: "10px",
              padding: "10px 16px",
              fontSize: "13px",
              fontWeight: "600",
            }}
            state={{ disabled: isBookDisabled, loading: isLoading }}
            events={{ onClick: onBookAppointment }}
          />
        </DoctorAppointmentBookingStyles.FooterAction>
      </DoctorAppointmentBookingStyles.FooterCard>
    </DoctorAppointmentBookingStyles.Container>
  );
}
