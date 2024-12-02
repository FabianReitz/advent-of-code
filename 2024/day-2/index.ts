const inputFile = Bun.file('2024/day-2/input.txt');
const text = await inputFile.text();
const reports = text
  .split('\n')
  .map((level: string) => level.split(' ').map(Number));

const isSafe = (report: number[]) => {
  let isIncreasing = true;
  let isDecreasing = true;

  for (let i = 1; i < report.length; i++) {
    const currentLevel = report[i];
    const previousLevel = report[i - 1];

    if (currentLevel <= previousLevel) {
      isIncreasing = false;
    }

    if (currentLevel >= previousLevel) {
      isDecreasing = false;
    }

    if (
      Math.abs(currentLevel - previousLevel) < 1 ||
      Math.abs(currentLevel - previousLevel) > 3
    ) {
      return false;
    }
  }

  return isIncreasing || isDecreasing;
};

let safeReports = 0;

reports.forEach((report) => {
  if (isSafe(report)) {
    safeReports++;
  }
});

console.log('Number of safe reports:', safeReports); // Solution 403
