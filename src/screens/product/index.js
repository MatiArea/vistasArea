import { Alert, Button, Image, Text, View } from 'react-native'

import { COLORS } from '../../constants/theme'
import React from 'react'
import { styles } from './styles'

const ProductDetail = ({ navigation, route }) => {
  const { product } = route.params
  const { name, description, price, image } = product
  return (
    <View style={styles.container}>
      <View style={styles.topData}>
        <Text style={styles.title}>{name}</Text>
        <Image style={styles.image} source={image} />
      </View>
      <View style={styles.middleData}>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.price}>${price}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <Button title="Volver" onPress={() => navigation.goBack()} color={COLORS.color1} />
        <Button
          title="Agregar"
          onPress={() => {
            Alert.alert('Felicitaciones', 'Se agrego al carrito correctamente', [
              { text: 'Aceptar', onPress: () => null },
            ])
          }}
          color={COLORS.color2}
        />
      </View>
    </View>
  )
}

export default ProductDetail
