export enum ConfigFormDataField {
  JSON = 'JSON-parser'
}

export interface ConfigFormData {
  [ConfigFormDataField.JSON]: string;
}