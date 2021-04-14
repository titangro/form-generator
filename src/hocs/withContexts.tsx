import React from 'react';
import { ConfigState } from '~/contexts/ConfigContext';
import Composer from '~/utils/composer';

export const withContexts = (Component: React.FC) => (props: unknown) => {
	return (
		<Composer components={[ConfigState]}>
			<Component {...props} />
		</Composer>
	);
};
