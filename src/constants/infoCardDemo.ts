import type { InfoCardProps } from "@/types/infoCard.types";

export const HOME_INFO_CARD_DEMO: Omit<InfoCardProps, "className"> = {
  items: [
    {
      label: "Consultation ID",
      value: "#4551115151151",
    },
    {
      label: "Patient Name",
      value: "Alexander Josh (Son, 8 Years Old)",
    },
    {
      label: "Consultation Date & Time",
      value: "May 13, 2026  8:15 AM",
    },
    {
      label: "Consultation Type",
      value: "Scheduled Consultation",
      status: {
        text: "In Active",
        textColor: "#fff",
        bgColor: "#000",
      },
    },
    {
      label: "Consultation Duration",
      value: "18:15 min",
    },
    {
      label: "Payment Type",
      value: "Apple Pay",
      status: {
        text: "Active",
        textColor: "#00AA9B",
        bgColor: "#E0F7F5",
      },
    },
  ],
} as const;
