export enum GeneratorFormTypes {
  Number = 'number',
  Text = 'text',
  Checkbox = 'checkbox',
  Date = 'date',
  TextArea = 'textarea',
  RadioButtons = 'radio'
}

export enum GeneratorButtonTypes {
  Ok = 'ok',
  Accept = 'accept',
  Apply = 'apply',
  Cancel = 'cancel',
  Save = 'save',
}


interface GeneratorConfigItem {
  label: string;
  type: GeneratorFormTypes
  values?: string[]
}

export interface GeneratorConfigFields {
  label: string;
  items: GeneratorConfigItem[];
  buttons: string[] | GeneratorButtonTypes[]
}