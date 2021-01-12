import React from "react"
import { motion } from "framer-motion"

const FadeInWrap = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8 }}
    >
      {children}
    </motion.div>
  )
}

export default FadeInWrap
