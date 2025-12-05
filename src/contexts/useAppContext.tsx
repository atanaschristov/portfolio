import { createContext, useContext } from 'react';

export const AppContext = createContext<IAppDataContext | undefined>(undefined);

export const useAppContext = () => {
	return useContext(AppContext);
};
