enum FormTypes {
  Number = 'number',
  Text = 'text',
  Checkbox = 'checkbox',
  Date = 'date',
  TextArea = 'textarea',
  RadioButtons = 'radio'
}

interface ConfigItem {
  label: string;
  type: FormTypes
  values?: string[]
}

export interface ConfigFields {
  label: string;
  items: ConfigItem[];
  buttons: string[]
}

export class JSONConverter {
  static getJSONFromObject(obejct: Record<string, unknown>) {
    return JSON.stringify(obejct)
    .replace(/[{]/g, '{\n    ')
    .replace(/}/g, '\n}')
    .replace(/[,]/g, ',\n    ') 
  }

  static getObjectFromJSON (str: string): ConfigFields | Error {
    try {
      return JSON.parse(str)
    } catch(error) {
      return new Error(error)
    }
  }
}