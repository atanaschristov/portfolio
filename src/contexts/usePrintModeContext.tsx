import { createContext, useContext } from 'react';

export const PrintModeContext = createContext<boolean>(false);

export const usePrintModeContext = () => {
	return useContext(PrintModeContext);
};
