import React from 'react';

interface TabsComponents {
  [name: string]: React.ReactElement;
}

export interface TabsProps {
  components: TabsComponents;
  handleActiveName: (name: string) => void;
  activeName?: string;
  className?: string;
}
