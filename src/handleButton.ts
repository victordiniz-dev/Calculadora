export function handleButton(value, setDisplay) {
  if (value === "C") {
    setDisplay("");
    return;
  }

  if (value === "<") {
    setDisplay((current) => current.slice(0, -1));
    return;
  }

  setDisplay((current) => current + value);
}
