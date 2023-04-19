import React from 'react'
import { ComponentType } from "react";
import { BigWordProps } from "../../../../types";

export function withFormatting<T extends BigWordProps>(
  WrappedComponent: ComponentType<T>
) {
  const ComponentWithFormatting = (props: BigWordProps) => {
    const { content } = props;
    const stringToFormat = content.split("@BR@")
    return stringToFormat.map((item, idx) => {
      return (<div key={idx}>
        {item.split("").map((char, cidx) => {
          return <WrappedComponent key={`${char}_${idx}_${cidx}`} {...(props as T)} content={char} />
        })}
      </div>)

    })
  }
  return ComponentWithFormatting
}


