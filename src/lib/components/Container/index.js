import React from 'react'
import { View } from 'react-native'

export function Container({children, ...props}) {
  return (
    <View {...props} style={{ width: props?.style?.width || '200px', height: props?.style?.height || '200px' }}>
      <View style={{
        background: '#fff',
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