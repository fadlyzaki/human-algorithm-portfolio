export const normalizeAccessKey = (value) =>
  String(value || "").trim().toLowerCase();

export const getConfiguredAccessKeys = (env = import.meta.env) =>
  [
    env?.VITE_PROTECTED_PASSWORD,
    env?.VITE_PROTECTED_PASSWORD_ALT,
  ]
    .map(normalizeAccessKey)
    .filter(Boolean);

export const canUnlockWithAccessKey = (input, env = import.meta.env) => {
  const cleanInput = normalizeAccessKey(input);
  if (!cleanInput) return false;

  return getConfiguredAccessKeys(env).includes(cleanInput);
};
