import { createContext, useContext } from 'react';

interface PrintModeContextProps {
	isPrintMode: boolean;
}

export const PrintModeContext = createContext<PrintModeContextProps>({
	isPrintMode: false,
});

export const usePrintModeContext = () => {
	return useContext(PrintModeContext);
};
