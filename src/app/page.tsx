import { redirect } from "next/navigation";
import { ROUTES } from "@/utility/strings";

export default function RootPage() {
  redirect(ROUTES.HOME_DASHBOARD);
}
