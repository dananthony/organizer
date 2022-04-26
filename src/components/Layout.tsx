import { ReactNode } from 'react';
import Head from 'next/head';

type Props = {
	children?: ReactNode;
	title?: string;
};

const Layout = ({ children, title = 'Default title' }: Props) => (
	<>
		<Head>
			<title>{title}</title>
			<meta charSet="utf-8" />
			<meta content="initial-scale=1.0, width=device-width" name="viewport" />
		</Head>
		{children}
	</>
);

export default Layout;
