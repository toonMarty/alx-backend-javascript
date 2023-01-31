export default function getStudentsByLocation(stuArrOfObj, city) {
  return stuArrOfObj.filter((element) => element.location === city);
}
