import React from 'react'
import { Text, View } from 'react-native'

export function List({children, ...props}) {
  return (
    <View>
      {
        props.items?.map((item, idx) => <Text key={idx}>{JSON.stringify(item)}</Text>)
      }
    </View>
  )
}