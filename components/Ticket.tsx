import React, { useEffect, useContext, useState } from 'react';
import { View, Text } from 'react-native';
import { BoardContext } from '@/contexts/boardContext';
import { TicketType } from '@/app/(tabs)/board';

export const Ticket = () => {
    const board = useContext(BoardContext);
    const [Tickets, setTickets] = useState<TicketType[]>([])
    useEffect(() => {
        console.log('Tickets:', board?.Tickets);
        // Assuming board.Tickets is an array of TicketType
        if (board?.Tickets) {
            setTickets(board.Tickets);
        } else {
            console.error('No Tickets found in board context');
        }
        // Assuming you want to log the Tickets
        console.log('These are the Tickets:', Tickets);
    }, [board]);
 
    // return (
    //     <View style={{ 
    //         flex: 1, 
    //         flexDirection: 'row', 
    //         justifyContent: 'space-around', 
    //         backgroundColor: '#f8f8f8',
    //         borderWidth: 1,
    //         borderColor: '#ccc', 
    //         marginTop: 10 }}>
    //         {Tickets.map((Ticket, index) => (
    //             <View key={index} 
    //                 style={{ 
    //                 margin: 10,
    //                 borderWidth: 1,
    //                 width: '20%',
    //                 borderColor: '#ccc', }}>
    //                 <Text style={{alignSelf: 'center'}}>{Ticket.Title}</Text>
    //             </View>
    //         ))}
    //     </View>
    // )
}