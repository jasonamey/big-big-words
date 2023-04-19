import React from 'react'
import { ComponentType } from "react";
import { BigWordProps } from "../../../../types";

export function withLineBreaks<T extends BigWordProps>(
  WrappedComponent: ComponentType<T>
) {
  const ComponentWithLineBreaks = (props: BigWordProps) => {
    const { content } = props;
    const stringToFormat = content.split("@BREAK@")
    console.log(stringToFormat)
    return stringToFormat.map(item => {
      return (<div key="item">
        {item.split("").map(char => {
          return <WrappedComponent key={item} {...(props as T)} content={char} />
        })}
      </div>)

    })
  }
  return ComponentWithLineBreaks
}


