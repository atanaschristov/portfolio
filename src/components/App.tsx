import ViewPrintContent from '@/components/viewPrintMode/PrintContent';
import ViewPrintManager from '@/components/viewPrintMode/PrintManager';
import ViewWeb from '@/components/viewWeb/ViewWeb';

import { memo, useState } from 'react';
import { PrintModeContext } from '@/contexts/usePrintModeContext';

import '@/components/App.scss';

const App = memo(() => {
	const [isPrintMode, setPrintMode] = useState<boolean>(false);

	const onPrintEnd = () => setPrintMode(false);
	const onPrintStart = () => setPrintMode(true);

	return (
		<>
			<ViewWeb togglePrintMode={onPrintStart} />
			<PrintModeContext.Provider value={isPrintMode}>
				{isPrintMode && (
					<ViewPrintManager onPrintEnd={onPrintEnd}>
						<ViewPrintContent />
					</ViewPrintManager>
				)}
			</PrintModeContext.Provider>
		</>
	);
});

export default App;
