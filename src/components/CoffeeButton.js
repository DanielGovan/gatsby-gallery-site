import React from "react"
import { SiBuymeacoffee } from "react-icons/si"
import { ExternalButton } from "../Elements/links"

const CoffeeButton = () => {
  return (
    <ExternalButton
      icon={<SiBuymeacoffee />}
      href="//www.buymeacoffee.com/lightbydan"
      title="Tip me via Buy Me A Coffee!"
    >
      Buy me a coffee
    </ExternalButton>
  )
}

export default CoffeeButton
