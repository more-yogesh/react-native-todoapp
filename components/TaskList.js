import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const TaskList = ({title}) => {
    return (
        <View>
            <Text style={styles.taskItem}>{title}</Text>
        </View>
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