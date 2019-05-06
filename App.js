import React from 'react';
import { Text, ScrollView } from 'react-native';
import Picker from 'react-native-picker';
data = [
    {
        a: [
             {
             'первый набор': ['aaa', 'bbb', 'ccc', 'ddd']
             },
             {
             'второй набор': [1, 2, 3, 4]
             },
             {
             'третий набор': [5, 6, 7, 8]
             }
        ]
    },
    {
        b: [
            {
                b1: [11, 22, 33, 44]
            },
            {
                b2: [55, 66, 77, 88]
            },
            {
                b3: [99, 1010, 1111, 1212]
            }
        ]
    },
    {
        c: [
            {
                c1: ['a', 'b', 'c']
            },
            {
                c2: ['aa', 'bb', 'cc']
            },
            {
                c3: ['aaa', 'bbb', 'ccc']
            }
        ]
    },
]

export default class App extends React.Component{
    constructor(props){
        super(props);
        Picker.init({
                    pickerData: data,
                    selectedValue: [59]
                    });

    }
    render(){
        Picker.show();
        return(
               <ScrollView>
                <Text></Text>
               </ScrollView>
        )
    }


}