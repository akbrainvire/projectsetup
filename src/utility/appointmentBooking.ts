import dayjs, { type Dayjs } from "dayjs";
import {
  DOCTOR_APPOINTMENT_BOOKING_DATE_FORMAT,
  DOCTOR_APPOINTMENT_BOOKING_SELECTION_DATE_FORMAT,
  DOCTOR_APPOINTMENT_BOOKING_SLOT_PERIODS,
  DOCTOR_APPOINTMENT_BOOKING_SLOT_TIME_FORMAT,
} from "@/constants/doctorAppointmentBooking";
import type {
  AppointmentSlotPeriod,
  AppointmentTimeSlot,
} from "@/components/doctor/DoctorAppointmentBooking/types";

export const toAppointmentDateKey = (date: Dayjs | string | Date): string =>
  dayjs(date).format(DOCTOR_APPOINTMENT_BOOKING_DATE_FORMAT);

export const isAppointmentDateBeforeToday = (date: Dayjs | string | Date): boolean =>
  dayjs(date).startOf("day").isBefore(dayjs().startOf("day"));

export const buildAvailableDatesSet = (availableDates: string[]): Set<string> =>
  new Set(availableDates.map((dateKey: string) => toAppointmentDateKey(dateKey)));

export const isAppointmentDateSelectable = (
  date: Dayjs,
  availableDatesSet: Set<string>,
): boolean => {
  if (isAppointmentDateBeforeToday(date)) {
    return false;
  }
  const dateKey = toAppointmentDateKey(date);
  return availableDatesSet.has(dateKey);
};

export const resolveAppointmentSlotPeriod = (slotValue: string): AppointmentSlotPeriod => {
  const hour = Number.parseInt(slotValue.split(":")[0] ?? "0", 10);
  if (hour < 12) {
    return DOCTOR_APPOINTMENT_BOOKING_SLOT_PERIODS.MORNING;
  }
  if (hour < 17) {
    return DOCTOR_APPOINTMENT_BOOKING_SLOT_PERIODS.AFTERNOON;
  }
  return DOCTOR_APPOINTMENT_BOOKING_SLOT_PERIODS.EVENING;
};

export const isAppointmentSlotInPast = (
  slotValue: string,
  dateKey: string,
  now: Dayjs = dayjs(),
): boolean => {
  if (toAppointmentDateKey(now) !== toAppointmentDateKey(dateKey)) {
    return false;
  }
  const slotDateTime = dayjs(
    `${toAppointmentDateKey(dateKey)} ${slotValue}`,
    `${DOCTOR_APPOINTMENT_BOOKING_DATE_FORMAT} ${DOCTOR_APPOINTMENT_BOOKING_SLOT_TIME_FORMAT}`,
  );
  return slotDateTime.isBefore(now);
};

export const filterBookableAppointmentSlots = (
  slots: AppointmentTimeSlot[],
  dateKey: string | null,
): AppointmentTimeSlot[] => {
  if (!dateKey) {
    return [];
  }
  return slots.filter(
    (slot: AppointmentTimeSlot) => !isAppointmentSlotInPast(slot.value, dateKey),
  );
};

export const groupAppointmentSlotsByPeriod = (
  slots: AppointmentTimeSlot[],
): Record<AppointmentSlotPeriod, AppointmentTimeSlot[]> => {
  const grouped: Record<AppointmentSlotPeriod, AppointmentTimeSlot[]> = {
    [DOCTOR_APPOINTMENT_BOOKING_SLOT_PERIODS.MORNING]: [],
    [DOCTOR_APPOINTMENT_BOOKING_SLOT_PERIODS.AFTERNOON]: [],
    [DOCTOR_APPOINTMENT_BOOKING_SLOT_PERIODS.EVENING]: [],
  };

  slots.forEach((slot: AppointmentTimeSlot) => {
    const period = slot.period ?? resolveAppointmentSlotPeriod(slot.value);
    grouped[period]?.push(slot);
  });

  return grouped;
};

export const formatAppointmentSelectionSummary = (
  dateKey: string | null,
  slotLabel: string | null,
): string => {
  if (!dateKey || !slotLabel) {
    return "";
  }
  const formattedDate = dayjs(dateKey).format(DOCTOR_APPOINTMENT_BOOKING_SELECTION_DATE_FORMAT);
  return `${formattedDate}, ${slotLabel}`;
};

export const findFirstSelectableAppointmentDate = (
  availableDates: string[],
): string | null => {
  const sortedDates = [...availableDates]
    .map((dateKey: string) => toAppointmentDateKey(dateKey))
    .filter((dateKey: string) => !isAppointmentDateBeforeToday(dateKey))
    .sort((left: string, right: string) => dayjs(left).valueOf() - dayjs(right).valueOf());

  return sortedDates[0] ?? null;
};
