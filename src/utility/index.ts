import i18n, { type SupportedLanguage } from "@/i18n";
import { STORAGE_KEYS } from "@/utility/strings";
import { getUserRoleProfileToken } from "@/utility/tokens";
import { notifyError, notifySuccess } from "@/utility/notify";

export { getUserRoleProfileToken, notifyError, notifySuccess };

export function formatIsoDate(value: Date | string): string {
  const date = typeof value === "string" ? new Date(value) : value;
  return date.toISOString();
}

export function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

export function formatNumber(value: number): string {
  return new Intl.NumberFormat().format(value);
}

export function readLocalStorage(key: string): string | null {
  if (typeof window === "undefined") return null;
  return window.localStorage.getItem(key);
}

export function writeLocalStorage(key: string, value: string): void {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(key, value);
}

export function noop(): void {}

export function toErrorMessage(error: unknown): string {
  if (error instanceof Error) return error.message;
  return "Unknown error";
}

export function switchLanguage(language: SupportedLanguage): void {
  void i18n.changeLanguage(language);
  writeLocalStorage(STORAGE_KEYS.LOCALE, language);
}

export function darkenColor(hex: string, amount: number): string {
  const normalized = hex.replace("#", "");
  if (normalized.length !== 6) {
    return hex;
  }
  const num = parseInt(normalized, 16);
  let r = (num >> 16) & 0xff;
  let g = (num >> 8) & 0xff;
  let b = num & 0xff;
  const f = 1 - amount;
  r = Math.max(0, Math.min(255, Math.floor(r * f)));
  g = Math.max(0, Math.min(255, Math.floor(g * f)));
  b = Math.max(0, Math.min(255, Math.floor(b * f)));
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
}
