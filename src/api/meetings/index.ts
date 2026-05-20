import { requests } from "@/utility/agent";
import { API_END_POINTS } from "@/utility/api-endpoints";

export const meetingsApi = {
  list: () => requests.get(API_END_POINTS.MEETINGS.MASTER),
};
