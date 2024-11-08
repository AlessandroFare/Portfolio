export const theme = {
  colors: {
    primary: '#000000',
    secondary: '#666666',
    accent: '#0066FF',
    background: '#FFFFFF',
    backgroundDark: '#000000',
    text: '#000000',
    textDark: '#FFFFFF',
  },
  transitions: {
    default: 'all 0.3s ease-in-out',
    slow: 'all 0.5s ease-in-out',
    fast: 'all 0.2s ease-in-out',
  },
  animations: {
    pageTransition: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: 20 },
      transition: { duration: 0.3, ease: "easeInOut" }
    },
    imageTransition: {
      initial: { opacity: 0, scale: 0.95 },
      animate: { opacity: 1, scale: 1 },
      transition: { delay: 0.2, duration: 0.5 }
    },
    linkHover: {
      scale: 1.05,
      x: 5,
      transition: { duration: 0.2 }
    }
  }
}; 