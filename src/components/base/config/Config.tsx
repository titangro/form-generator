import React from 'react';
import { UiButton } from '~/components/ui/button/UiButton';

export const Config = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('SUBMITED');
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea name="" id="" cols={30} rows={10}>
        JSON
      </textarea>{' '}
      // !TODO: add textarea ui
      <UiButton type="submit" onSubmit={handleSubmit}>
        Apply
      </UiButton>{' '}
      // !TODO: add buttons layout
    </form>
  );
};
