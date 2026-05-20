"use client";

import type React from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import CustomButton from "@/components/common/CustomButton";
import CustomButtonSelector, {
  type CustomButtonSelectorOption,
} from "@/components/common/CustomButtonSelector";
import CustomDatePicker from "@/components/common/CustomDatePicker";
import CustomDropdown, {
  type CustomDropdownOption,
} from "@/components/common/CustomDropdown";
import CustomInput from "@/components/common/CustomInput";
import { SITE_COLORS as c, TRANSLATION_KEYS } from "@/utility/strings";
import { PatientProfileStyles as S } from "@/modules/patient-profile/styles";
import { BUTTON_VARIANTS } from "@/constants/button";

type PatientProfileFormValues = {
  firstName: string;
  lastName: string;
  nationalId: string;
  contactNo: string;
  nationality: string;
  dateOfBirth: string | null;
  gender: number | null;
  secondaryNationalId: string;
  secondaryDateOfBirth: string | null;
};

type PatientProfileErrors = Partial<
  Record<keyof PatientProfileFormValues, string>
>;

type Translate = (key: string) => string;

const patientProfileKeys = TRANSLATION_KEYS.PATIENT_PROFILE;
const TEST_PHONE_COUNTRY_CODE = "+966";

const INITIAL_FORM_VALUES: PatientProfileFormValues = {
  firstName: "",
  lastName: "",
  nationalId: "",
  contactNo: "",
  nationality: "",
  dateOfBirth: null,
  gender: 1,
  secondaryNationalId: "",
  secondaryDateOfBirth: null,
};

const validateNationalId = (value: string) => /^\d{10}$/.test(value);

const validatePatientProfile = (
  values: PatientProfileFormValues,
  t: Translate
): PatientProfileErrors => {
  const nextErrors: PatientProfileErrors = {};

  if (!values.firstName.trim()) {
    nextErrors.firstName = t(patientProfileKeys.ERRORS.FIRST_NAME_REQUIRED);
  }

  if (!values.lastName.trim()) {
    nextErrors.lastName = t(patientProfileKeys.ERRORS.LAST_NAME_REQUIRED);
  }

  if (!values.nationalId) {
    nextErrors.nationalId = t(patientProfileKeys.ERRORS.NATIONAL_ID_REQUIRED);
  } else if (!validateNationalId(values.nationalId)) {
    nextErrors.nationalId = t(patientProfileKeys.ERRORS.NATIONAL_ID_INVALID);
  }

  if (!values.contactNo) {
    nextErrors.contactNo = t(patientProfileKeys.ERRORS.CONTACT_NO_REQUIRED);
  }

  if (!values.nationality) {
    nextErrors.nationality = t(patientProfileKeys.ERRORS.NATIONALITY_REQUIRED);
  }

  if (!values.dateOfBirth) {
    nextErrors.dateOfBirth = t(
      patientProfileKeys.ERRORS.DATE_OF_BIRTH_REQUIRED
    );
  }

  if (!values.gender) {
    nextErrors.gender = t(patientProfileKeys.ERRORS.GENDER_REQUIRED);
  }

  if (!values.secondaryNationalId) {
    nextErrors.secondaryNationalId = t(
      patientProfileKeys.ERRORS.NATIONAL_ID_REQUIRED
    );
  } else if (!validateNationalId(values.secondaryNationalId)) {
    nextErrors.secondaryNationalId = t(
      patientProfileKeys.ERRORS.NATIONAL_ID_INVALID
    );
  }

  if (!values.secondaryDateOfBirth) {
    nextErrors.secondaryDateOfBirth = t(
      patientProfileKeys.ERRORS.DATE_OF_BIRTH_REQUIRED
    );
  }

  return nextErrors;
};

