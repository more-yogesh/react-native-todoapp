import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const TaskForm = (props) => {
    const [addedText, setAddedText] = useState('');

    const textChangeHandler = (enteredText) => {
        setAddedText(addedText => enteredText);
    }
    return (
        <View>
            <View style={styles.inputText}>
                <TextInput style={styles.inputControl} placeholder="add goal" onChangeText={textChangeHandler} />
            </View>
            <View style={styles.btn}>
                <Button title="Add" onPress={props.onAddTask.bind(this, addedText)} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    inputControl: {
        borderWidth: 1,
        padding: 4,
        borderColor: 'black',
        marginRight: 10,
    },
    btn: {
        flex: 1
    }
});


export default TaskForm;