"use client"

import { useState } from "react"

export const useToggle = (): [boolean, () => void] => {
  const [state, setState] = useState(false)
  const toggleState = () => {
    setState((prev) => !prev)
  }

  return [state, toggleState]
}
