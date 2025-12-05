import App from './components/App.tsx';
import LoadingScreen from './components/LoadingScreen.tsx';

import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';

import './main.scss';

const start = async () => {
	let loading = true;
	let portfolioData: IPortfolio | undefined;
	let generatedAt: string | number = 0;

	try {
		const listIndex: IListIndexData = await fetch(`${BASE_DATA_URL}` + '/index.data').then(
			(res) => res.json(),
		);
		generatedAt = listIndex.generatedAt;

		portfolioData = await fetch(`${BASE_DATA_URL}/${PORTFOLIO_PATH}`).then((res) => res.json());

		loading = false;
	} catch (error) {
		console.error('Error fetching the data', error);
	}

	createRoot(document.getElementById('root')!).render(
		<StrictMode>
			{loading || !portfolioData ? (
				<LoadingScreen />
			) : (
				<App portfolioData={portfolioData} generatedAt={generatedAt} />
			)}
		</StrictMode>,
	);
};

start();
