import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { LayoutsResult } from '~/layouts/result/LayoutsResult';

type ResultFormData = Record<string, unknown>;

export const Result = () => {
	const formMethods = useForm();
	const { handleSubmit, reset } = formMethods;

	const [message, setMessage] = useState('');

	const commonHandleClick = () => {
		console.log('CLICK COMMON BUTTON');
		setMessage('Click on common button');
	};

	const clickSaveButton = (data: ResultFormData) => {
		console.log('CLICK SAVE BUTTON, DATA:', data);

		const dataMessage = Object.entries(data).join('\n').replace(/[,]/g, ': ');

		setMessage(`Click on "Save" button\n${dataMessage}`);
	};

	const clickOkButton = () => {
		console.log('CLICK OK BUTTON');
		setMessage('Click on "Ok" button');
	};

	const clickCancelButton = () => {
		console.log('CLICK CANCEL BUTTON');
		reset({});
		setMessage('Click on "Cancel" button');
	};

	return (
		<FormProvider {...formMethods}>
			<LayoutsResult
				commonHandleClick={commonHandleClick}
				message={message}
				clickSaveButton={handleSubmit(clickSaveButton)}
				clickOkButton={clickOkButton}
				clickCancelButton={clickCancelButton}
			/>
		</FormProvider>
	);
};
