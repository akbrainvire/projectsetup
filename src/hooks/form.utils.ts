export const is_required = (
  value: unknown,
  isRequired: boolean,
  error: string,
  field: { type?: string },
) => {
  if (Array.isArray(value)) {
    if (value.length === 0 && isRequired) return error;
  } else if (field?.type === "boolean" && isRequired) {
    if (typeof value !== "boolean") {
      return error;
    }
  } else if (!value && isRequired) return error;
  return "";
};

export const is_object = (value: unknown) => {
  return typeof value === "object" && value !== null;
};

export const get_prop_values = (stateSchema: Record<string, unknown>, prop?: string) => {
  return Object.keys(stateSchema ?? {}).reduce(
    (accumulator: Record<string, unknown>, curr: string) => {
      const field = stateSchema?.[curr] as Record<string, unknown> | undefined;
      accumulator[curr] = !prop ? false : field?.[prop];
      return accumulator;
    },
    {},
  );
};

export const is_micro_field_required = (
  value: unknown,
  isRequired: boolean,
  error: string,
  type = "",
) => {
  if (Array.isArray(value)) {
    if (value.length === 0 && isRequired) return error;
  } else if (type === "NUMBER" || type === "PERCENTAGE_OBTAINED") {
    const isNumeric = typeof value === "number" && !Number.isNaN(value);
    if (!isNumeric && !value && value !== 0) {
      return error;
    }
  } else if (!value && isRequired) return error;
  return "";
};
