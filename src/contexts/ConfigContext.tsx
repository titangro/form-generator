import React, { useState } from 'react';
import {
	GeneratorButtonTypes,
	GeneratorConfigFields,
	GeneratorConfigItem,
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

export const ConfigContext = React.createContext({
	generatorConfig: defaultGeneratorConfig,
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	handleGeneratorConfig: (config: GeneratorConfigFields) => {},
});

let generatorLabelsCount = 0;

export const ConfigState: React.FC = ({ children }) => {
	const [generatorConfig, setGeneratorConfig] = useState<GeneratorConfigFields>(
		defaultGeneratorConfig,
	);

	const handleGeneratorConfig = ({
		label,
		items,
		buttons,
	}: GeneratorConfigFields) => {
		const currentFormLabel = label || 'Default form label';

		const currentItems = (items || []).reduce((prev, field) => {
			let currentLabel = field.label;

			if (!currentLabel) {
				generatorLabelsCount += 1;
				currentLabel = `No name label ${generatorLabelsCount}`;
			}

			return [
				...prev,
				{
					label: currentLabel,
					type: Object.values(GeneratorFormTypes).includes(field.type)
						? field.type
						: GeneratorFormTypes.Text,
					...(field.type === GeneratorFormTypes.RadioButtons
						? { values: field.values || [] }
						: {}),
				},
			];
		}, [] as GeneratorConfigItem[]);

		const currentButtons = Array.from(new Set(buttons || []));

		setGeneratorConfig({
			label: currentFormLabel,
			items: currentItems,
			buttons: currentButtons,
		});
	};

	return (
		<ConfigContext.Provider value={{ generatorConfig, handleGeneratorConfig }}>
			{children}
		</ConfigContext.Provider>
	);
};
