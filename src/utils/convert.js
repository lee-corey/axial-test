export default function convert(input) {
  // convert financial number to number
  let dotFlag = false;
  let number = "";
  let suffix = "";
  let result = "";

  for (const ch of input) {
    if (ch === ".") {
      dotFlag = true;
    } else if (ch >= "0" && ch <= "9") {
      number += ch;
    } else if (ch === "k" || ch === "m" || ch === "b") {
      suffix = ch;
    }
  }
  if (dotFlag) {
    number = "0." + number;
  }
  if (suffix) {
    result =
      parseFloat(number) *
      Math.pow(10, suffix === "k" ? 3 : suffix === "m" ? 6 : 9);
  } else {
    result = parseFloat(number);
  }

  return Number(result).toLocaleString();
}
