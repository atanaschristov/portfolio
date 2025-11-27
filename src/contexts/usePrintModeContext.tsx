import { createContext, useContext } from 'react';

interface PrintModeContextProps {
	isPrintMode: boolean;
	selectedImageIndex: number;
	setSelectedImageIndex?: (index: number) => void;
}

export const PrintModeContext = createContext<PrintModeContextProps>({
	isPrintMode: false,
	selectedImageIndex: 0,
});

export const usePrintModeContext = () => {
	return useContext(PrintModeContext);
};
