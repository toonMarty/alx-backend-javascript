export default function hasValuesFromArray(set, array) {
  if (array.every((element) => set.has(element))) {
    return true;
  }
  return false;
}
