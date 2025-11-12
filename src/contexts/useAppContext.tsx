import { createContext, useContext } from 'react';

export const AppContext = createContext<IAppContext | undefined>(undefined);

export const useAppContext = () => {
	return useContext(AppContext);
};
