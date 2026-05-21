import type { ReactNode } from "react";

export type HomeNavCardConfig = {
  id: string;
  titleKey: string;
  subtitleKey: string;
  icon: ReactNode;
  iconBackgroundColor: string;
};

export type HomeAppointmentConfig = {
  id: string;
  doctorNameKey: string;
  specialtyKey: string;
  appointmentTypeKey: string;
  patientForKey: string;
  appointmentTimeKey: string;
  actionLabelKey: string;
};

export type HomeConsultationContextValue = {
  label: string;
  value: string;
};
