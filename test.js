// Task 1

const findLongestStr = (myStr) => {
  let hashTable = {};
  let counter = 0;

  for (let item of myStr) {
    hashTable[item] = hashTable[item] + 1 || 1;
  }

  counter = Object.keys(hashTable).length;

  return counter;
};

// console.log(findLongestStr("abbbcabcdefef"));

// Task 2
const fakeSort = (arr) => {
  let res = [];

  for (let item of arr) {
    if (typeof item === "number") {
      res.push(item);
    }
  }

  for (let item of arr) {
    if (typeof item === "string") {
      res.push(item);
    }
  }

  return res;
};

// let str = "adasdas";
// let num = 5;

// console.log(typeof str);

// console.log(typeof str === "string");

// console.log(typeof num === "number");

// console.log(fakeSort([2, "b", 4, "d", 3, "a", "c", "e", 5, 1]));

const task5 = (arr, value) => {
  let hashTable = {};

  for (let item of arr) {
    hashTable[item] = true;
  }

  for (let item in hashTable) {
    let temp = value - item;

    if (hashTable[temp]) {
      return [parseInt(item), temp];
    }
  }
};

// console.log(task5([1, 4, 6, 10], 5));

// **********************

const task4 = (word1, word2) => {
  let hashTable1 = {};
  let hashTable2 = {};

  for (let item of word1) {
    hashTable1[item.toLowerCase()] = hashTable1[item] + 1 || 1;
  }

  for (let item of word2) {
    hashTable2[item.toLowerCase()] = hashTable2[item] + 1 || 1;
  }

  for (let item in hashTable1) {
    if (hashTable1[item] !== hashTable2[item]) {
      return false;
    }
  }

  return true;
};

// console.log(task4("hello", "bye"));

const task3 = (mat) => {
  let matrixLength = mat.length - 1;
  let result = [];

  for (let i = 0; i <= matrixLength; i++) {
    // for row
    let temp = [];
    for (let k = matrixLength; k >= 0; k--) {
      temp.push(mat[k][i]);
    }
    result.push(temp);
  }

  return result;
};

// let m = [
//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8],
// ];

// console.log(task3(m));
