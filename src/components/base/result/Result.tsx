import React from 'react';
import { LayoutsResult } from '~/layouts/result/LayoutsResult';

export const Result = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('CLICK RESULT');
  };

  return <LayoutsResult handleSubmit={handleSubmit} />;
};
