import React, { useState } from "react";
import { GeneratorButtonTypes, GeneratorConfigFields, GeneratorFormTypes } from "~/types/generatorConfig";

export const defaultGeneratorConfig: GeneratorConfigFields = {
  label: 'testForm',
  items: [{
    label: 'Count',
    type: GeneratorFormTypes.Number,
  }],
  buttons: [
    GeneratorButtonTypes.Cancel, GeneratorButtonTypes.Save
  ]
}

export const ConfigContext = React.createContext({
  generatorConfig: defaultGeneratorConfig,
  setGeneratorConfig: () => {}
});

export const ConfigState:React.FC = ({children}) => {
  const [generatorConfig, setGeneratorConfig] = useState<GeneratorConfigFields>()


  return (
    <ConfigContext.Provider value={[generatorConfig, setGeneratorConfig]}>
      {children}
    </ConfigContext.Provider>
  )
}

