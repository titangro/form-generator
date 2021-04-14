import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { LayoutsConfig } from '~/layouts/config/LayoutsConfig';
import { ConfigFormData, ConfigFormDataField } from './typings';

import { JSONConverter } from '~/utils/JSONConverter';

export const Config = () => {
	const formMethods = useForm({
    
		defaultValues: {
			[ConfigFormDataField.JSON]: JSONConverter.getJSONFromObject(
				// testData
				{}
			)
		}
	});



	const { handleSubmit, setError } = formMethods;

	const onSubmit = (data: ConfigFormData) => {
		const fieldJSONValue = data[ConfigFormDataField.JSON];
		const objectFromJSON = JSONConverter.getObjectFromJSON(fieldJSONValue);
    
		if (objectFromJSON instanceof Error) {
			setError(ConfigFormDataField.JSON, {
				message: 'Error on parsing JSON to object. Check correcting of data at JSON string!' 
			});
		}
		console.log('SUBMITED CONFIG');
	};

	return (
		<FormProvider {...formMethods}>
			<LayoutsConfig handleSubmit={handleSubmit(onSubmit)} />
		</FormProvider>
	);
};
      
