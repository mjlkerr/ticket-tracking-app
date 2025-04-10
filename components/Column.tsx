import React, { useEffect, useContext, useState } from 'react';
import { View, Text } from 'react-native';
import { BoardContext } from '@/contexts/boardContext';
import { ColumnType } from '@/app/(tabs)/board';
import { TicketType } from '@/app/(tabs)/board';
import { Ticket } from './Ticket';

export const Column = () => {
    const board = useContext(BoardContext);
    const [columns, setColumns] = useState<ColumnType[]>([])
    const [tickets, setTickets] = useState<TicketType[]>([])
    useEffect(() => {
        console.log('Status_Columns:', board?.Status_Columns);
        // Assuming board.Columns is an array of ColumnType
        if (board?.Status_Columns) {
            setColumns(board.Status_Columns);
            setTickets(board.Tickets);
        } else {
            console.error('No columns found in board context');
        }
    }, [board]);

    const orderedColumns = columns.sort((a, b) => a.Position - b.Position);

    const getTicketsByColumn = (columnName: string) => {
        const ticketsInColumn = tickets.filter((ticket) => ticket.Column === columnName);
        return ticketsInColumn;
    };


    // const findTicketByColumn = (columnName: string) => {
    //     const tickets = board?.Tickets.filter((ticket) => ticket.Column === columnName);
    //     return tickets;
    // };
    // console.log(findTicketByColumn('ToDo'))
    // const tickets = findTicketByColumn('ToDo');

    return (
        <View style={{ 
            flex: 1, 
            flexDirection: 'row', 
            justifyContent: 'space-around', 
            backgroundColor: '#f8f8f8',
            minHeight: 350,
            minWidth: '100%',
            borderWidth: 1,
            borderColor: '#ccc', 
            marginTop: 10 }}>
            {orderedColumns.map((column, index) => (
                <View key={index} 
                    style={{ 
                    margin: 10,
                    borderWidth: 1,
                    width: '20%',
                    borderColor: '#ccc', }}>
                    <View>
                        <Text style={{alignSelf: 'center'}}>{column.Name}</Text>
                    </View>
                    {getTicketsByColumn(column.Name).map((ticket, index) => (
                        <View key={index}
                            style={{
                            margin: 10,
                            borderWidth: 1,
                            borderColor: '#ccc',
                            backgroundColor: '#fff',
                            padding: 10,
                            borderRadius: 5,
                            }}>
                            <Text style={{alignSelf: 'center'}}>{ticket.Title}</Text>
                            <Text style={{alignSelf: 'center'}}>{ticket.Description}</Text>
                        </View>
                    ))}
                </View>
            ))}
        </View>
    )
}