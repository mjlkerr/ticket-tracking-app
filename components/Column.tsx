import React, { useEffect, useContext, useState } from 'react';
import { View, Text } from 'react-native';
import { BoardContext } from '@/contexts/boardContext';
import { ColumnType } from '@/app/(tabs)/board';

export const Column = () => {
    const board = useContext(BoardContext);
    const [columns, setColumns] = useState<ColumnType[]>([])
    useEffect(() => {
        console.log('Columns:', board?.Columns);
        // Assuming board.Columns is an array of ColumnType
        if (board?.Columns) {
            setColumns(board.Columns);
        } else {
            console.error('No columns found in board context');
        }
        // Assuming you want to log the columns
        console.log('Columns:', columns);
    }, [board]);
 
    return (
        <View style={{ 
            flex: 1, 
            flexDirection: 'row', 
            justifyContent: 'space-around', 
            backgroundColor: '#f8f8f8',
            borderWidth: 1,
            borderColor: '#ccc', 
            marginTop: 10 }}>
            {columns.map((column, index) => (
                <View key={index} 
                    style={{ 
                    margin: 10,
                    borderWidth: 1,
                    width: '20%',
                    borderColor: '#ccc', }}>
                    <Text style={{alignSelf: 'center'}}>{column.Name}</Text>
                </View>
            ))}
        </View>
    )
}