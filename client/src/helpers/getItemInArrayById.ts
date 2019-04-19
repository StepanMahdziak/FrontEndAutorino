export const getItemInArrayById = (array: any[], id: number) => {
  const FILTERED_ARRAY = array.filter(item => item.id == id);
  return FILTERED_ARRAY[0];
};
