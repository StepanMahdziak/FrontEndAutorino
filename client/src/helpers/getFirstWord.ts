export const getFirstWordinCamelCase = (camelCaseText: string) => {
  const camelCaseTextArray = camelCaseText.split("");
  let camelCaseTextArrayLength = camelCaseTextArray.length;
  for (let index = 0; index < camelCaseTextArrayLength; index++) {
    if (camelCaseText[index].match(/[A-Z]/)) {
      camelCaseTextArray.splice(index);
      return camelCaseTextArray.join("");
    }
  }
  return camelCaseTextArray.join("");
};
