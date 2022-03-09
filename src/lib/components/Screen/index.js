import React from 'react'
import { View } from 'react-native'

export function Screen({children, ...props}) {
  return (
    <View {...props} style={{ width: props?.style?.width || '375px', height: props?.style?.height || '667px' }}>
      <View style={{
        background: '#fff',
        boxShadow: 'inset 0 0 0 1px #ccc',
        position: 'absolute',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
      }}>
        {children}
      </View>
    </View>
  )
}