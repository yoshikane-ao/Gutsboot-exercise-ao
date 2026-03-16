export function partitionByPivot(arr: number[], pivot: number): { left: number[]; right: number[] } {
  const left: number[] = [];
  const right: number[] = [];

  for (const x of arr) {
    if (x < pivot) {
      left.push(x);
    } else if (x > pivot) {
      right.push(x);
    }
    // pivotと等しい場合は、今回は捨てる（概念用）
  }

  return { left, right };
}
