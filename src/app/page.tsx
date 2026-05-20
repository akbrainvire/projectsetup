"use client";

import { Typography } from "antd";
import { useCallback, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Icons } from "@/assets/svg";
import CountdownTimer from "@/components/common/CountdownTimer";
import CustomButton from "@/components/common/CustomButton";
import DiscountCodeInput from "@/components/common/DiscountCodeInput";
import IconInfoCard from "@/components/common/IconInfoCard";
import ConsultationFeeCard from "@/components/doctor/ConsultationFeeCard";
import DoctorAppointmentBooking from "@/components/doctor/DoctorAppointmentBooking";
import DoctorAppointmentCard from "@/components/doctor/DoctorAppointmentCard";
import DoctorProfileCard from "@/components/doctor/DoctorProfileCard";
import OptionSelectGroup from "@/components/selection/OptionSelectGroup";
import { formatOptionSelectDisplayValue } from "@/components/selection/OptionSelectGroup/optionSelectGroup.utils";
import SelectableServiceCard from "@/components/selection/SelectableServiceCard";
import ServiceNavigationCard from "@/components/selection/ServiceNavigationCard";
import { PageShell } from "@/components/layouts/PageShell";
import { BUTTON_ICON_POSITIONS, BUTTON_VARIANTS } from "@/constants/button";
import { DISCOUNT_CODE_INPUT_STATES } from "@/constants/discountCodeInput";
import {
  COUNTDOWN_TIMER_CONSTANTS,
  COUNTDOWN_TIMER_FALLBACKS,
} from "@/constants/countdownTimer";
import { OPTION_SELECT_MODES } from "@/constants/optionSelectGroup";
import {
  HOME_CONSULTATION_FEE_CARD_ACTION_LABEL,
  HOME_CONSULTATION_FEE_CARD_DEMOS,
  HOME_DISCOUNT_CODE_DEMOS,
  HOME_DOCTOR_APPOINTMENT_CARD_DEMOS,
  HOME_DOCTOR_PROFILE_CARD_DEMOS,
  HOME_ICON_INFO_CARD_ACTION_LABEL,
  HOME_ICON_INFO_CARD_DEMOS,
  HOME_SELECTABLE_SERVICE_CARD_DEMOS,
  HOME_SERVICE_NAVIGATION_CARD_DEMOS,
  HOME_VERIFYING_OPTIONS,
} from "@/constants/homeDemo";
import {
  HOME_DOCTOR_BOOKING_AVAILABILITY,
  HOME_DOCTOR_BOOKING_AVAILABLE_DATES,
} from "@/constants/doctorBookingDemo";
import type { AppointmentTimeSlot } from "@/types/doctorAppointmentBooking.types";
import {
  findFirstSelectableAppointmentDate,
  isAppointmentSlotInPast,
} from "@/utility/appointmentBooking";
import { notifyError } from "@/utility/notify";
import { useForm } from "@/hooks/useForm";
import type {
  OptionSelectGroupValue,
  OptionSelectItem,
  OptionSelectMultipleValue,
  OptionSelectSingleValue,
} from "@/types/optionSelectGroup.types";
import type { RootState } from "@/redux/store";
import { SITE_COLORS, TRANSLATION_KEYS } from "@/utility/strings";
import { HomePageStyles } from "@/app/styles";

const VERIFYING_FOR_FORM_KEY = "verifyingFor";
const VERIFYING_FOR_MULTI_FORM_KEY = "verifyingForMulti";
const CONSULTATION_TYPE_FORM_KEY = "consultationType";

