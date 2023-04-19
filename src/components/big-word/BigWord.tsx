import React from 'react'
import { BigWordProps } from "../../../types";


function generateTextShadow(color: string, size: number) {
  let shadow = "";
  for (let i = 0; i < size; i++) {
    shadow += `${i + 1}px ${i + 1}px ${color}${i === size - 1 ? "" : ","}`
  }
  return shadow
}


export default function BigWord({ contentColor, shadowColor, content, size, kerning }: BigWordProps) {
  console.log(contentColor)
  return (
    <span style={{ color: contentColor, marginRight: `${kerning}px`, fontSize: `${size * 8}px`, textShadow: `${generateTextShadow(shadowColor, size)}`, fontWeight: "bold", fontFamily: "sans-serif" }}>{content}</span >
  )
}


