"use client";

import { PatientProfileForm } from "@/modules/patient-profile/PatientProfileForm";
import { PatientProfileStyles } from "@/modules/patient-profile/styles";

export default function PatientProfilePage() {
  return (
    <PatientProfileStyles.Page>
      <PatientProfileForm />
    </PatientProfileStyles.Page>
  );
}
