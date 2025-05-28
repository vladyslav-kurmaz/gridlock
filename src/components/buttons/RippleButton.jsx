import React, { useState, useEffect, useRef } from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'

const RippleButton = ({
  className = '',
  disabled = false,
  children,
  onClick = () => {}
}) => {
  const [ripples, setRipples] = useState([])
  const buttonRef = useRef(null)

  useEffect(() => {
    const rippleEffect = (event) => {
      const target = buttonRef.current
      const { left, top } = target.getBoundingClientRect()

      const x = event.clientX - left
      const y = event.clientY - top

      const diameter = Math.max(target.clientWidth, target.clientHeight) * 2
      const radius = diameter / 2

      const newRipple = {
        x,
        y,
        radius,
        id: Date.now()
      }

      setRipples((prev) => [...prev, newRipple])

      setTimeout(() => {
        setRipples((prev) =>
          prev.filter((ripple) => ripple.id !== newRipple.id)
        )
      }, 1000)
    }

    const button = buttonRef.current
    button.addEventListener('click', rippleEffect)

    return () => {
      button.removeEventListener('click', rippleEffect)
    }
  }, [setRipples])

  return (
    <motion.button
      ref={buttonRef}
      layout
      type='button'
      className={`relative overflow-hidden shadow ${className} !outline-none ${
        disabled && '!pointer-events-none'
      }`}
      disabled={disabled}
      onClick={onClick}
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      {children}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className='ripple'
          style={{
            position: 'absolute',
            left: ripple.x - ripple.radius + 'px',
            top: ripple.y - ripple.radius + 'px',
            width: ripple.radius * 2 + 'px',
            height: ripple.radius * 2 + 'px',
            borderRadius: '50%',
            backgroundColor: 'rgba(0, 0, 0, 0.3)', 
            transform: 'scale(0)', 
            animation: 'ripple-animation 1s ease-out' 
          }}
        />
      ))}
    </motion.button>
  )
}

export default RippleButton
