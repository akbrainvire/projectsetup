"use client";

import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Icons } from "@/assets/svg";
import ConsultPhysicianHero from "@/components/common/ConsultPhysicianHero";
import Loader from "@/components/common/Loader";
import DoctorAppointmentCard from "@/components/doctor/DoctorAppointmentCard";
import ServiceNavigationCard from "@/components/selection/ServiceNavigationCard";
import { HOME_CONSTANTS } from "@/modules/home/constant";
import { HomeStyles } from "@/modules/home/styles";
import type { HomeConsultationContextValue } from "@/modules/home/type";
import { resolveHomeNavCardIcon } from "@/modules/home/utility";
import { useForm } from "@/hooks/useForm";
import { TRANSLATION_KEYS } from "@/utility/strings";

const homeKeys = TRANSLATION_KEYS.HOME;
const formKeys = HOME_CONSTANTS.FORM_KEYS;

export function Home() {
  const { t } = useTranslation("common");
  const [isPageLoading, setIsPageLoading] = useState(true);
  const [isStartingVideoCall, setIsStartingVideoCall] = useState(false);
  const [joiningAppointmentId, setJoiningAppointmentId] = useState<string | null>(
    null
  );

  const homeForm = useForm({
    [formKeys.CONSULTATION_CONTEXT]: {
      value: {
        label: t(homeKeys.FORM.DEFAULT_CONTEXT_LABEL),
        value: HOME_CONSTANTS.DEMO.USER_NAME,
      } as HomeConsultationContextValue,
      error: "",
      required: true,
    },
  });

  const consultationContextError = String(
    homeForm.errors[formKeys.CONSULTATION_CONTEXT] ?? ""
  );

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsPageLoading(false);
    }, HOME_CONSTANTS.LOADER_SIMULATION_MS);
    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  const handleStartVideoCall = useCallback(() => {
    homeForm.validateSpecificFields(
      [formKeys.CONSULTATION_CONTEXT],
      (_values: unknown, validationErrors: Record<string, string> | null) => {
        if (validationErrors) {
          return;
        }
        setIsStartingVideoCall(true);
        setTimeout(() => {
          setIsStartingVideoCall(false);
        }, HOME_CONSTANTS.LOADER_SIMULATION_MS);
      }
    );
  }, [homeForm]);

  const handleConsultationHistoryClick = useCallback(() => {}, []);

  const handleOrdersClick = useCallback(() => {}, []);

  const handleJoinCall = useCallback((appointmentId: string) => {
    setJoiningAppointmentId(appointmentId);
    setTimeout(() => {
      setJoiningAppointmentId(null);
    }, HOME_CONSTANTS.LOADER_SIMULATION_MS);
  }, []);

  const greetingText = t(homeKeys.GREETING, {
    name: HOME_CONSTANTS.DEMO.USER_NAME,
  });

  return (
    <HomeStyles.Page>
      {isPageLoading ? (
        <Loader overlay label={t(homeKeys.LOADER.LABEL)} />
      ) : null}
      <HomeStyles.Greeting>{greetingText}</HomeStyles.Greeting>
      <HomeStyles.HeroSection>
        <HomeStyles.HeroPrimary>
          <ConsultPhysicianHero
            title={t(homeKeys.HERO.TITLE)}
            description={t(homeKeys.HERO.DESCRIPTION)}
            badgeLabel={t(homeKeys.HERO.BADGE)}
            actionLabel={t(homeKeys.HERO.ACTION)}
            actionIcon={<Icons.VideoIcon />}
            onStartVideoCall={handleStartVideoCall}
            isActionLoading={isStartingVideoCall}
            isActionDisabled={isStartingVideoCall}
          />
          {consultationContextError ? (
            <span role="alert">{consultationContextError}</span>
          ) : null}
        </HomeStyles.HeroPrimary>
        <HomeStyles.NavColumn>
          {HOME_CONSTANTS.DEMO.NAV_CARDS?.map((card) => (
            <HomeStyles.NavCardSlot key={card.id}>
              <ServiceNavigationCard
                title={t(card.titleKey)}
                subtitle={t(card.subtitleKey)}
                icon={resolveHomeNavCardIcon(card.iconKey)}
                iconBackgroundColor={card.iconBackgroundColor}
                onClick={
                  card.id === HOME_CONSTANTS.NAV_CARD_KEYS.CONSULTATION_HISTORY
                    ? handleConsultationHistoryClick
                    : handleOrdersClick
                }
              />
            </HomeStyles.NavCardSlot>
          ))}
        </HomeStyles.NavColumn>
      </HomeStyles.HeroSection>
      <HomeStyles.AppointmentsSection>
        <HomeStyles.SectionTitle>
          {t(homeKeys.APPOINTMENTS.SECTION_TITLE)}
        </HomeStyles.SectionTitle>
        <HomeStyles.AppointmentsGrid>
          {HOME_CONSTANTS.DEMO.APPOINTMENTS?.map((appointment) => (
            <HomeStyles.AppointmentCardSlot key={appointment.id}>
              <DoctorAppointmentCard
                doctorName={t(appointment.doctorNameKey)}
                specialty={t(appointment.specialtyKey)}
                appointmentType={t(appointment.appointmentTypeKey)}
                forLabel={t(homeKeys.APPOINTMENTS.FOR_LABEL)}
                patientFor={t(appointment.patientForKey)}
                appointmentTime={t(appointment.appointmentTimeKey)}
                actionLabel={t(appointment.actionLabelKey)}
                onActionClick={() => handleJoinCall(appointment.id)}
              />
            </HomeStyles.AppointmentCardSlot>
          ))}
        </HomeStyles.AppointmentsGrid>
      </HomeStyles.AppointmentsSection>
      {joiningAppointmentId ? (
        <Loader overlay label={t(homeKeys.LOADER.JOINING)} />
      ) : null}
    </HomeStyles.Page>
  );
}
