import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const TaskList = ({ title }) => {
    return (
        <TouchableOpacity onLongPress={() => console.log('this is clicked')}>
            <View>
                <Text style={styles.taskItem}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    taskItem: {
        padding: 10,
        backgroundColor: 'gray',
        marginVertical: 5,
        color: 'white',
        borderStyle: 'solid',
        borderColor: 'black',
        borderWidth: 3,
        fontSize: 20
    }
});

export default TaskList;