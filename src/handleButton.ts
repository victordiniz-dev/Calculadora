import type { Dispatch, SetStateAction } from "react";

export function handleButton(
  value: string,
  setDisplay: Dispatch<SetStateAction<string>>,
) {
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
export function Calcular(value: string, setDisplay: Dispatch<SetStateAction<string>>) {
  try {
    const result = eval(value);
    setDisplay(result.toString());
  } catch (error) {
    setDisplay("Error");
  }
}