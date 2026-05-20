import CryptoJS from "crypto-js";
import { Cookies } from "react-cookie";
import { STATIC_VALUES } from "@/utility/strings";

const SECRET_KEY = process.env.SECRET_KEY || "your-secret-key";

const cookies = new Cookies();

function encrypt(value: string): string {
  return CryptoJS.AES.encrypt(value, SECRET_KEY).toString();
}

function decryptPayload(ciphertext: string): string {
  const bytes = CryptoJS.AES.decrypt(ciphertext, SECRET_KEY);
  return bytes.toString(CryptoJS.enc.Utf8);
}

function set(name: string, value: unknown, expireMs: number): void {
  const payload = encrypt(JSON.stringify(value));
  const expires = new Date(Date.now() + expireMs);
  cookies.set(name, payload, { path: "/", expires });
}

function get(name: string): unknown {
  const raw = cookies.get(name);
  if (typeof raw !== "string" || raw.length === 0) {
    return undefined;
  }
  let decoded = "";
  try {
    decoded = decryptPayload(raw);
  } catch {
    return undefined;
  }
  if (!decoded) {
    return undefined;
  }
  try {
    return JSON.parse(decoded) as unknown;
  } catch {
    return undefined;
  }
}

function remove(name: string): void {
  if (cookies.get(name) !== undefined) {
    cookies.remove(name, { path: "/" });
  }
}

function getAll(): Record<string, unknown> {
  const all = cookies.getAll();
  const result: Record<string, unknown> = {};
  Object.keys(all).forEach((key: string) => {
    const v = get(key);
    if (v !== undefined) {
      result[key] = v;
    }
  });
  return result;
}

function clean(deleteAll = true): void {
  const all = cookies.getAll();
  const languageKey = STATIC_VALUES.COMMON.COOKIE_KEYS.LANGUAGE;
  const partialKeep = new Set<string>([
    STATIC_VALUES.COMMON.COOKIE_KEYS.ACCESS_TOKEN,
    STATIC_VALUES.COMMON.COOKIE_KEYS.ROLE_TOKEN,
    STATIC_VALUES.COMMON.COOKIE_KEYS.ROLE,
    STATIC_VALUES.COMMON.COOKIE_KEYS.DROPDOWN_DATA,
  ]);
  Object.keys(all).forEach((name: string) => {
    if (deleteAll) {
      if (name !== languageKey) {
        remove(name);
      }
    } else if (!partialKeep.has(name)) {
      remove(name);
    }
  });
}

export const cookieAgent = {
  get,
  set,
  remove,
  getAll,
  decrypt: decryptPayload,
  clean,
};
