export default function get_the_next(pointer: number, max_pointer: number) {
  if (pointer === max_pointer) {
    pointer = -1;
  }
  return ++pointer;
}
