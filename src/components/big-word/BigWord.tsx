import React from 'react'

export type BigWordProps = {
  contentColor: string;
  size: number;
  content: string;
  shadowColor: string;
}


function generateTextShadow(color: string, size: number) {
  let shadow = "";
  for (let i = 0; i < size; i++) {
    shadow += `${i + 1}px ${i + 1}px ${color}${i === size - 1 ? "" : ","}`
  }
  return shadow
}


export default function BigWord({ contentColor, shadowColor, content, size }: BigWordProps) {
  return (
    <h2 style={{ color: contentColor, fontSize: `${size * 8}px`, textShadow: `${generateTextShadow(shadowColor, size)}`, fontWeight: "bold", fontFamily: "sans-serif" }}>{content}</h2 >
  )
}
