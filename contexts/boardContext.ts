import { createContext } from "react";
import Board from '../app/(tabs)/board';

export const BoardContext = createContext<Board | undefined>(undefined);