export default function HomePage() {
  const { t } = useTranslation("common");
  const commonReady = useSelector((state: RootState) => state.common.initialized);
  const verifyingOptions = [...HOME_VERIFYING_OPTIONS];

  const optionSelectForm = useForm({
    [VERIFYING_FOR_FORM_KEY]: {
      value: { label: "Child", value: "child" } as OptionSelectSingleValue,
      error: "",
      required: true,
    },
    [VERIFYING_FOR_MULTI_FORM_KEY]: {
      value: [{ label: "Child", value: "child" }] as OptionSelectMultipleValue,
      error: "",
      required: true,
    },
    [CONSULTATION_TYPE_FORM_KEY]: {
      value: {
        label: HOME_SELECTABLE_SERVICE_CARD_DEMOS.SCHEDULED.title,
        value: "scheduled",
      } as OptionSelectSingleValue,
      error: "",
      required: true,
    },
  });

  const verifyingForValue = optionSelectForm.values[
    VERIFYING_FOR_FORM_KEY
  ] as OptionSelectSingleValue;
  const verifyingForMultiValue = optionSelectForm.values[
    VERIFYING_FOR_MULTI_FORM_KEY
  ] as OptionSelectMultipleValue;
  const verifyingForError = String(optionSelectForm.errors[VERIFYING_FOR_FORM_KEY] ?? "");
  const verifyingForMultiError = String(
    optionSelectForm.errors[VERIFYING_FOR_MULTI_FORM_KEY] ?? "",
  );
  const consultationTypeValue = optionSelectForm.values[
    CONSULTATION_TYPE_FORM_KEY
  ] as OptionSelectSingleValue;
  const consultationTypeError = String(
    optionSelectForm.errors[CONSULTATION_TYPE_FORM_KEY] ?? "",
  );

  const handlePrimaryButtonClick = () => {
    console.log("[CustomButton] Primary clicked");
  };

  const handleSecondaryButtonClick = () => {
    console.log("[CustomButton] Secondary clicked");
  };

  const handleCustomButtonClick = () => {
    console.log("[CustomButton] Custom clicked");
  };

  const handleDoctorCardShortActionClick = () => {
    console.log("[DoctorAppointmentCard] SHORT action clicked", {
      doctorName: HOME_DOCTOR_APPOINTMENT_CARD_DEMOS.SHORT.doctorName,
    });
  };

  const handleDoctorCardLongActionClick = () => {
    console.log("[DoctorAppointmentCard] LONG action clicked", {
      doctorName: HOME_DOCTOR_APPOINTMENT_CARD_DEMOS.LONG.doctorName,
    });
  };

  const handleVerifyingForChange = (nextValue: OptionSelectGroupValue) => {
    console.log("[OptionSelectGroup] single onChange", {
      formKey: VERIFYING_FOR_FORM_KEY,
      value: nextValue,
    });
    optionSelectForm.handleOnValueChange(nextValue, VERIFYING_FOR_FORM_KEY);
  };

  const handleVerifyingForMultiChange = (nextValue: OptionSelectGroupValue) => {
    const selectedValues = Array.isArray(nextValue) ? nextValue : [];
    console.log("[OptionSelectGroup] multiple onChange", {
      formKey: VERIFYING_FOR_MULTI_FORM_KEY,
      value: selectedValues,
    });
    optionSelectForm.handleOnMultipleSelection(VERIFYING_FOR_MULTI_FORM_KEY, selectedValues);
  };

  const handleVerifyingOptionClick = (
    option: OptionSelectItem,
    formValue: OptionSelectGroupValue,
  ) => {
    console.log("[OptionSelectGroup] single onOptionClick", {
      formKey: VERIFYING_FOR_FORM_KEY,
      clickedOption: option,
      useFormValueAfterClick: formValue,
    });
  };

  const handleVerifyingMultiOptionClick = (
    option: OptionSelectItem,
    formValue: OptionSelectGroupValue,
  ) => {
    console.log("[OptionSelectGroup] multiple onOptionClick", {
      formKey: VERIFYING_FOR_MULTI_FORM_KEY,
      clickedOption: option,
      useFormValueAfterClick: formValue,
    });
  };

  const handleConsultationTypeSelect = (
    label: string,
    value: string,
    cardKey: string,
  ) => {
    const formValue = { label, value };
    console.log("[SelectableServiceCard] onClick", {
      formKey: CONSULTATION_TYPE_FORM_KEY,
      cardKey,
      useFormValueAfterClick: formValue,
    });
    optionSelectForm.handleOnValueChange(formValue, CONSULTATION_TYPE_FORM_KEY);
  };

  const handleInstantConsultationClick = () => {
    handleConsultationTypeSelect(
      HOME_SELECTABLE_SERVICE_CARD_DEMOS.INSTANT.title,
      "instant",
      "INSTANT",
    );
  };

  const handleScheduledConsultationClick = () => {
    handleConsultationTypeSelect(
      HOME_SELECTABLE_SERVICE_CARD_DEMOS.SCHEDULED.title,
      "scheduled",
      "SCHEDULED",
    );
  };

  const handleConsultationHistoryClick = () => {
    console.log("[ServiceNavigationCard] Consultation History clicked", {
      title: HOME_SERVICE_NAVIGATION_CARD_DEMOS.CONSULTATION_HISTORY.title,
    });
  };

  const handleOrdersClick = () => {
    console.log("[ServiceNavigationCard] Orders clicked", {
      title: HOME_SERVICE_NAVIGATION_CARD_DEMOS.ORDERS.title,
    });
  };

  const handleDoctorProfileCardClick = (cardKey: string) => {
    console.log("[DoctorProfileCard] clicked", { cardKey });
  };

  const handleIconInfoCardEditClick = () => {
    console.log("[IconInfoCard] Edit clicked", {
      label: HOME_ICON_INFO_CARD_DEMOS.DATE_TIME.label,
      value: HOME_ICON_INFO_CARD_DEMOS.DATE_TIME.value,
    });
  };

  const handleConfirmBookingClick = () => {
    console.log("[ConsultationFeeCard] Confirm booking clicked", {
      totalAmount: HOME_CONSULTATION_FEE_CARD_DEMOS.WITH_INSURANCE.totalAmount,
      deductibleAmount:
        HOME_CONSULTATION_FEE_CARD_DEMOS.WITH_INSURANCE.deductible.amount,
    });
  };

  const initialBookingDate = useMemo(
    () => findFirstSelectableAppointmentDate(HOME_DOCTOR_BOOKING_AVAILABLE_DATES),
    [],
  );

  const [bookingSelectedDate, setBookingSelectedDate] = useState<string | null>(
    initialBookingDate,
  );
  const [bookingSelectedSlotId, setBookingSelectedSlotId] = useState<string | null>(null);
  const [bookingSlots, setBookingSlots] = useState<AppointmentTimeSlot[]>(() => {
    if (!initialBookingDate) {
      return [];
    }
    return HOME_DOCTOR_BOOKING_AVAILABILITY[initialBookingDate] ?? [];
  });
  const [isBookingSubmitting, setIsBookingSubmitting] = useState(false);

  const [discountCodeValue, setDiscountCodeValue] = useState<string>(
    HOME_DISCOUNT_CODE_DEMOS.INITIAL_VALUE,
  );
  const [submittedDiscountCode, setSubmittedDiscountCode] = useState<string | null>(
    null,
  );

  const discountCodeState = useMemo(() => {
    if (submittedDiscountCode === null || submittedDiscountCode !== discountCodeValue) {
      return DISCOUNT_CODE_INPUT_STATES.IDLE;
    }
    if (submittedDiscountCode === HOME_DISCOUNT_CODE_DEMOS.VALID_CODE) {
      return DISCOUNT_CODE_INPUT_STATES.APPLIED;
    }
    return DISCOUNT_CODE_INPUT_STATES.ERROR;
  }, [discountCodeValue, submittedDiscountCode]);

  const handleDiscountCodeChange = (nextValue: string) => {
    setDiscountCodeValue(nextValue);
  };

  const handleDiscountCodeApply = () => {
    console.log("[DiscountCodeInput] apply clicked", { value: discountCodeValue });
    setSubmittedDiscountCode(discountCodeValue);
  };

  const handleDiscountCodeRemove = () => {
    console.log("[DiscountCodeInput] remove clicked");
    setDiscountCodeValue("");
    setSubmittedDiscountCode(null);
  };

  const handleBookingDateChange = useCallback((date: string) => {
    setBookingSelectedDate(date);
    setBookingSelectedSlotId(null);
    setBookingSlots(HOME_DOCTOR_BOOKING_AVAILABILITY[date] ?? []);
  }, []);

  const handleBookingSlotChange = useCallback((slotId: string) => {
    setBookingSelectedSlotId(slotId);
  }, []);

  const handleCountdownComplete = useCallback(() => {
    console.log("[CountdownTimer] reached zero");
  }, []);

  const handleBookAppointment = useCallback(() => {
    if (!bookingSelectedDate || !bookingSelectedSlotId) {
      return;
    }

    const selectedSlot = bookingSlots.find(
      (slot: AppointmentTimeSlot) => slot.id === bookingSelectedSlotId,
    );

    if (!selectedSlot || isAppointmentSlotInPast(selectedSlot.value, bookingSelectedDate)) {
      notifyError(t(TRANSLATION_KEYS.DOCTOR_BOOKING.ERRORS.SLOT_IN_PAST));
      setBookingSelectedSlotId(null);
      setBookingSlots((current: AppointmentTimeSlot[]) => [...current]);
      return;
    }

    setIsBookingSubmitting(true);
    console.log("[DoctorAppointmentBooking] book appointment", {
      date: bookingSelectedDate,
      slotId: bookingSelectedSlotId,
      slot: selectedSlot,
    });
    setTimeout(() => {
      setIsBookingSubmitting(false);
    }, 800);
  }, [bookingSelectedDate, bookingSelectedSlotId, bookingSlots, t]);

  return (
    <PageShell>
      <HomePageStyles.Main>
        <HomePageStyles.Stack>
          <Typography.Title level={2}>{t(TRANSLATION_KEYS.APP.TITLE)}</Typography.Title>
          <Typography.Paragraph>{t(TRANSLATION_KEYS.APP.WELCOME)}</Typography.Paragraph>
          <Typography.Text type="secondary">
            {t(TRANSLATION_KEYS.APP.REDUX_STATE, { status: String(commonReady) })}
          </Typography.Text>
          <Typography.Paragraph>{t(TRANSLATION_KEYS.HOME.DESCRIPTION)}</Typography.Paragraph>

          <HomePageStyles.ButtonSection>
            <Typography.Title level={4}>
              {t(TRANSLATION_KEYS.HOME.BUTTONS.TITLE)}
            </Typography.Title>
            <HomePageStyles.ButtonRow>
              <CustomButton
                text={t(TRANSLATION_KEYS.HOME.BUTTONS.PRIMARY)}
                appearance={{ variant: BUTTON_VARIANTS.PRIMARY }}
                events={{ onClick: handlePrimaryButtonClick }}
              />
              <CustomButton
                text={t(TRANSLATION_KEYS.HOME.BUTTONS.SECONDARY)}
                appearance={{ variant: BUTTON_VARIANTS.SECONDARY }}
                iconConfig={{
                  enabled: true,
                  icon: <Icons.VideoIcon />,
                  position: BUTTON_ICON_POSITIONS.RIGHT,
                }}
                events={{ onClick: handleSecondaryButtonClick }}
              />
              <CustomButton
                text={t(TRANSLATION_KEYS.HOME.BUTTONS.CUSTOM)}
                appearance={{
                  variant: BUTTON_VARIANTS.CUSTOM,
                  backgroundColor: SITE_COLORS.PAGE_MUTED,
                  color: SITE_COLORS.NAVY_DARK,
                  border: `1px solid ${SITE_COLORS.NAVY_DARK}`,
                }}
                hover={{
                  enabled: true,
                  backgroundColor: SITE_COLORS.NAVY_DARK,
                  color: SITE_COLORS.WHITE,
                }}
                iconConfig={{
                  enabled: true,
                }}
                events={{ onClick: handleCustomButtonClick }}
              />
            </HomePageStyles.ButtonRow>
          </HomePageStyles.ButtonSection>

          <HomePageStyles.CardSection>
            <Typography.Title level={4}>
              {t(COUNTDOWN_TIMER_CONSTANTS.SHOWCASE.TITLE, {
                defaultValue: COUNTDOWN_TIMER_FALLBACKS.SHOWCASE_TITLE,
              })}
            </Typography.Title>
            <HomePageStyles.CountdownTimerRow>
              <CountdownTimer
                durationSeconds={COUNTDOWN_TIMER_CONSTANTS.DEMO.DURATION_SECONDS}
                onComplete={handleCountdownComplete}
              />
            </HomePageStyles.CountdownTimerRow>
          </HomePageStyles.CardSection>

          <HomePageStyles.CardSection>
            <Typography.Title level={4}>Doctor appointment cards</Typography.Title>
            <HomePageStyles.CardStack>
              <DoctorAppointmentCard
                {...HOME_DOCTOR_APPOINTMENT_CARD_DEMOS.SHORT}
                onActionClick={handleDoctorCardShortActionClick}
              />
              <DoctorAppointmentCard
                {...HOME_DOCTOR_APPOINTMENT_CARD_DEMOS.LONG}
                onActionClick={handleDoctorCardLongActionClick}
              />
            </HomePageStyles.CardStack>
          </HomePageStyles.CardSection>

          <HomePageStyles.CardSection>
            <Typography.Title level={4}>Option select (single)</Typography.Title>
            <OptionSelectGroup
              name={VERIFYING_FOR_FORM_KEY}
              value={verifyingForValue}
              question="Who are you verifying today?"
              options={verifyingOptions}
              mode={OPTION_SELECT_MODES.SINGLE}
              errorMessage={verifyingForError}
              onChange={handleVerifyingForChange}
              onOptionClick={handleVerifyingOptionClick}
            />
            <Typography.Text type="secondary">
              Selected:{" "}
              {formatOptionSelectDisplayValue(verifyingForValue, OPTION_SELECT_MODES.SINGLE)}
            </Typography.Text>
          </HomePageStyles.CardSection>

          <HomePageStyles.CardSection>
            <Typography.Title level={4}>Option select (multiple)</Typography.Title>
            <OptionSelectGroup
              name={VERIFYING_FOR_MULTI_FORM_KEY}
              value={verifyingForMultiValue}
              question="Who are you verifying today?"
              options={verifyingOptions}
              mode={OPTION_SELECT_MODES.MULTIPLE}
              errorMessage={verifyingForMultiError}
              onChange={handleVerifyingForMultiChange}
              onOptionClick={handleVerifyingMultiOptionClick}
            />
            <Typography.Text type="secondary">
              Selected:{" "}
              {formatOptionSelectDisplayValue(
                verifyingForMultiValue,
                OPTION_SELECT_MODES.MULTIPLE,
              )}
            </Typography.Text>
          </HomePageStyles.CardSection>

          <HomePageStyles.CardSection>
            <Typography.Title level={4}>Selectable service cards</Typography.Title>
            <HomePageStyles.SelectableCardRow>
              <SelectableServiceCard
                {...HOME_SELECTABLE_SERVICE_CARD_DEMOS.INSTANT}
                selected={consultationTypeValue?.value === "instant"}
                onClick={handleInstantConsultationClick}
              />
              <SelectableServiceCard
                {...HOME_SELECTABLE_SERVICE_CARD_DEMOS.SCHEDULED}
                selected={consultationTypeValue?.value === "scheduled"}
                onClick={handleScheduledConsultationClick}
              />
            </HomePageStyles.SelectableCardRow>
            {consultationTypeError ? (
              <Typography.Text type="danger">{consultationTypeError}</Typography.Text>
            ) : null}
            <Typography.Text type="secondary">
              Selected:{" "}
              {consultationTypeValue
                ? `${consultationTypeValue.label} (${consultationTypeValue.value})`
                : ""}
            </Typography.Text>
          </HomePageStyles.CardSection>

          <HomePageStyles.CardSection>
            <Typography.Title level={4}>Doctor profile cards</Typography.Title>
            <HomePageStyles.CardStack>
              <DoctorProfileCard
                {...HOME_DOCTOR_PROFILE_CARD_DEMOS.AVAILABLE}
                onClick={() => handleDoctorProfileCardClick("AVAILABLE")}
              />
              <DoctorProfileCard
                {...HOME_DOCTOR_PROFILE_CARD_DEMOS.UNAVAILABLE}
                onClick={() => handleDoctorProfileCardClick("UNAVAILABLE")}
              />
              <DoctorProfileCard
                {...HOME_DOCTOR_PROFILE_CARD_DEMOS.LONG_TEXT}
                onClick={() => handleDoctorProfileCardClick("LONG_TEXT")}
              />
            </HomePageStyles.CardStack>
          </HomePageStyles.CardSection>

          <HomePageStyles.CardSection>
            <Typography.Title level={4}>Service navigation cards</Typography.Title>
            <HomePageStyles.CardStack>
              <ServiceNavigationCard
                {...HOME_SERVICE_NAVIGATION_CARD_DEMOS.CONSULTATION_HISTORY}
                onClick={handleConsultationHistoryClick}
              />
              <ServiceNavigationCard
                {...HOME_SERVICE_NAVIGATION_CARD_DEMOS.ORDERS}
                onClick={handleOrdersClick}
              />
            </HomePageStyles.CardStack>
          </HomePageStyles.CardSection>

          <HomePageStyles.CardSection>
            <Typography.Title level={4}>Icon info cards</Typography.Title>
            <HomePageStyles.IconInfoCardRow>
              <IconInfoCard
                {...HOME_ICON_INFO_CARD_DEMOS.DATE_TIME}
                action={{
                  label: HOME_ICON_INFO_CARD_ACTION_LABEL,
                  onClick: handleIconInfoCardEditClick,
                }}
              />
              <IconInfoCard {...HOME_ICON_INFO_CARD_DEMOS.CONSULTATION_TYPE} />
            </HomePageStyles.IconInfoCardRow>
          </HomePageStyles.CardSection>

          <HomePageStyles.CardSection>
            <Typography.Title level={4}>Consultation fee cards</Typography.Title>
            <HomePageStyles.IconInfoCardRow>
              <ConsultationFeeCard
                {...HOME_CONSULTATION_FEE_CARD_DEMOS.WITH_INSURANCE}
                action={{
                  label: HOME_CONSULTATION_FEE_CARD_ACTION_LABEL,
                  onClick: handleConfirmBookingClick,
                }}
              />
              <ConsultationFeeCard
                {...HOME_CONSULTATION_FEE_CARD_DEMOS.WITH_INSURANCE}
              />
            </HomePageStyles.IconInfoCardRow>
          </HomePageStyles.CardSection>

          <HomePageStyles.CardSection>
            <Typography.Title level={4}>Discount code input</Typography.Title>
            <HomePageStyles.DiscountCodeStack>
              <DiscountCodeInput
                value={discountCodeValue}
                state={discountCodeState}
                onChange={handleDiscountCodeChange}
                onApply={handleDiscountCodeApply}
                onRemove={handleDiscountCodeRemove}
              />
            </HomePageStyles.DiscountCodeStack>
          </HomePageStyles.CardSection>

          <HomePageStyles.CardSection>
            <Typography.Title level={4}>Doctor appointment booking</Typography.Title>
            <HomePageStyles.BookingShowcaseShell>
              <HomePageStyles.BookingShowcasePanel>
                <DoctorAppointmentBooking
                  availableDates={HOME_DOCTOR_BOOKING_AVAILABLE_DATES}
                  slots={bookingSlots}
                  selectedDate={bookingSelectedDate}
                  selectedSlotId={bookingSelectedSlotId}
                  onDateChange={handleBookingDateChange}
                  onSlotChange={handleBookingSlotChange}
                  onBookAppointment={handleBookAppointment}
                  isLoading={isBookingSubmitting}
                  isBookingDisabled={isBookingSubmitting}
                />
              </HomePageStyles.BookingShowcasePanel>
            </HomePageStyles.BookingShowcaseShell>
          </HomePageStyles.CardSection>
        </HomePageStyles.Stack>
      </HomePageStyles.Main>
    </PageShell>
  );
}
