import { FlatList, Text, View } from 'react-native'

import { CATEGORIES } from '../../constants/categories'
import CategoryItem from '../../components/categoryItem'
import React from 'react'
import { styles } from './styles'

const HomeScreen = ({ navigation }) => {
  const selectCategory = (category) => {
    navigation.navigate('Category', { id: category['id'], category: category })
  }
  const renderItem = ({ item }) => <CategoryItem item={item} onSelected={selectCategory} />

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categorias</Text>
      <FlatList
        style={{ height: '90%' }}
        contentContainerStyle={{ flexGrow: 1 }}
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  )
}

export default HomeScreen
