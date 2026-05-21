import type { AppointmentTimeSlot } from "@/components/doctor/DoctorAppointmentBooking/types";
import { DOCTOR_APPOINTMENT_BOOKING_SLOT_PERIODS } from "@/constants/doctorAppointmentBooking";

const MORNING_SLOTS: AppointmentTimeSlot[] = [
  {
    id: "08-15",
    label: "8:15 AM",
    value: "08:15",
    period: DOCTOR_APPOINTMENT_BOOKING_SLOT_PERIODS.MORNING,
  },
  {
    id: "09-15",
    label: "9:15 AM",
    value: "09:15",
    period: DOCTOR_APPOINTMENT_BOOKING_SLOT_PERIODS.MORNING,
  },
  {
    id: "10-15",
    label: "10:15 AM",
    value: "10:15",
    period: DOCTOR_APPOINTMENT_BOOKING_SLOT_PERIODS.MORNING,
  },
  {
    id: "11-15",
    label: "11:15 AM",
    value: "11:15",
    period: DOCTOR_APPOINTMENT_BOOKING_SLOT_PERIODS.MORNING,
  },
  {
    id: "12-15",
    label: "12:15 PM",
    value: "12:15",
    period: DOCTOR_APPOINTMENT_BOOKING_SLOT_PERIODS.MORNING,
  },
];

const AFTERNOON_SLOTS: AppointmentTimeSlot[] = [
  {
    id: "13-15",
    label: "1:15 PM",
    value: "13:15",
    period: DOCTOR_APPOINTMENT_BOOKING_SLOT_PERIODS.AFTERNOON,
  },
  {
    id: "14-15",
    label: "2:15 PM",
    value: "14:15",
    period: DOCTOR_APPOINTMENT_BOOKING_SLOT_PERIODS.AFTERNOON,
  },
  {
    id: "15-15",
    label: "3:15 PM",
    value: "15:15",
    period: DOCTOR_APPOINTMENT_BOOKING_SLOT_PERIODS.AFTERNOON,
  },
  {
    id: "16-15",
    label: "4:15 PM",
    value: "16:15",
    period: DOCTOR_APPOINTMENT_BOOKING_SLOT_PERIODS.AFTERNOON,
  },
  {
    id: "17-15",
    label: "5:15 PM",
    value: "17:15",
    period: DOCTOR_APPOINTMENT_BOOKING_SLOT_PERIODS.AFTERNOON,
  },
  {
    id: "18-15",
    label: "6:15 PM",
    value: "18:15",
    period: DOCTOR_APPOINTMENT_BOOKING_SLOT_PERIODS.AFTERNOON,
  },
];

export const HOME_DOCTOR_BOOKING_AVAILABILITY: Record<string, AppointmentTimeSlot[]> = {
  "2026-05-11": [...MORNING_SLOTS, ...AFTERNOON_SLOTS],
  "2026-05-13": [...MORNING_SLOTS, ...AFTERNOON_SLOTS],
  "2026-05-14": [...MORNING_SLOTS, ...AFTERNOON_SLOTS],
  "2026-05-19": [...MORNING_SLOTS, ...AFTERNOON_SLOTS],
  "2026-05-20": [...MORNING_SLOTS, ...AFTERNOON_SLOTS],
  "2026-05-22": [...MORNING_SLOTS, ...AFTERNOON_SLOTS],
  "2026-05-27": [...MORNING_SLOTS, ...AFTERNOON_SLOTS],
};

export const HOME_DOCTOR_BOOKING_AVAILABLE_DATES = Object.keys(
  HOME_DOCTOR_BOOKING_AVAILABILITY,
);
