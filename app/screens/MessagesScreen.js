import React, { useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import ListItem from '../components/ListItem';
import ListItemDeleteAction from '../components/ListItemDeleteAction';
import ListItemSeparator from '../components/LIstItemSeparator';
import Screen from '../components/Screen';

const initailMessages = [
   {
      id: 1,
      title: 'T1',
      description: 'D1',
      image: require('../assets/mosh.jpg'),
   },
   {
      id: 2,
      title: 'T2',
      description: 'D2',
      image: require('../assets/mosh.jpg'),
   },
];

export default function MessagesScreen() {
   const [messages, setMessages] = useState(initailMessages);

   const handleDelete = (message) => {
      setMessages(messages.filter((m) => m.id !== message.id));
   };

   return (
      <Screen>
         <FlatList
            data={messages}
            keyExtractor={(message) => message.id.toString()} //
            renderItem={({ item }) => (
               <ListItem
                  title={item.title}
                  subTitle={item.description} //
                  image={item.image}
                  onPress={() => console.log()}
                  renderRightAction={() => (
                     <ListItemDeleteAction //
                        onPress={handleDelete(item)}
                     />
                  )}
               />
            )}
            ItemSeparatorComponent={ListItemSeparator}
         />
      </Screen>
   );
}

const styles = StyleSheet.create({});
