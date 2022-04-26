import { AppProps } from 'next/dist/shared/lib/router/router';

import { useAxe } from '@hooks/useAxe';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
	useAxe();

	return <Component {...pageProps} />;
};

export default App;
