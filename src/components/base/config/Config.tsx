import React from 'react';
import { UiButton } from '~/components/ui/button/UiButton';
import { LayoutsConfig } from '~/layouts/config/LayoutsConfig';

export const Config = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('SUBMITED CONFIG');
  };

  return <LayoutsConfig handleSubmit={handleSubmit} />;
};
