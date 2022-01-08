import React from 'react';
import { Text, TextInput, View, StyleSheet, Button } from 'react-native';

const Login = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Login
            </Text>
            <TextInput style={styles.input} />
            <TextInput style={styles.input}/>
            <Button title="Login" onPress={() => {}}></Button>
            <Button title="Register" onPress={() => navigation.navigate('Register')}></Button>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 15
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        alignSelf: 'stretch',
        marginBottom: 10,
        padding: 5
    },
    title: {
        fontSize: 24,
        marginBottom: 16
    }
});

export default Login;