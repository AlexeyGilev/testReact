import React from 'react';
import { Text, ScrollView, View, FlatList, StyleSheet, SectionList } from 'react-native';
import Picker from 'react-native-picker';
export default class App extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        Picker.show();
        return(
          <View style={styles.container}>
              <SectionList
              sections = {[
                                 {title: 'Секция 1', data: [
                                 {
                                     "name": "Proxima Midnight",
                                     "email": "proxima@appdividend.com"
                                 },
                                 {
                                     "name": "Ebony Maw",
                                     "email": "ebony@appdividend.com"
                                 },
                                 {
                                     "name": "Black Dwarf",
                                     "email": "dwarf@appdividend.com"
                                 }]},
                                 { title: 'Секция 2', data: [
                                 {
                                     "name": "Mad Titan",
                                     "email": "thanos@appdividend.com"
                                 },
                                 {
                                     "name": "Supergiant",
                                     "email": "supergiant@appdividend.com"
                                 },
                                 {
                                     "name": "Loki",
                                     "email": "loki@appdividend.com"
                                 },
                                 {
                                     "name": "corvus",
                                     "email": "corvus@appdividend.com"
                                 }]},
                                 {title: 'Секция 3', data: [
                                 {
                                     "name": "Proxima Midnight",
                                     "email": "proxima1@appdividend.com"
                                 },
                                 {
                                     "name": "Ebony Maw",
                                     "email": "ebony1@appdividend.com"
                                 },
                                 {
                                     "name": "Black Dwarf",
                                     "email": "dwarf1@appdividend.com"
                                 },
                                 {
                                     "name": "Mad Titan",
                                     "email": "thanos1@appdividend.com"
                                 },
                                 {
                                     "name": "Supergiant",
                                     "email": "supergiant1@appdividend.com"
                                 },
                                 {
                                     "name": "Loki",
                                     "email": "loki1@appdividend.com"
                                 },
                                 {
                                     "name": "corvus",
                                     "email": "corvus1@appdividend.com"
                                 }]}
                             ]
                     }
              showsVerticalScrollIndicator={false}
              renderItem={({item}) =>
              <View>
                <Text style={styles.name}>Название: {item.name}</Text>
                <Text style={styles.email}>Email: {item.email}</Text>
                <Text style={styles.email}>Тема: тестовая</Text>
                <Text style={styles.email}>Содержание: без содержания</Text>
              </View>
              }
               renderSectionHeader={({section: {title}}) => (
                 <Text style={styles.section}>{title}</Text>
               )}
              keyExtractor={item => item.email}
            />
          </View>
        )
    }

}

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        marginTop: 10,
        justifyContent: 'space-evenly',
        alignItems: 'stretch',
        backgroundColor: '#F5FCFF',
      },
      h2text: {
        marginTop: 10,
        fontFamily: 'Helvetica',
        fontSize: 36,
        fontWeight: 'bold',
      },
      flatview: {
        justifyContent: 'center',
        paddingTop: 30,
        borderRadius: 2,
        borderColor: 'black',
      },
      name: {
        marginLeft: 10,
        fontFamily: 'Verdana',
        fontSize: 20,
        color: 'black'
      },
      email: {
        marginLeft: 30,
        color: 'gray'
      },
      section: {
        backgroundColor: 'green',
        fontSize: 18,
      }

    });