import React from 'react';
import { Button, Text, TextInput, Platform, ScrollView, StyleSheet, View } from 'react-native';
import { Chevron } from 'react-native-shapes';
import RNPickerSelect from 'react-native-picker-select';
// import RNPickerSelect from './debug';

const languages = [
    {
        label: 'English',
        value: 'English',
    },
    {
        label: 'Español',
        value: 'Español',
    },
    {
        label: 'Esperanto',
        value: 'Esperanto',
    },
    {
        label: 'Português',
        value: 'Português',
    },
    {
        label: 'Français',
        value: 'Français',
    },
    {
        label: 'Nederlands',
        value: 'Nederlands',
    },
    {
        label: 'Русский',
        value: 'Русский',
    },
    {
        label: 'Esperanto',
        value: 'Esperanto',
    },
];

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.inputRefs = {
            firstTextInput: null,
            favSport0: null,
            favSport1: null,
            lastTextInput: null,
        };

        this.state = {
            numbers: [
                {
                    label: '1',
                    value: 1,
                    color: 'orange',
                },
                {
                    label: '2',
                    value: 2,
                    color: 'green',
                },
            ],
            favSport0: undefined,
            favSport1: undefined,
            favSport2: undefined,
            favSport3: undefined,
            favSport4: 'baseball',
            favNumber: undefined,
        };
    }

    render() {
        const placeholder = {
            label: 'Select a sport...',
            value: null,
            color: '#9EA0A4',
        };

        return (
            <ScrollView style={styles.container}>

                <Text>useNativePickerStyle (default)</Text>
                {/* and iOS onUpArrow/onDownArrow toggle example */}
                <RNPickerSelect
                    placeholder={placeholder}
                    items={languages}
                    onValueChange={(value) => {
                        this.setState({
                            favSport0: value,
                        });
                    }}
                    onUpArrow={() => {
                        this.inputRefs.firstTextInput.focus();
                    }}
                    onDownArrow={() => {
                        this.inputRefs.favSport1.togglePicker();
                    }}
                    style={pickerSelectStyles}
                    value={this.state.favSport0}
                    ref={(el) => {
                        this.inputRefs.favSport0 = el;
                    }}
                />

                <View paddingVertical={5} />

                <Text>set useNativePickerStyle to false</Text>
                <RNPickerSelect
                    placeholder={placeholder}
                    items={languages}
                    onValueChange={(value) => {
                        this.setState({
                            favSport1: value,
                        });
                    }}
                    style={pickerSelectStyles}
                    value={this.state.favSport1}
                    useNativeAndroidPickerStyle={false}
                    ref={(el) => {
                        this.inputRefs.favSport1 = el;
                    }}
                />

                <View paddingVertical={5} />

                <Text>set placeholder to empty object</Text>
                <RNPickerSelect
                    placeholder={{}}
                    items={languages}
                    onValueChange={(value) => {
                        this.setState({
                            favSport2: value,
                        });
                    }}
                    style={pickerSelectStyles}
                    value={this.state.favSport2}
                />

            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 40,
        paddingHorizontal: 10,
        flex: 1,
    },
});

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        color: 'black',
        paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: 'black',
        borderRadius: 8,
        color: 'black',
        paddingRight: 30, // to ensure the text is never behind the icon
    },
});
