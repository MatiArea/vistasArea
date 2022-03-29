import { FlatList, Text, View } from 'react-native'

import { PRODUCTS } from '../../constants/products'
import ProductItem from '../../components/productItem'
import React from 'react'
import { styles } from './styles'

const CategoryScreen = ({ navigation, route }) => {
  const { id } = route['params']

  const productsFilter = PRODUCTS.filter((product) => product['category'] === id)

  const selectProduct = (product) => {
    navigation.navigate('Product', { product, name: product['name'] })
  }

  const renderItem = ({ item }) => <ProductItem item={item} onSelected={selectProduct} />

  return (
    <View style={styles.container}>
      <FlatList
        data={productsFilter}
        contentContainerStyle={{ flexGrow: 1 }}
        keyExtractor={(item) => item['id']}
        renderItem={renderItem}
      />
    </View>
  )
}

export default CategoryScreen
