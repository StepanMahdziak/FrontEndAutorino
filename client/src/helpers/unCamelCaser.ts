export const unCamelCaser = (camelCaseText: string): string => {
  let camelCaseTextArray = camelCaseText.split("");
  const camelCaseTextArrayLength = camelCaseTextArray.length;
  let spacesCounter = 0;
  for (
    let index = 1;
    index < camelCaseTextArrayLength + spacesCounter;
    index++
  ) {
    if (
      camelCaseTextArray[index].match(/[A-Z]/) &&
      camelCaseTextArray[index - 1] != " "
    ) {
      camelCaseTextArray.splice(index, 0, " ");
      spacesCounter++;
    }
  }
  const unCamelCasedArray = camelCaseTextArray.map((char, index) =>
    index == 0 ? char.toUpperCase() : char.toLowerCase()
  );
  return unCamelCasedArray.join("");
};
