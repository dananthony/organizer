import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

export const useAxe = (): void => {
	useEffect(() => {
		if (process.env.NODE_ENV !== 'production') {
			// Disabled as it's only used in development
			// eslint-disable-next-line import/no-extraneous-dependencies
			import('@axe-core/react').then((axe) =>
				axe.default(React, ReactDOM, 1000)
			);
		}
	}, []);
};
