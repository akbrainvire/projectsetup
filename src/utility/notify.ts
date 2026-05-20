import { toast } from "react-toastify";

const TOAST_OPTIONS = {
  position: "top-right" as const,
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
};

export function notifyError(message: unknown): void {
  const text =
    typeof message === "string"
      ? message
      : message && typeof message === "object" && "message" in message
        ? String((message as { message?: unknown }).message ?? "Error")
        : "Something went wrong";
  toast.error(text, TOAST_OPTIONS);
}

export function notifySuccess(message: string): void {
  toast.success(message, TOAST_OPTIONS);
}
