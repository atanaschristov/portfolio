import App from './components/App.tsx';
import LoadingScreen from './components/LoadingScreen.tsx';

import { AppContext } from '@/contexts/useAppContext.tsx';
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';

import './main.scss';

const start = async () => {
	let loading = true;
	let portfolioData: IPortfolio | undefined;
	let appContext: IAppContext | undefined;

	try {
		const listIndex: IListIndexData = await fetch(`${BASE_DATA_URL}` + '/index.data').then(
			(res) => res.json(),
		);
		const { generated, generatedAt } = listIndex;

		portfolioData = await fetch(`${BASE_DATA_URL}/${PORTFOLIO_PATH}`).then((res) => res.json());

		appContext = {
			portfolio: portfolioData!,
			generatedAt: new Date(generatedAt || generated),
		};

		loading = false;
	} catch (error) {
		console.error('Error fetching the data', error);
	}

	createRoot(document.getElementById('root')!).render(
		<StrictMode>
			{loading || !portfolioData ? (
				<LoadingScreen />
			) : (
				<AppContext.Provider value={appContext}>
					<App />
				</AppContext.Provider>
			)}
		</StrictMode>,
	);
};

start();
