import { STATIC_VALUES } from "@/utility/strings";
import { cookieAgent } from "@/utility/cookies";

export function getUserRoleProfileToken(): string | null {
  const token = cookieAgent.get(STATIC_VALUES.COMMON.COOKIE_KEYS.ROLE_TOKEN);
  if (typeof token === "string" && token.length > 0) {
    return token;
  }
  return null;
}
