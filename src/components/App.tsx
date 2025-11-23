import ViewPrintMode from './viewPrintMode/ViewPrintMode';
import ViewWeb from '@/components/viewWeb/ViewWeb';

import { memo, useState } from 'react';
import { PrintModeContext } from '@/contexts/usePrintModeContext';

import '@/components/App.scss';

const App = memo(() => {
	const [isPrintMode, setPrintMode] = useState<boolean>(false);

	const togglePrintMode = () => {
		setPrintMode((prev) => !prev);
	};

	return (
		<>
			<ViewWeb togglePrintMode={togglePrintMode} />
			<PrintModeContext.Provider value={isPrintMode}>
				<div id="print-root" />
				{isPrintMode && <ViewPrintMode togglePrintMode={togglePrintMode} />}
			</PrintModeContext.Provider>
		</>
	);
});

export default App;
