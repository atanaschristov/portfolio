import cn from 'classnames';

import { AppContext, useAppContext } from '@/contexts/useAppContext.tsx';
import { PrintModeContext, usePrintModeContext } from '@/contexts/usePrintModeContext';
import { createRoot } from 'react-dom/client';
import { useBemm as useBem } from 'bemm';
import { useEffect, useRef } from 'react';

const PrintManager = ({
	children,
	onPrintEnd,
}: {
	children: React.ReactNode;
	onPrintEnd: () => void;
}) => {
	const b = useBem('print-mode-view');
	const containerRef = useRef<HTMLDivElement | null>(null);
	const rootRef = useRef<ReturnType<typeof createRoot> | null>(null);
	const printedRef = useRef(false);
	const appContext = useAppContext();
	const printModeContext = usePrintModeContext();

	useEffect(() => {
		if (!containerRef.current) return;

		// Create root ONCE
		if (!rootRef.current) {
			rootRef.current = createRoot(containerRef.current);
		}

		rootRef.current.render(
			<PrintModeContext.Provider value={{ ...printModeContext }}>
				<AppContext.Provider value={appContext}>{children}</AppContext.Provider>
			</PrintModeContext.Provider>,
		);

		if (!printedRef.current) {
			printedRef.current = true;

			// Print
			requestAnimationFrame(() => {
				requestAnimationFrame(() => {
					// TODO: Dirty hack to ensure all states are ready and components are fully rendered
					setTimeout(() => window.print(), 50);
				});
			});
		}

		const handleAfter = () => {
			onPrintEnd();
			printedRef.current = false;
		};

		window.addEventListener('afterprint', handleAfter);
		return () => window.removeEventListener('afterprint', handleAfter);
	}, [children]);

	return <div id="print-root" className={cn(b())} ref={containerRef} />;
};

export default PrintManager;
