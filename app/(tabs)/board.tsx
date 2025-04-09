import React, { useEffect, createContext, useState } from 'react';
import * as ScreenOrientation from 'expo-screen-orientation';
import { View, Text } from 'react-native';
import { getBoard } from '@/requests/getBoard';
import { BoardContext } from '@/contexts/boardContext';
import { TaskBoard } from '@/components/TaskBoard';
import { Header } from '@/components/Header';
import { Column } from '@/components/Column';

export type ColumnType = {
  Name: string;
  Position: number;
}

export type TicketType = {
  Name: string;
  Position: number;
  Board_Id: number;
  Ticket_Id: number;
  Description: string;
}

export type BoardType = {
  data: string;
  Sprint: number;
  Board_Name: string;
  BoardDescription: string;
  description: string;
  Columns: ColumnType[];
  Tickets: TicketType[];
}
const Board = () => {

  const [board, setBoard] = useState({} as BoardType);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBoard = async () => {
      try {
        const boardData = await getBoard();
       // console.log('Fetched board data:', boardData);
        setBoard(boardData as BoardType);
        setLoading(false);
      } catch (error) {
        // Handle error here and log it
        console.error('Error fetching board data:', error);
      }
    };

    fetchBoard();
  }, []);

  return (
    <BoardContext.Provider value={board}>
      <Header />
      <Column />
    </BoardContext.Provider>
  );
};

export default Board;