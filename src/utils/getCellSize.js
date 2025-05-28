export const getCellSize = () => {
  
  if (typeof window !== 'undefined') {
    const screenWidth = window.innerWidth
    if (screenWidth < 390) {
      return 45
    } else if (screenWidth < 450) {
      return 55
    } else if (screenWidth < 550) {
      return 65
    } else {
      return 75
    }
  }
}
