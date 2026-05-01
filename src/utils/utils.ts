export function formatDate(dateString: string) {
  const date = new Date(dateString);

  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const year = date.getFullYear();

  return `${month}-${day}-${year}`;
}
export function truncateString(text: string, noOfWords: number) {
  if (text.split(" ").length < noOfWords) return text;
  const truncatedText = text.split(" ").slice(0, noOfWords).join(" ");
  return `${truncatedText}...`;
}

export function getInitial(string: string) {
  const initial = string.split("").slice(0, 1);
  return initial;
}
