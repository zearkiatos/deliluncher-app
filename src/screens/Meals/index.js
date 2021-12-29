import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import ListItem from '../../components/ListItem'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    },
    list: {
        alignSelf: 'stretch'
    }
});

const data = [{
    _id: Date.now(), name: 'Churrasco', desc: 'Típical dish, avocado, mayonaise 🥩🍔'
}];

const Meals = () => {
    return (
        <View>
            <FlatList
                style={styles.list}
                data={data}
                keyExtractor={x => x._id}
                renderItem={({ item }) => 
                <ListItem 
                    onPress={() => navigation.navigate('Modal', {_id: item._id})}
                    name={item.name}
                />}
            >

            </FlatList>
        </View>
    );
};

Meals.navigationOptions = ({
    title: 'Food  availables'
});

export default Meals;