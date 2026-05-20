export type AppointmentSlotPeriod = "morning" | "afternoon" | "evening";

export interface AppointmentTimeSlot {
  id: string;
  label: string;
  value: string;
  period: AppointmentSlotPeriod;
}

export interface DoctorAppointmentBookingLabels {
  availableSlotsTitle: string;
  morningTitle: string;
  afternoonTitle: string;
  eveningTitle: string;
  selectedTimeLabel: string;
  bookAppointmentLabel: string;
  noSlotsMessage: string;
  selectDateMessage: string;
}

export interface DoctorAppointmentBookingProps {
  availableDates: string[];
  slots: AppointmentTimeSlot[];
  selectedDate: string | null;
  selectedSlotId: string | null;
  onDateChange: (date: string) => void;
  onSlotChange: (slotId: string) => void;
  onBookAppointment: () => void;
  isLoading?: boolean;
  isBookingDisabled?: boolean;
  labels?: Partial<DoctorAppointmentBookingLabels>;
  className?: string;
  calendarValue?: string | null;
  onCalendarPanelChange?: (panelDate: string) => void;
}

