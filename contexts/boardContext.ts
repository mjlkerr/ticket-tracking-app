import { createContext } from "react";
import { BoardType} from '../app/(tabs)/board';

export const BoardContext = createContext<BoardType | undefined>(undefined);