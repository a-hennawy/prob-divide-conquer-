function sortedFrequency(arr, val) {
  let firstIndex = firstOccurence(arr, val);
  if (firstIndex == -1) return firstIndex;
  let lastIndex = lastOccurence(arr, val);
  return lastIndex - firstIndex + 1;
}
const firstOccurence = (arr, val, low = 0, high = arr.length - 1) => {
  if (high >= low) {
    let mid = Math.floor((low + high) / 2);
    if ((mid === 0 || val > arr[mid - 1]) && arr[mid] === val) {
      return mid;
    } else if (val > arr[mid]) {
      return firstOccurence(arr, val, mid + 1, high);
    } else {
      return firstOccurence(arr, val, low, mid - 1);
    }
  }
  return -1;
};

const lastOccurence = (arr, val, low = 0, high = arr.length - 1) => {
  if (high >= low) {
    let mid = Math.floor((low + high) / 2);
    if ((mid === arr.length - 1 || val < arr[mid + 1]) && arr[mid] === val) {
      return mid;
    } else if (val < arr[mid]) {
      return lastOccurence(arr, val, low, mid - 1);
    } else {
      return lastOccurence(arr, val, mid + 1, high);
    }
  }
  return -1;
};

module.exports = sortedFrequency;
