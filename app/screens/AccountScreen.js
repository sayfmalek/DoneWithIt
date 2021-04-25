import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import Icon from '../components/Icon';
import ListItem from '../components/ListItem';
import ListItemSeparator from '../components/LIstItemSeparator';
import Screen from '../components/Screen';
import colors from '../config/colors';

export default function AccountScreen() {
   const menuItems = [
      {
         title: 'My Listings',
         icon: {
            name: 'format-list-bulleted',
            backgroundColor: colors.primary,
         },
      },
      {
         title: 'My Messeges',
         icon: {
            name: 'email',
            backgroundColor: colors.secondary,
         },
      },
   ];

   return (
      <Screen style={styles.screen}>
         <View style={styles.container}>
            <ListItem
               title="Joe Rogan"
               subTitle="insaneman@mail.com" //
               image={require('../assets/mosh.jpg')}
            />
         </View>
         <View style={styles.container}>
            <FlatList
               data={menuItems}
               keyExtractor={(menuItems) => menuItems.title} //
               ItemSeparatorComponent={ListItemSeparator}
               renderItem={({ item }) => (
                  <ListItem
                     title={item.title} //
                     IconComponent={
                        <Icon
                           name={item.icon.name} //
                           backgroundColor={item.icon.backgroundColor}
                        />
                     }
                  />
               )}
            />
         </View>
         <ListItem
            title="Log out" //
            IconComponent={<Icon name="logout" backgroundColor="#2b2d42" />}
         />
      </Screen>
   );
}

const styles = StyleSheet.create({
   container: {
      marginVertical: 20,
   },
   screen: {
      backgroundColor: colors.light,
   },
});
