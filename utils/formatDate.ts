export const formatDate = (date: Date) => {
  const formatter = new Intl.DateTimeFormat("en-US", {
    month: "short",
    year: "numeric",
  });

  return formatter.format(date);
};
