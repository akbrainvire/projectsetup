import { ExgDetailView } from "@/modules/exg/ExgDetailView";

type ExgDetailPageProps = {
  params: Promise<{ id: string }>;
};

export default async function ExgDetailPage({ params }: ExgDetailPageProps) {
  const { id } = await params;
  return <ExgDetailView id={id} />;
}
