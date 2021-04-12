import React from 'react';

export interface UiTextAreaFieldProps
  extends React.TextareaHTMLAttributes<Element> {
  name: string;
  className?: string;
  onClick?: (event: React.MouseEvent) => void;
}
