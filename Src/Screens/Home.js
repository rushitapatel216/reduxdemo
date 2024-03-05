import {StyleSheet, Text, View, FlatList, Button} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getProducts} from '../Redux/Api';
import {addToCart} from '../Redux/CartReducer';

export default function Home() {
  const dispatch = useDispatch();

  const allItemsData = useSelector(state => state?.cart?.allItems);
  const cartItemsData = useSelector(state => state?.cart?.cartItems);

  console.log('cartItemsData........', cartItemsData);

  useEffect(() => {
    console.log('...............');
    dispatch(getProducts());
  }, []);

  const onPressLearnMore = itm => {
    dispatch(addToCart(itm));
  };

  return (
    <View>
      <FlatList
        data={allItemsData}
        // style={styles.flatlistStyle}
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}) => {
          console.log('item........', item);
          return (
            <View style={styles.itemView}>
              <Text>{item?.employee_name}</Text>
              <Button
                onPress={() => onPressLearnMore(item)}
                title="add cart"
                color="#841584"
              />
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  itemView: {
    height: 300,
    width: 400,
    backgroundColor: 'grey',
    marginTop: 10,
  },
});