export function PatientProfileForm() {
  const { t } = useTranslation("common");
  const [formValues, setFormValues] = useState(INITIAL_FORM_VALUES);
  const [errors, setErrors] = useState<PatientProfileErrors>({});
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const genderOptions: Array<CustomButtonSelectorOption<number>> = [
    { id: 1, label: t(patientProfileKeys.GENDER_OPTIONS.MALE) },
    { id: 2, label: t(patientProfileKeys.GENDER_OPTIONS.FEMALE) },
  ];
  const nationalityOptions: CustomDropdownOption[] = [
    {
      value: "saudi",
      label: t(patientProfileKeys.NATIONALITY_OPTIONS.SAUDI),
    },
    {
      value: "uae",
      label: t(patientProfileKeys.NATIONALITY_OPTIONS.UAE),
    },
    {
      value: "kuwaiti",
      label: t(patientProfileKeys.NATIONALITY_OPTIONS.KUWAITI),
    },
    {
      value: "bahraini",
      label: t(patientProfileKeys.NATIONALITY_OPTIONS.BAHRAINI),
    },
  ];

  const getError = (field: keyof PatientProfileFormValues) =>
    hasSubmitted ? (errors[field] ?? "") : "";

  const updateErrorsWhenNeeded = (nextValues: PatientProfileFormValues) => {
    if (hasSubmitted) {
      setErrors(validatePatientProfile(nextValues, t));
    }
  };

  const handleTextChange =
    (
      field:
        | "firstName"
        | "lastName"
        | "nationalId"
        | "contactNo"
        | "secondaryNationalId"
    ) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setFormValues((currentValues) => {
        const nextValues = {
          ...currentValues,
          [field]: event.target.value,
        };
        updateErrorsWhenNeeded(nextValues);
        return nextValues;
      });
    };

  const handleDateChange =
    (field: "dateOfBirth" | "secondaryDateOfBirth") =>
    (value: string | null) => {
      setFormValues((currentValues) => {
        const nextValues = {
          ...currentValues,
          [field]: value,
        };
        updateErrorsWhenNeeded(nextValues);
        return nextValues;
      });
    };

  const handleGenderChange = (gender: number) => {
    setFormValues((currentValues) => {
      const nextValues = {
        ...currentValues,
        gender,
      };
      updateErrorsWhenNeeded(nextValues);
      return nextValues;
    });
  };

  const handleNationalityChange = (event: { target: { value: unknown } }) => {
    const nationality =
      typeof event.target.value === "string" ? event.target.value : "";

    setFormValues((currentValues) => {
      const nextValues = {
        ...currentValues,
        nationality,
      };
      updateErrorsWhenNeeded(nextValues);
      return nextValues;
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors = validatePatientProfile(formValues, t);
    setHasSubmitted(true);
    setErrors(nextErrors);
  };

  return (
    <S.FormCard onSubmit={handleSubmit} noValidate>
      <S.Title>{t(patientProfileKeys.TITLE)}</S.Title>
      <S.FormGrid>
        <CustomInput
          label={t(patientProfileKeys.FIELDS.FIRST_NAME)}
          placeholder={t(patientProfileKeys.PLACEHOLDERS.FIRST_NAME)}
          value={formValues.firstName}
          onChangeHandler={handleTextChange("firstName")}
          errorMessage={getError("firstName")}
          customWrapperClass="patient-profile-field"
          disableAutoFocus
          hideErrorMessageBox
        />
        <CustomInput
          label={t(patientProfileKeys.FIELDS.LAST_NAME)}
          placeholder={t(patientProfileKeys.PLACEHOLDERS.LAST_NAME)}
          value={formValues.lastName}
          onChangeHandler={handleTextChange("lastName")}
          errorMessage={getError("lastName")}
          customWrapperClass="patient-profile-field"
          disableAutoFocus
          hideErrorMessageBox
        />
        <CustomInput
          label={t(patientProfileKeys.FIELDS.NATIONAL_ID)}
          placeholder={t(patientProfileKeys.PLACEHOLDERS.NATIONAL_ID)}
          value={formValues.nationalId}
          onChangeHandler={handleTextChange("nationalId")}
          errorMessage={getError("nationalId")}
          customWrapperClass="patient-profile-field"
          allowOnlyNumber
          maxLength={10}
          showInfoIcon
          infoDescription={t(patientProfileKeys.INFO.NATIONAL_ID)}
          disableAutoFocus
          hideErrorMessageBox
        />
        <CustomInput
          label={t(patientProfileKeys.FIELDS.CONTACT_NO)}
          placeholder={t(patientProfileKeys.PLACEHOLDERS.CONTACT_NO)}
          value={formValues.contactNo}
          onChangeHandler={handleTextChange("contactNo")}
          errorMessage={getError("contactNo")}
          customWrapperClass="patient-profile-field"
          allowOnlyNumber
          maxLength={9}
          prefix
          preFixText={TEST_PHONE_COUNTRY_CODE}
          disableAutoFocus
          hideErrorMessageBox
        />
        <CustomDatePicker
          label={t(patientProfileKeys.FIELDS.YEAR_OF_BIRTH)}
          placeholder={t(patientProfileKeys.PLACEHOLDERS.YEAR_OF_BIRTH)}
          value={formValues.dateOfBirth}
          onChange={handleDateChange("dateOfBirth")}
          errorMessage={getError("dateOfBirth")}
          className="patient-profile-field"
          allowClear={false}
          disableAutoFocus
          yearOnly
        />
        <CustomDropdown
          label={t(patientProfileKeys.FIELDS.NATIONALITY)}
          placeholder={t(patientProfileKeys.PLACEHOLDERS.NATIONALITY)}
          fieldName="nationality"
          value={formValues.nationality}
          options={nationalityOptions}
          onChangeHandler={handleNationalityChange}
          errorMessage={getError("nationality")}
          customContainerClass="patient-profile-field"
        />
        <S.FullWidthField>
          <CustomButtonSelector
            label={t(patientProfileKeys.FIELDS.GENDER)}
            options={genderOptions}
            value={formValues.gender}
            onChange={handleGenderChange}
            errorMessage={getError("gender")}
            className="patient-profile-field"
            columns={2}
          />
        </S.FullWidthField>
        <CustomInput
          label={t(patientProfileKeys.FIELDS.NATIONAL_ID)}
          placeholder={t(patientProfileKeys.PLACEHOLDERS.NATIONAL_ID)}
          value={formValues.secondaryNationalId}
          onChangeHandler={handleTextChange("secondaryNationalId")}
          errorMessage={getError("secondaryNationalId")}
          customWrapperClass="patient-profile-field"
          allowOnlyNumber
          maxLength={10}
          disableAutoFocus
          hideErrorMessageBox
        />
        <CustomDatePicker
          label={t(patientProfileKeys.FIELDS.DATE_OF_BIRTH)}
          placeholder={t(patientProfileKeys.PLACEHOLDERS.DATE_OF_BIRTH)}
          value={formValues.secondaryDateOfBirth}
          onChange={handleDateChange("secondaryDateOfBirth")}
          errorMessage={getError("secondaryDateOfBirth")}
          className="patient-profile-field"
          allowClear={false}
          disableAutoFocus
        />
        <S.ActionRow>
          <CustomButton
            appearance={{ variant: BUTTON_VARIANTS.PRIMARY }}
            type="submit"
            text={t(patientProfileKeys.ACTIONS.CONFIRM_CONTINUE)}
            width="100%"
            textClass="formBtnText"
          />
        </S.ActionRow>
      </S.FormGrid>
    </S.FormCard>
  );
}
