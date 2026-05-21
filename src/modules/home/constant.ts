import { TRANSLATION_KEYS } from "@/utility/strings";
import { SITE_COLORS } from "@/utility/strings";

const homeKeys = TRANSLATION_KEYS.HOME;

export const HOME_CONSTANTS = {
  FORM_KEYS: {
    CONSULTATION_CONTEXT: "consultationContext",
  },
  APPOINTMENT_IDS: {
    MYSELF: "home-appointment-myself",
    ALEXANDER: "home-appointment-alexander",
  },
  NAV_CARD_KEYS: {
    CONSULTATION_HISTORY: "consultation-history",
    ORDERS: "orders",
  },
  NAV_ICON_KEYS: {
    CONSULTATION_HISTORY: "consultation-history",
    ORDERS: "orders",
  },
  LAYOUT: {
    PAGE_PADDING: "clamp(16px, 3vw, 40px)",
    SECTION_GAP: "32px",
    HERO_GRID_GAP: "24px",
    APPOINTMENTS_GRID_GAP: "20px",
    NAV_STACK_GAP: "20px",
    GREETING_MARGIN_BOTTOM: "24px",
    MOBILE_BREAKPOINT: "768px",
    TABLET_BREAKPOINT: "1024px",
  },
  DEMO: {
    USER_NAME: "Alexander",
    APPOINTMENTS: [
      {
        id: "home-appointment-myself",
        doctorNameKey: homeKeys.APPOINTMENTS.DEMO.DOCTOR_NAME,
        specialtyKey: homeKeys.APPOINTMENTS.DEMO.SPECIALTY,
        appointmentTypeKey: homeKeys.APPOINTMENTS.DEMO.APPOINTMENT_TYPE,
        patientForKey: homeKeys.APPOINTMENTS.DEMO.PATIENT_FOR_MYSELF,
        appointmentTimeKey: homeKeys.APPOINTMENTS.DEMO.APPOINTMENT_TIME,
        actionLabelKey: homeKeys.APPOINTMENTS.ACTIONS.JOIN_CALL,
      },
      {
        id: "home-appointment-alexander",
        doctorNameKey: homeKeys.APPOINTMENTS.DEMO.DOCTOR_NAME,
        specialtyKey: homeKeys.APPOINTMENTS.DEMO.SPECIALTY,
        appointmentTypeKey: homeKeys.APPOINTMENTS.DEMO.APPOINTMENT_TYPE,
        patientForKey: homeKeys.APPOINTMENTS.DEMO.PATIENT_FOR_ALEXANDER,
        appointmentTimeKey: homeKeys.APPOINTMENTS.DEMO.APPOINTMENT_TIME,
        actionLabelKey: homeKeys.APPOINTMENTS.ACTIONS.JOIN_CALL,
      },
    ],
    NAV_CARDS: [
      {
        id: "consultation-history",
        titleKey: homeKeys.NAVIGATION.CONSULTATION_HISTORY.TITLE,
        subtitleKey: homeKeys.NAVIGATION.CONSULTATION_HISTORY.SUBTITLE,
        iconKey: "consultation-history",
        iconBackgroundColor: SITE_COLORS.INFO_BLUE,
      },
      {
        id: "orders",
        titleKey: homeKeys.NAVIGATION.ORDERS.TITLE,
        subtitleKey: homeKeys.NAVIGATION.ORDERS.SUBTITLE,
        iconKey: "orders",
        iconBackgroundColor: SITE_COLORS.TEAL_PRIMARY,
      },
    ],
  },
  LOADER_SIMULATION_MS: 600,
} as const;
