export const getArrowIndex = () => {
  if (typeof window !== 'undefined') {
    const screenWidth = window.innerWidth

    if (screenWidth < 390) {
      return 2
    } else if (screenWidth < 450) {
      return 2.1
    } else if (screenWidth < 550) {
      return 2.2
    } else {
      return 2.3
    }
  }
}
