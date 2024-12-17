function extract(elementId) {
  const element = document.getElementById(elementId);

  if (!element) {
    return "";
  }

  const text = element.textContent;

  // Use a regular expression to match all parenthesized text
  const matches = text.match(/\(([^)]+)\)/g);

  // If no matches are found, return an empty string
  if (!matches) {
    return "";
  }

  const result = matches.map((match) => match.slice(1, -1)).join("; ");

  return result;
}
