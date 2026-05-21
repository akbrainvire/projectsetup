import type { StaticImageData } from "next/image";

export type DoctorAppointmentCardProps = {
  imageSrc?: string | StaticImageData;
  imageAlt?: string;
  doctorName: string;
  specialty: string;
  appointmentType: string;
  forLabel?: string;
  patientFor: string;
  appointmentTime: string;
  actionLabel: string;
  onActionClick?: () => void;
  className?: string;
};
