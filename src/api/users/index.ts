import { requests } from "@/utility/agent";
import { API_END_POINTS } from "@/utility/api-endpoints";

export const usersApi = {
  list: () => requests.get(API_END_POINTS.USERS.MASTER),
};
