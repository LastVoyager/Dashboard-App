const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
] as const;

interface MonthsConfig {
  count?: number;
  section?: number;
}

export const months = (config: MonthsConfig = {}): string[] => {
  const { count = 12, section } = config;
  const values: string[] = [];

  for (let i = 0; i < count; ++i) {
    const value = MONTHS[Math.ceil(i) % 12];
    values.push(section ? value.substring(0, section) : value);
  }

  return values;
};
