import type { ThemeConfig } from "antd";
import { NotoSansFont } from "@/styles/fonts";

export const LANGUAGE_KEYS = {
  ENGLISH: "en",
  ARABIC: "ar",
} as const;

export type LanguageCode = (typeof LANGUAGE_KEYS)[keyof typeof LANGUAGE_KEYS];

export const ROUTES = {
  HOME: "/",
  EXG: "/exg",
  AUTH: {
    SIGN_IN: "/auth/sign-in",
  },
} as const;

export const SITE_COLORS = {
  BLUE_1: "#1e293b",
  TITLE_BAR_BG: "#1e3a5f",
  PAGE_MUTED: "#f1f5f9",
  NAV_PILL: "#ffffff",
  NAV_SHADOW:
    "0 1px 2px rgba(15, 23, 42, 0.06), 0 8px 24px rgba(15, 23, 42, 0.06)",
  ACCENT_GOLD: "#0f766e",
  GREY_2: "#f8fafc",
  GREY_4: "#64748b",
  GREY_5: "#cbd5e1",
  GREY_6: "#e2e8f0",
  GREY_7: "#e2e8f0",
  GREY_11: "#e2e8f0",
  WHITE: "#ffffff",
  BLACK: "#0f172a",
  ORANGE: "#475569",
  RED: "#b91c1c",
  LIGHT_GREEN_5: "#15803d",
  PLACEHOLDER_GREY: "#94a3b8",
  LIGHT_GREY_3: "#f1f5f9",
  BACKGROUND: "#ffffff",
  TEXT_PRIMARY: "#0f172a",
  PRIMARY: "#1d4ed8",
  NAVY_DARK: "#203874",
  BLUE_DEEP: "#00478d",
  TEAL_PRIMARY: "#00aa9b",
  INFO_BLUE: "#208ccc",
  CARET_GREY: "#c2c6d4",
  BORDER_GREY: "#D7D7D7",
  SOFT_BLUE_BG: "#E8F5FF",
  PLACEHOLDER_MUTED: "#B5B5B5",
  BORDER_SUBTLE: "#d9d9d9",
  FIELD_LABEL: "#464646",
  DATE_PICKER_ICON: "#636363",
  PATIENT_PROFILE_PRIMARY: "#203874",
  BUTTON_SELECTOR_ACTIVE_BACKGROUND: "#D5EBFF",
} as const;

export const STYLED_COMPONENTS_THEME = {
  colors: SITE_COLORS,
} as const;

export type StyledComponentsTheme = typeof STYLED_COMPONENTS_THEME;

declare module "styled-components" {
  export interface DefaultTheme extends StyledComponentsTheme {}
}

export const ANTD_THEME_CONFIG: ThemeConfig = {
  token: {
    colorPrimary: SITE_COLORS.PRIMARY,
    colorBgLayout: SITE_COLORS.PAGE_MUTED,
    borderRadius: 8,
    fontFamily: NotoSansFont.style.fontFamily,
  },
};

export const STATIC_VALUES = {
  COMMON: {
    COOKIE_KEYS: {
      ACCESS_TOKEN: "accessToken",
      LANGUAGE: "language",
      ROLE: "role",
      ROLE_TOKEN: "roleToken",
      DROPDOWN_DATA: "dropdownData",
    },
  },
} as const;

export const QUERY_KEYS = {
  APP: {
    HEALTH: "app.health",
  },
} as const;

export const REGEX = {
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
} as const;

export const STORAGE_KEYS = {
  LOCALE: "app.locale",
} as const;

