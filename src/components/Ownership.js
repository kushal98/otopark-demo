import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Card, Title, Paragraph} from 'react-native-paper';
import {ownershipDetails} from '../utils';

function Ownership(props) {
  let data;
  const fillData = () => {
    data = ownershipDetails();
  };

  fillData();

  return (
    <View style={styles.viewStyle}>
      <Card>
        <Card.Title title="Ownership Details" />
        <Card.Content>
          {data.map((item, index) => {
            return (
              <View key={index}>
                <Title>{item.key}</Title>
                <Paragraph>{item.value}</Paragraph>
              </View>
            );
          })}
          {/* <FlatList
            data={data}
            renderItem={({item}) => (
              <View>
                <Title>{item.key}</Title>
                <Paragraph>{item.value}</Paragraph>
              </View>
            )}
            keyExtractor={item => item.id}
          /> */}
        </Card.Content>
        {/* <Card.Cover source={{uri: 'https://picsum.photos/700'}} /> */}
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    width: '100%',
    margin: '5%',
    borderRadius: 15,
  },
});

export default Ownership;
