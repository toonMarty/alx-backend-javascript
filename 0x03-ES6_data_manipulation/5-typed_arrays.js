export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const int8View = new DataView(buffer, 0);
  int8View.setInt8(position, value);

  return int8View;
}
