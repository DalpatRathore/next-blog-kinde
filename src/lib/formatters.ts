const DATE_TIME_FOMATTER = new Intl.DateTimeFormat("en", {
  dateStyle: "medium",
  timeStyle: "short",
});

export const formatDateTime = (date: Date) => {
  return DATE_TIME_FOMATTER.format(date);
};
