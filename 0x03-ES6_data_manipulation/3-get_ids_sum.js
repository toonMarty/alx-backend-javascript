import getListStudentIds from './1-get_list_student_ids';

export default function getStudentIdsSum(stuArrOfObj) {
  return getListStudentIds(stuArrOfObj).reduce((element, nextElement) => element + nextElement, 0);
}
