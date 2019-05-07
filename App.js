import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

export default class ExampleOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Колонка 1', 'Колонка 2', 'Колонка 3', 'Колонка 4', 'Колонка 5', 'Колонка 6', 'Колонка 7'],
      tableData: [
        ['1', '2', '3', '4', '5', '6', '7'],
        ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
        ['1', '2', '3', '456\n789', '', '', ''],
        ['1200', '2500', '3000', '4700', '5900', '6459', '']
      ]
    }
  }

  render() {
    const state = this.state;
    return (
      <View style={styles.container}>
        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
          <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
          <Rows data={state.tableData} textStyle={styles.text}/>
        </Table>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 60, backgroundColor: '#f1f8ff' },
  text: { margin: 6 }
});