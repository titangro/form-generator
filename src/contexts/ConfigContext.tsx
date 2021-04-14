import React, { useState } from 'react';
import {
	GeneratorButtonTypes,
	GeneratorConfigFields,
	GeneratorFormTypes,
} from '~/types/generatorConfig';

export const defaultGeneratorConfig: GeneratorConfigFields = {
	label: 'testForm',
	items: [
		{
			label: 'Count',
			type: GeneratorFormTypes.Number,
		},
		{
			label: 'Is Editable',
			type: GeneratorFormTypes.Checkbox,
		},
		{
			label: 'Caption',
			type: GeneratorFormTypes.Text,
		},
		{
			label: 'Description',
			type: GeneratorFormTypes.TextArea,
		},
		{
			label: 'Date',
			type: GeneratorFormTypes.Date,
		},
		{
			label: 'Sex',
			type: GeneratorFormTypes.RadioButtons,
			values: ['male', 'female'],
		},
	],
	buttons: [
		GeneratorButtonTypes.Ok,
		GeneratorButtonTypes.Cancel,
		GeneratorButtonTypes.Save,
	],
};

const defaultFunc: React.Dispatch<
	React.SetStateAction<GeneratorConfigFields>
> = () => {};

export const ConfigContext = React.createContext({
	generatorConfig: defaultGeneratorConfig,
	setGeneratorConfig: defaultFunc,
});

export const ConfigState: React.FC = ({ children }) => {
	const [generatorConfig, setGeneratorConfig] = useState<GeneratorConfigFields>(
		defaultGeneratorConfig,
	);

	return (
		<ConfigContext.Provider value={{ generatorConfig, setGeneratorConfig }}>
			{children}
		</ConfigContext.Provider>
	);
};
