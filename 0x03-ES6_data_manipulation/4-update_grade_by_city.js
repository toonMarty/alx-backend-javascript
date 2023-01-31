export default function updateStudentGradeByCity(stuArrOfObj, city, newGrades) {
  return stuArrOfObj.filter((element) => element.location === city).map((stu) => {
    const stuGrade = newGrades.filter((element) => element.studentId === stu.id)
      .map((element) => element.grade)[0];
    const grade = stuGrade || 'N/A';
    return { ...stu, grade };
  });
}
