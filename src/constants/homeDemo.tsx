import { Icons } from "@/assets/svg";
import type { ConsultationFeeCardProps } from "@/components/doctor/ConsultationFeeCard/types";
import type { DoctorAppointmentCardProps } from "@/components/doctor/DoctorAppointmentCard/types";
import type { DoctorProfileCardProps } from "@/components/doctor/DoctorProfileCard/types";
import type { IconInfoCardProps } from "@/components/common/IconInfoCard/types";
import type { OptionSelectItem } from "@/components/selection/OptionSelectGroup/types";
import type { SelectableServiceCardProps } from "@/components/selection/SelectableServiceCard/types";
import type { ServiceNavigationCardProps } from "@/components/selection/ServiceNavigationCard/types";
import { SELECTABLE_SERVICE_CARD_COLORS } from "@/constants/selectableServiceCard";
import { SITE_COLORS } from "@/utility/strings";

type DoctorAppointmentCardDemo = Omit<
  DoctorAppointmentCardProps,
  "onActionClick" | "className" | "imageSrc" | "imageAlt"
>;

type ServiceNavigationCardDemo = Omit<
  ServiceNavigationCardProps,
  "onClick" | "className" | "disabled" | "caretIcon"
>;

type SelectableServiceCardDemo = Omit<
  SelectableServiceCardProps,
  "onClick" | "className" | "selected" | "errorMessage" | "selectedCheckIcon" | "showSelectedCheck"
>;

type DoctorProfileCardDemo = Omit<
  DoctorProfileCardProps,
  "onClick" | "className" | "imageSrc" | "imageAlt"
>;

type IconInfoCardDemo = Omit<IconInfoCardProps, "action" | "className">;

type ConsultationFeeCardDemo = Omit<ConsultationFeeCardProps, "action" | "className">;

export const HOME_DOCTOR_APPOINTMENT_CARD_DEMOS = {
  SHORT: {
    forLabel: "For",
    doctorName: "Dr. Al-Zahraw",
    specialty: "Cardiologist",
    appointmentType: "Video Call",
    patientFor: "Myself",
    appointmentTime: "Today, 2:30 PM",
    actionLabel: "Join Call",
  },
  LONG: {
    forLabel: "For",
    doctorName: "Dr. Muhammad Al-Rashid Ibn Abdullah Al-Hashemi",
    specialty: "Interventional Cardiology and Advanced Electrophysiology",
    appointmentType: "Video Consultation with Extended Follow-up",
    patientFor: "Myself and three additional family members",
    appointmentTime: "Today, 2:30 PM — rescheduled from last week",
    actionLabel: "Join Call",
  },
} as const satisfies Record<string, DoctorAppointmentCardDemo>;

export const HOME_SERVICE_NAVIGATION_CARD_DEMOS = {
  CONSULTATION_HISTORY: {
    title: "Consultation History",
    subtitle: "Previous doctor visits",
    icon: <Icons.MedBagSVG />,
    iconBackgroundColor: SITE_COLORS.INFO_BLUE,
  },
  ORDERS: {
    title: "Orders",
    subtitle: "Prescriptions & health kits",
    icon: <Icons.MedBagTwoSVG />,
    iconBackgroundColor: SITE_COLORS.TEAL_PRIMARY,
  },
  CONSULTATION_HISTORY_LONG: {
    title: "Consultation History and Complete Medical Records Archive",
    subtitle:
      "Previous doctor visits, lab results, imaging reports, and discharge summaries from all facilities",
    icon: <Icons.MedBagSVG />,
    iconBackgroundColor: SITE_COLORS.INFO_BLUE,
  },
} as const satisfies Record<string, ServiceNavigationCardDemo>;

export const HOME_SELECTABLE_SERVICE_CARD_DEMOS = {
  INSTANT: {
    title: "Instant Consultation",
    description:
      "Connect to the next available general practitioner within 5-10 minutes.",
    icon: <Icons.LightningBoltSVG />,
    iconBackgroundColor: SELECTABLE_SERVICE_CARD_COLORS.ICON_INSTANT,
    badge: {
      label: "Available Now",
      backgroundColor: SELECTABLE_SERVICE_CARD_COLORS.BADGE_BACKGROUND,
      color: SELECTABLE_SERVICE_CARD_COLORS.BADGE_TEXT,
    },
    showBadge: true,
  },
  SCHEDULED: {
    title: "Scheduled Consultation",
    description: "Book an appointment with your preferred specialist or family doctor.",
    icon: <Icons.CalendarOrangeSVG />,
    iconBackgroundColor: SELECTABLE_SERVICE_CARD_COLORS.ICON_SCHEDULED,
    showBadge: false,
  },
} as const satisfies Record<string, SelectableServiceCardDemo>;

export const HOME_DOCTOR_PROFILE_CARD_DEMOS = {
  AVAILABLE: {
    name: "Dr. Aris Thorne",
    designation: "Senior Cardiologist",
    languages: ["English", "French", "Arabic"],
    price: 55,
    isAvailable: true,
  },
  UNAVAILABLE: {
    name: "Dr. Sarah Chen",
    designation: "Pediatric Specialist",
    languages: ["English", "Arabic"],
    price: 150,
    isAvailable: false,
  },
  LONG_TEXT: {
    name: "Dr. Muhammad Al-Rashid Ibn Abdullah Al-Hashemi Al-Qasimi",
    designation: "Interventional Cardiology and Advanced Electrophysiology Specialist",
    languages: ["English", "French", "Arabic", "Urdu"],
    price: 100000,
    isAvailable: true,
  },
} as const satisfies Record<string, DoctorProfileCardDemo>;

export const HOME_ICON_INFO_CARD_DEMOS = {
  DATE_TIME: {
    icon: <Icons.CalendarBlueSVG />,
    label: "Date & Time",
    value: "May 13, 2026, 8:15 AM",
  },
  CONSULTATION_TYPE: {
    icon: <Icons.VideoAddSVG />,
    label: "Consultation Type",
    value: "Scheduled Consultation",
  },
} as const satisfies Record<string, IconInfoCardDemo>;

export const HOME_ICON_INFO_CARD_ACTION_LABEL = "Edit";

export const HOME_CONSULTATION_FEE_CARD_DEMOS = {
  WITH_INSURANCE: {
    totalLabel: "Total Consultation Fee",
    totalAmount: "SAR 55",
    insurance: {
      label: "Covered by Insurance",
      amount: "- SAR 45",
    },
    deductible: {
      title: "Your Deductible",
      subtitle: "Amount due today",
      amount: "SAR 10",
    },
  },
} as const satisfies Record<string, ConsultationFeeCardDemo>;

export const HOME_CONSULTATION_FEE_CARD_ACTION_LABEL = "Confirm Booking";

export const HOME_DISCOUNT_CODE_DEMOS = {
  VALID_CODE: "COUPON",
  INITIAL_VALUE: "",
} as const;

export const HOME_VERIFYING_OPTIONS = [
  { label: "Myself", value: "myself" },
  { label: "Spouse", value: "spouse" },
  { label: "Child", value: "child" },
  { label: "Parent", value: "parent" },
  { label: "Other", value: "other" },
] as const satisfies readonly OptionSelectItem[];

export const HOME_RATING_DEMOS = {
  INITIAL_VALUE: 0,
  READ_ONLY_VALUE: 4,
  MAX: 5,
  SIZE: 18,
} as const;
