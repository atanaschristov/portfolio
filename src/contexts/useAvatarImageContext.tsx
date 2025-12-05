import { createContext, useContext } from 'react';

export interface IAvatarImageContext {
	selectedImageIndex: number;
	setSelectedImageIndex: React.Dispatch<React.SetStateAction<number>>;
}

export const AvatarImageContext = createContext<IAvatarImageContext | undefined>(undefined);

export const useAvatarImageContext = () => {
	return useContext(AvatarImageContext);
};
