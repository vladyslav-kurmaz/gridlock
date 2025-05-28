export const getPaddingSize = () => {
  if (typeof window !== 'undefined') {
    const screenWidth = window.innerWidth

    if (screenWidth < 390) {
      return 4
    } else if (screenWidth < 450) {
      return 6
    } else if (screenWidth < 550) {
      return 8
    } else {
      return 10
    }
  }
}
