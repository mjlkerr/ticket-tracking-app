import React, { useEffect, createContext, useState } from 'react';
import * as ScreenOrientation from 'expo-screen-orientation';
import { View, Text } from 'react-native';
import { getBoard } from '@/requests/getBoard';
import { BoardContext } from '@/contexts/boardContext';
import { TaskBoard } from '@/components/TaskBoard';

type Board = {
  data: string;
}
const Board = () => {

  const [board, setBoard] = useState({} as Board);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBoard = async () => {
      try {
        const boardData = await getBoard();
        console.log('Fetched board data:', boardData);
        setBoard(boardData);
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
      <TaskBoard />
    </BoardContext.Provider>
  );
};

export default Board;