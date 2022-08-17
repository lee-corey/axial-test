export default function validate(input) {
  const reg = /\.?([0-9])+(k|m|b)?/;
  if (reg.test(input) && reg.exec(input)[0] === input) {
    return true;
  }
  return false;
}
