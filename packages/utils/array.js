export function splitBy(arr, count = 1) {
  const n = arr.length
  const ans = []
  for (let i = 0; i < n; i += count) {
    ans.push(arr.slice(i, i + count))
  }
  return ans
}
