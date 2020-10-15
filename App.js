import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

export default function App() {

    const [taskItems, setTaskItems] = useState([]);

    const onPressHandler = enteredTask => {
        setTaskItems(taskItems => [...taskItems, enteredTask]);
    }

    return (
        <View style={styles.container}>
            <View style={styles.inputForm}>
                <TaskForm onAddTask={onPressHandler} />
            </View>
            <FlatList
                data={taskItems}
                renderItem={(taskData) => <TaskList title={taskData.item} />} />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        marginTop: 50,
        backgroundColor: '#fff',
    }
});
