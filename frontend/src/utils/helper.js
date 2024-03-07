export function extractErrorMessage(errorString) {
  const prefix = "Error: ";
  if (errorString.startsWith(prefix)) {
    return errorString.slice(prefix.length);
  }
  return errorString;
}
