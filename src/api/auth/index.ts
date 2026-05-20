import { requests } from "@/utility/agent";
import { API_END_POINTS } from "@/utility/api-endpoints";

export const authApi = {
  getSession: () => requests.get(API_END_POINTS.AUTH.SESSION),
};
