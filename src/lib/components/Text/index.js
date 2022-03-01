import React from 'react'
import { Text as RNText } from 'react-native'

export function Text({text, ...props}) {
  return (
    <RNText {...props}>
      {text}
    </RNText>
  )
}