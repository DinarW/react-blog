export const formatCreatedAt = (date) => {
  return new Date(date)
    .toLocaleString("RU", {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
    })
    .replace("г.,", "В");
};
