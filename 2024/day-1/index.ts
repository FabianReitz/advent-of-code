const inputFile = Bun.file('2024/day-1/input.txt');
const text = await inputFile.text();
const lines = text.split('\n');

const firstArray: number[] = [];
const secondArray: number[] = [];

lines.forEach((line) => {
  const [first, second] = line.split('   ').map(Number);
  firstArray.push(first);
  secondArray.push(second);
});

// Day 1: Part 1
// const firstSorted = firstArray.sort((a, b) => a - b);
// const secondSorted = secondArray.sort((a, b) => a - b);
const firstSorted = firstArray.sort();
const secondSorted = secondArray.sort();

let diffSum = 0;

for (let i = 0; i < firstSorted.length; i++) {
  diffSum += Math.abs(firstSorted[i] - secondSorted[i]);
}

console.log('Part 1: ', diffSum);
// Solution 1319616

// Day 1: Part 2
const getOccurrence = (array: number[], value: number) => {
  return array.filter((v) => v === value).length;
};

let similarityScore = 0;

firstArray.forEach((value) => {
  const occurrence = getOccurrence(secondArray, value);
  similarityScore += occurrence * value;
});

console.log('Part 2: ', similarityScore);
// Solution 27267728
