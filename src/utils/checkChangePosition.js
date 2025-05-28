export const checkChangePosition = (row, col, oldRow, oldCol) => {
  if (row !== oldRow || col !== oldCol) {
    return true
  } else {
    return false
  }
}
