import React from 'react';

interface ComposerProps {
	components: React.FC[];
	children: React.ReactElement;
}

const Composer = ({ components, children }: ComposerProps) => {
	return components.reduce(
		(acumulator, Component) => <Component>{acumulator}</Component>,
		<>{children}</>,
	);
};

export default Composer;
