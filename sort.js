'use strict';

const quickSort = arr => {
  if (arr.length <= 1) return arr;
  let left = [],
      right = [],
      targetIndex = Math.floor(arr.length / 2),
      target = arr.splice(targetIndex, 1)[0];
  arr.forEach(el => Array.prototype.push.call(el < target ? left : right, el))
  return quickSort(left).concat(target, quickSort(right))
}

const mergeSort = arr => {
  if (arr.length <= 1) return arr;
  let midIndex = Math.ceil(arr.length / 2),
      arr1 = arr.slice(0, midIndex),
      arr2 = arr.slice(midIndex);
  arr1 = mergeSort(arr1);
  arr2 = mergeSort(arr2);
  let ret = [];
  while (arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]) {
      ret.push(arr1.shift())
    } else {
      ret.push(arr2.shift())
    }
  }
  return ret.concat(arr1, arr2)
}

const insertSort = arr => {
  if (arr.length <= 1) return arr;
  let ret = [arr.pop()];
  while (arr.length) {
    const current = arr.pop();
    for (let i = 0; i < ret.length; i++) {
      if (current <= ret[i]) {
        ret.splice(i, 0, current);
        break;
      } else if (i === ret.length - 1){
        ret.push(current);
        break;
      }
    }
  }
  return ret;
}

const arr = insertSort([64,22,86,43,49,63,52,87,99,54,68,73,23,76,98,56,53,65,59])

console.log(arr)