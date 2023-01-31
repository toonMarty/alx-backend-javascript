export default function getListStudentIds(stuArrOfObj) {
  if (Array.isArray(stuArrOfObj)) {
    return stuArrOfObj.map((element) => element.id);
  }
  return [];
}
