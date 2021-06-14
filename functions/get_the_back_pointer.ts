export default function get_the_back_pointer(
  pointer: number,
  max_pointer: number
) {
  if (pointer == 0) {
    pointer = max_pointer + 1;
  }
  return --pointer;
}