export const TRANSLATION_KEYS = {
  LAYOUT: {
    PRODUCT: "layout.product",
    NAV_HOME: "layout.navHome",
    NAV_EXG: "layout.navExg",
    CONTACT: "layout.contact",
    FOOTER: "layout.footer",
    LANGUAGE: "layout.language",
  },
  APP: {
    TITLE: "app.title",
    WELCOME: "app.welcome",
    REDUX_STATE: "app.reduxState",
  },
  COMMON: {
    ERROR_MESSAGES: {
      THIS_IS_REQUIRED_FIELD: "errors.thisFieldIsRequired",
    },
  },
  HOME: {
    TITLE: "home.title",
    DESCRIPTION: "home.description",
    EXG_LINK: "home.exgLink",
    BUTTONS: {
      TITLE: "home.buttons.title",
      PRIMARY: "home.buttons.primary",
      SECONDARY: "home.buttons.secondary",
      CUSTOM: "home.buttons.custom",
    },
  },
  LANGUAGE: {
    ENGLISH: "language.english",
    ARABIC: "language.arabic",
    IN_SELECTOR_ENGLISH: "language.inSelectorEnglish",
    IN_SELECTOR_ARABIC: "language.inSelectorArabic",
  },
  DISCOUNT_CODE: {
    PLACEHOLDER: "discountCode.placeholder",
    APPLY: "discountCode.actions.apply",
    APPLIED: "discountCode.actions.applied",
    REMOVE: "discountCode.actions.remove",
    ERRORS: {
      INVALID: "discountCode.errors.invalid",
    },
  },
  DOCTOR_BOOKING: {
    CALENDAR: {
      PREVIOUS_MONTH: "doctorBooking.calendar.previousMonth",
      NEXT_MONTH: "doctorBooking.calendar.nextMonth",
    },
    SLOTS: {
      TITLE: "doctorBooking.slots.title",
      MORNING: "doctorBooking.slots.morning",
      AFTERNOON: "doctorBooking.slots.afternoon",
      EVENING: "doctorBooking.slots.evening",
      NO_SLOTS: "doctorBooking.slots.noSlots",
      SELECT_DATE: "doctorBooking.slots.selectDate",
    },
    FOOTER: {
      SELECTED_TIME: "doctorBooking.footer.selectedTime",
      BOOK_APPOINTMENT: "doctorBooking.footer.bookAppointment",
      EMPTY: "doctorBooking.footer.empty",
    },
    ERRORS: {
      SLOT_IN_PAST: "doctorBooking.errors.slotInPast",
    },
  },
  EXG: {
    BRAND: "exg.brand",
    NAV_HOME: "exg.nav.home",
    NAV_EXG: "exg.nav.exg",
    HEADER_SUBTITLE: "exg.header.subtitle",
    FOOTER: "exg.footer",
    LIST_TITLE: "exg.list.title",
    TITLE_BAR: "exg.list.titleBar",
    LIST_RESET: "exg.list.reset",
    LIST_FILTER: "exg.list.filter",
    LIST_ADD: "exg.list.add",
    SEARCH_PLACEHOLDER: "exg.list.searchPlaceholder",
    COL_NAME: "exg.table.name",
    COL_EMAIL: "exg.table.email",
    COL_ROLE: "exg.table.role",
    ACTION_VIEW: "exg.table.actionView",
    DETAIL_TITLE: "exg.detail.title",
    DETAIL_TITLE_BAR: "exg.detail.titleBar",
    DETAIL_BACK: "exg.detail.back",
    DETAIL_FOOTER: "exg.detail.footer",
    DETAIL_MISSING: "exg.detail.missing",
    FORM_NAME: "exg.form.name",
    FORM_EMAIL: "exg.form.email",
    FORM_ROLE: "exg.form.role",
  },
  PATIENT_PROFILE: {
    TITLE: "patientProfile.title",
    FIELDS: {
      FIRST_NAME: "patientProfile.fields.firstName",
      LAST_NAME: "patientProfile.fields.lastName",
      NATIONAL_ID: "patientProfile.fields.nationalId",
      CONTACT_NO: "patientProfile.fields.contactNo",
      NATIONALITY: "patientProfile.fields.nationality",
      DATE_OF_BIRTH: "patientProfile.fields.dateOfBirth",
      GENDER: "patientProfile.fields.gender",
      YEAR_OF_BIRTH: "patientProfile.fields.yearOfBirth",
    },
    PLACEHOLDERS: {
      FIRST_NAME: "patientProfile.placeholders.firstName",
      LAST_NAME: "patientProfile.placeholders.lastName",
      NATIONAL_ID: "patientProfile.placeholders.nationalId",
      CONTACT_NO: "patientProfile.placeholders.contactNo",
      NATIONALITY: "patientProfile.placeholders.nationality",
      DATE_OF_BIRTH: "patientProfile.placeholders.dateOfBirth",
      YEAR_OF_BIRTH: "patientProfile.placeholders.yearOfBirth",
    },
    GENDER_OPTIONS: {
      MALE: "patientProfile.genderOptions.male",
      FEMALE: "patientProfile.genderOptions.female",
    },
    NATIONALITY_OPTIONS: {
      SAUDI: "patientProfile.nationalityOptions.saudi",
      UAE: "patientProfile.nationalityOptions.uae",
      KUWAITI: "patientProfile.nationalityOptions.kuwaiti",
      BAHRAINI: "patientProfile.nationalityOptions.bahraini",
    },
    INFO: {
      NATIONAL_ID: "patientProfile.info.nationalId",
    },
    ACTIONS: {
      CONFIRM_CONTINUE: "patientProfile.actions.confirmContinue",
    },
    ERRORS: {
      FIRST_NAME_REQUIRED: "patientProfile.errors.firstNameRequired",
      LAST_NAME_REQUIRED: "patientProfile.errors.lastNameRequired",
      NATIONAL_ID_REQUIRED: "patientProfile.errors.nationalIdRequired",
      NATIONAL_ID_INVALID: "patientProfile.errors.nationalIdInvalid",
      CONTACT_NO_REQUIRED: "patientProfile.errors.contactNoRequired",
      NATIONALITY_REQUIRED: "patientProfile.errors.nationalityRequired",
      DATE_OF_BIRTH_REQUIRED: "patientProfile.errors.dateOfBirthRequired",
      GENDER_REQUIRED: "patientProfile.errors.genderRequired",
    },
  },
} as const;

export const LAYOUT_NAV_LINKS = [
  { href: ROUTES.HOME, labelKey: TRANSLATION_KEYS.LAYOUT.NAV_HOME },
  { href: ROUTES.EXG, labelKey: TRANSLATION_KEYS.LAYOUT.NAV_EXG },
] as const;

export const LAYOUT_CONTACT_HREF = ROUTES.HOME;
