export default class ClassRoom {
  constructor(_maxStudentsSize) {
    if (Number.isInteger(_maxStudentsSize)) {
      this._maxStudentsSize = _maxStudentsSize;
    }
  }
}
