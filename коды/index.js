const makeItFunny = (str, n) => {
  let i = 0;
  let result = "";
  while (i < str.lenth) {
    if ((i + 1) % n == 0) {
      str[i] = str[i].toUpperCase();
    }
    result = `${result}${str[i]}`;
    i++;
  }
  return result;
};
const text = "I never look back";
// Каждый третий элемент
console.log(makeItFunny(text, 3));
