const binarySearch = (target, array) => {
  let first = 0
  let last = array.length - 1

  while (first <= last) {
    const mid = Math.floor((last + first) / 2)
    console.log(mid)
    if (target === array[mid]) {
      return mid
    }
    if (array[mid] > target) {
      last = mid - 1
    } else {
      first = mid + 1
    }
  }
  return null
}

