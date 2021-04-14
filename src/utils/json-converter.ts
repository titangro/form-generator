import { GeneratorConfigFields } from '~/types/generatorConfig';

export class JSONConverter {
	static getJSONFromObject(obejct: GeneratorConfigFields) {
		return JSON.stringify(obejct)
			.replace(/[{]/g, '{\n    ')
			.replace(/}/g, '\n}')
			.replace(/[,]/g, ',\n    ');
	}

	static getObjectFromJSON(str: string): GeneratorConfigFields | Error {
		try {
			return JSON.parse(str);
		} catch (error) {
			return new Error(error);
		}
	}
}
