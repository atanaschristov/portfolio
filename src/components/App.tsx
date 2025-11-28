import ViewPrintContent from '@/components/viewPrintMode/PrintContent';
import ViewPrintManager from '@/components/viewPrintMode/PrintManager';
import ViewWeb from '@/components/viewWeb/ViewWeb';

import { AppContext } from '@/contexts/useAppContext.tsx';
import { memo, useState } from 'react';
import { PrintModeContext } from '@/contexts/usePrintModeContext';

import '@/components/App.scss';

interface AppProps {
	portfolioData: IPortfolio;
	generatedAt: string | number;
}

const App = memo(({ portfolioData, generatedAt }: AppProps) => {
	const [isPrintMode, setPrintMode] = useState<boolean>(false);
	const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);

	const onPrintEnd = () => setPrintMode(false);
	const onPrintStart = () => setPrintMode(true);

	const appContext = {
		portfolio: portfolioData!,
		selectedImageIndex: selectedImageIndex || 0,
		setSelectedImageIndex: setSelectedImageIndex,
		generatedAt: new Date(generatedAt),
	};

	return (
		<AppContext.Provider value={appContext}>
			<ViewWeb togglePrintMode={onPrintStart} />
			<PrintModeContext.Provider value={{ isPrintMode }}>
				{isPrintMode && (
					<ViewPrintManager onPrintEnd={onPrintEnd}>
						<ViewPrintContent />
					</ViewPrintManager>
				)}
			</PrintModeContext.Provider>
		</AppContext.Provider>
	);
});

export default App;
