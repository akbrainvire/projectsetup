import styled from "styled-components";
import { SITE_COLORS as c } from "@/utility/strings";

const Page = styled.main`
  width: 100%;
  min-height: 100vh;
  padding: 23px 16px 80px;
  background: ${c.WHITE};
  font-family:
    Noto Sans,
    Noto Sans Arabic,
    sans-serif;
`;

const FormCard = styled.form`
  width: min(849px, 100%);
  margin: 0 auto;
  padding: 20px 25px 24px;
  border: 1px solid ${c.BORDER_SUBTLE};
  border-radius: 16px;
  background: ${c.WHITE};
  box-shadow: 0 2px 4px rgba(15, 23, 42, 0.04);
`;

const Title = styled.h1`
  margin: 0 0 17px;
  color: ${c.PATIENT_PROFILE_PRIMARY};
  font-family:
    Noto Sans,
    Noto Sans Arabic,
    sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  column-gap: 17px;
  row-gap: 27px;

  .patient-profile-field {
    gap: 5px;
  }

  .patient-profile-field .label_group {
    min-height: 17px;
  }

  .patient-profile-field label {
    line-height: 17px;
  }

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

const FullWidthField = styled.div`
  grid-column: 1 / -1;
`;

const ActionRow = styled.div`
  grid-column: 1 / -1;
  margin-top: 4px;

  .formBtnText {
    font-size: 14px;
    font-weight: 600;
    line-height: 17px;
    text-align: center;
  }
`;

export const PatientProfileStyles = {
  Page,
  FormCard,
  Title,
  FormGrid,
  FullWidthField,
  ActionRow,
};
