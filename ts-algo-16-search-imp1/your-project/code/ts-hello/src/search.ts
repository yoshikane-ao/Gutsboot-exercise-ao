export function binarySearchRightmost(sortedArr: number[], target: number): number {
    let left = 0;
    let right = sortedArr.length - 1;
    let answer = -1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const value = sortedArr[mid];

        if (value === target) {
            answer = mid;

            left = mid + 1;
            continue;
        }

        if (value < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return answer;
}


export function lowerBound(sortedArr: number[], target: number): number {
    let left = 0;
    let right = sortedArr.length;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        const value = sortedArr[mid];

        if (value < target) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return left;
}


export function upperBound(sortedArr: number[], target: number): number {
    let left = 0;
    let right = sortedArr.length;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        const value = sortedArr[mid];

        if (value <= target) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return left;
}


export function countOccurrences(sortedArr: number[], target: number): number {
    const lb = lowerBound(sortedArr, target);
    const ub = upperBound(sortedArr, target);
    return ub - lb;
}