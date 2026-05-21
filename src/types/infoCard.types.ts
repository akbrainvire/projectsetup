export type InfoCardStatus = {
  text: string;
  textColor: string;
  bgColor: string;
};

export type InfoCardItem = {
  label: string;
  value: string;
  status?: InfoCardStatus;
};

export type InfoCardProps = {
  items: InfoCardItem[];
  className?: string;
};
