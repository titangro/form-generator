import React from 'react';

export interface UiDateFieldProps extends React.InputHTMLAttributes<Element> {
  name: string;
  className?: string;
  onClick?: (event: React.MouseEvent) => void;
}
