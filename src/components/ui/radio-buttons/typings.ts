import React from 'react';

export interface UiRadioButtonsProps
  extends React.InputHTMLAttributes<Element> {
  name: string;
  values: string[];
  className?: string;
  onClick?: (event: React.MouseEvent) => void;
}
