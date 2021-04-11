import React, { useState } from 'react';
import { LayoutsMain } from '~/layouts/main/LayoutsMain';
import { Tabs } from '~/components/core/tabs/Tabs';
import { Config } from './components/base/config/Config';
import { Result } from './components/base/result/Result';

const tabComponents = {
  Config: <Config />,
  Result: <Result />,
};

export const App: React.FC = () => {
  const [activeName, setActiveName] = useState(Object.keys(tabComponents)[0]);

  const handleActiveName = (name: string) => {
    setActiveName((prev) => (prev !== name ? name : prev));
  };

  return (
    <LayoutsMain>
      <Tabs
        components={tabComponents}
        handleActiveName={handleActiveName}
        activeName={activeName}
      />
    </LayoutsMain>
  );
};
