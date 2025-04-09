import React, { useEffect, useContext, useState } from 'react';
import { View, Text } from 'react-native';
import { BoardContext } from '@/contexts/boardContext';

export const TaskBoard = () => {
    const board = useContext(BoardContext);
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>{JSON.stringify(board)}</Text>
        </View>
    )
};