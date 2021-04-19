import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm, FormProvider } from 'react-hook-form';
import { LayoutsConfig } from '~/layouts/config/LayoutsConfig';
import { ConfigFormData, ConfigFormDataField } from './typings';

import { JSONConverter } from '~/utils/json-converter';
import { ConfigContext } from '~/contexts/ConfigContext';
import { GeneratorConfigFields } from '~/types/generatorConfig';
import { screensPaths } from '~/screens';

export const Config = () => {
	const history = useHistory();

	const [isSuccess, setIsSuccess] = useState(false);

	const { generatorConfig, handleGeneratorConfig } = useContext(ConfigContext);

	const formMethods = useForm({
		defaultValues: {
			[ConfigFormDataField.JSON]: JSONConverter.getJSONFromObject(
				generatorConfig,
			),
		},
	});

	const { handleSubmit, setError } = formMethods;

	const saveConfigObject = (configObject: GeneratorConfigFields) => {
		handleGeneratorConfig(configObject);
	};

	const handleSuccessful = () => {
		history.push(screensPaths.result);
	};

	const onSubmit = (data: ConfigFormData) => {
		const fieldJSONValue = data[ConfigFormDataField.JSON];
		const objectFromJSON = JSONConverter.getObjectFromJSON(fieldJSONValue);

		if (objectFromJSON instanceof Error) {
			setError(ConfigFormDataField.JSON, {
				message:
					'Error on parsing JSON to object. Check correcting of data at JSON string!',
			});
			return;
		}

		saveConfigObject(objectFromJSON);
		handleSuccessful();
	};

	return (
		<FormProvider {...formMethods}>
			<LayoutsConfig
				handleSubmit={handleSubmit(onSubmit)}
				isSuccess={isSuccess}
			/>
		</FormProvider>
	);
};
