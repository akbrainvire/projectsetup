import type { ConsultationDetailsCardProps } from "@/types/consultationDetailsCard.types";

export const HOME_CONSULTATION_DETAILS_CARD_DEMO: Omit<
  ConsultationDetailsCardProps,
  "className"
> = {
  consultationId: "#4551115151151",
  patientName: "Alexander Josh (Son, 8 Years Old)",
  consultationDateTime: "May 13, 2026  8:15 AM",
  consultationType: "Scheduled Consultation",
  consultationDuration: "18:15 min",
  paymentType: "Apple Pay",
} as const;
