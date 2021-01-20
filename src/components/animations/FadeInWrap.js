import React from "react"
import { motion } from "framer-motion"

const FadeInWrap = ({ children, after = 0.8 }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: after }}
    >
      {children}
    </motion.div>
  )
}

export default FadeInWrap
