import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Cart() {
  const cartItemsData = useSelector(state => state?.cart?.cartItems);

  return (
    <View>
      <FlatList
        data={cartItemsData}
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
