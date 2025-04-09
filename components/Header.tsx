import React, { useEffect, useContext, useState } from 'react';
import { View, Text } from 'react-native';
import { BoardContext } from '@/contexts/boardContext';

export const Header = () => {
    const board = useContext(BoardContext);
    return (
        <View style={{ 
            flex: 1, 
            flexDirection: 'row', 
            justifyContent: 'flex-start', 
            backgroundColor: '#f8f8f8',
            maxHeight: '15%',
            paddingTop: 25,
            marginLeft: 50,
             }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', paddingRight: 20 }}>{board?.Board_Name}</Text>
            <Text style={{ fontSize: 20, color: '#555' }}>Sprint: {board?.Sprint}</Text>
        </View>
    )
}