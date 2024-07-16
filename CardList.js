import React from 'react'
import { View,Text,StyleSheet,TouchableOpacity } from 'react-native-reanimated/lib/typescript/Animated'
const CardList = (props) => {
  return (
    <View>
        <Text style={styles.txt}>
            {props.value}
        </Text>
    </View>
  )
}

export default CardList
const styles = StyleSheet.create({
    txt:{
        color:"red",
    }
})