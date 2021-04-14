import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { LayoutsResult } from '~/layouts/result/LayoutsResult';

type ResultFormData = Record<string, unknown>;

export const Result = () => {
	const formMethods = useForm();
  
	const { handleSubmit } = formMethods;

	const onSubmit = (data: ResultFormData) => {
		console.log('CLICK RESULT', data);
	};

	return (
		<FormProvider {...formMethods}>
			<LayoutsResult handleSubmit={handleSubmit(onSubmit)} />
		</FormProvider>
	);
};