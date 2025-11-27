import ViewPrintContent from '@/components/viewPrintMode/PrintContent';
import ViewPrintManager from '@/components/viewPrintMode/PrintManager';
import ViewWeb from '@/components/viewWeb/ViewWeb';

import { memo, useState } from 'react';
import { PrintModeContext } from '@/contexts/usePrintModeContext';

import '@/components/App.scss';

const App = memo(() => {
	const [isPrintMode, setPrintMode] = useState<boolean>(false);
	const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);

	const onPrintEnd = () => setPrintMode(false);
	const onPrintStart = () => setPrintMode(true);

	return (
		<PrintModeContext.Provider value={{ isPrintMode, selectedImageIndex, setSelectedImageIndex }}>
			<ViewWeb togglePrintMode={onPrintStart} />
			{isPrintMode && (
				<ViewPrintManager onPrintEnd={onPrintEnd}>
					<ViewPrintContent />
				</ViewPrintManager>
			)}
		</PrintModeContext.Provider>
	);
});

export default App;
