/* 
 * profile_fields.ts
 *     Created: 2024-10-03T20:55:46-04:00
 *    Modified: 2024-10-03T20:55:46-04:00
 *      Author: Justin Paul Chase <justin@justinwritescode.com>
 *   Copyright: © 2024 Justin Paul Chase, All Rights Reserved
 *     License: MIT (https://opensource.org/licenses/MIT)
 */
import type { RecordOf } from 'immutable';
import { List, Record as ImmutableRecord } from 'immutable';
import { UnionToTuple } from './unions-and-tuples-oh-my';

export interface ProfileFieldShape extends Required<ApiProfileFieldJSON> { }

/**
 * Represents a profile field with various attributes and descriptions.
 * Implements the `Required<ApiProfileFieldJSON>` interface.
 * 
 * @class
 * @property {string} _name - The name of the profile field.
 * @property {ProfileFieldType} _field_type - The type of the profile field.
 * @property {string} _value - The value of the profile field.
 * @property {boolean} _dropdown - Indicates if the field is a dropdown.
 * @property {boolean} _multiple - Indicates if multiple values are allowed.
 * @property {string} _description - The description of the profile field.
 * @property {string} _category - The category of the profile field.
 * @property {string} _first_person_singular_description - First person singular description.
 * @property {string} _second_person_singular_description - Second person singular description.
 * @property {string} _third_person_masculine_description - Third person masculine description.
 * @property {ProfileFieldValue[]} _field_values - Array of possible values for the profile field.
 * 
 * @property {string} name - Gets the name of the profile field.
 * @property {ProfileFieldType} field_type - Gets the type of the profile field.
 * @property {string} value - Gets the value of the profile field.
 * @property {boolean} dropdown - Gets whether the field is a dropdown.
 * @property {boolean} multiple - Gets whether multiple values are allowed.
 * @property {string} description - Gets the description of the profile field.
 * @property {string} category - Gets the category of the profile field.
 * @property {string} first_person_singular_description - Gets the first person singular description.
 * @property {string} second_person_singular_description - Gets the second person singular description.
 * @property {string} third_person_masculine_description - Gets the third person masculine description.
 * @property {ProfileFieldValue[]} field_values - Gets the array of possible values for the profile field.
 * @property {ProfileFieldValue} default - Gets the default value of the profile field.
 */
export class ProfileField implements Required<ApiProfileFieldJSON> {
    _name: string | undefined = '';
    _field_type: ProfileFieldType = 'string';
    _value: string = '';
    _dropdown: boolean = false;
    _multiple: boolean = false;
    _description: string = '';
    _category: string = '';
    _first_person_singular_description: string = '';
    _second_person_singular_description: string = '';
    _third_person_masculine_description: string = '';
    _field_values: ProfileFieldValue[] = [];

    get name(): string { return this._name || ''; }
    get field_type(): ProfileFieldType { return this._field_type; }
    get value(): string { return this._value; }
    get dropdown(): boolean { return this._dropdown; };
    get multiple(): boolean { return this._multiple; };
    get description(): string { return this._description; };
    get category(): string { return this._category; };
    get first_person_singular_description(): string { return this._first_person_singular_description; };
    get second_person_singular_description(): string { return this._second_person_singular_description; };
    get third_person_masculine_description(): string { return this._third_person_masculine_description; };
    get field_values(): ProfileFieldValue[] { return this._field_values; };
    get default(): ProfileFieldValue { return this.field_values.find((fieldValue) => fieldValue.default) || this.field_values[0] || DefaultProfileFieldValue; };
}

/**
 * DefaultProfileFieldJSON is an object that represents the default values for a profile field.
 * It ensures that all required properties of the ApiProfileFieldJSON type are initialized with default values.
 * 
 * Properties:
 * - `name`: The name of the profile field (default: empty string).
 * - `field_type`: The type of the profile field, typically a string (default: 'string').
 * - `value`: The value of the profile field (default: empty string).
 * - `dropdown`: Indicates if the field is a dropdown (default: false).
 * - `multiple`: Indicates if multiple values are allowed (default: false).
 * - `description`: A description of the profile field (default: empty string).
 * - `category`: The category to which the profile field belongs (default: empty string).
 * - `first_person_singular_description`: Description in the first person singular form (default: empty string).
 * - `second_person_singular_description`: Description in the second person singular form (default: empty string).
 * - `third_person_masculine_description`: Description in the third person masculine form (default: empty string).
 * - `field_values`: An array of possible values for the profile field (default: empty array).
 */
const DefaultProfileFieldJSON: Required<ApiProfileFieldJSON> = {
    name: '',
    field_type: 'string',
    value: '',
    dropdown: false,
    multiple: false,
    description: '',
    category: '',
    first_person_singular_description: '',
    second_person_singular_description: '',
    third_person_masculine_description: '',
    field_values: [],
};

/**
 * DefaultProfileFieldValueJSON is an object that represents the default values for a profile field.
 * 
 * @property {number} order - The order of the profile field.
 * @property {boolean} default - Indicates if this is the default value.
 * @property {any} value - The value of the profile field, can be of any type.
 * @property {string} description - A description of the profile field.
 * @property {string} first_person_singular_description - Description in the first person singular form.
 * @property {string} second_person_singular_description - Description in the second person singular form.
 * @property {string} third_person_masculine_description - Description in the third person masculine form.
 * @property {string} display_value - The display value of the profile field.
 * @property {string} first_person_singular_display_value - Display value in the first person singular form.
 * @property {string} second_person_singular_display_value - Display value in the second person singular form.
 * @property {string} third_person_masculine_display_value - Display value in the third person masculine form.
 */
const DefaultProfileFieldValueJSON: ApiProfileFieldValueJSON = {
    order: 0,
    default: true,
    value: null,
    description: '',
    first_person_singular_description: '',
    second_person_singular_description: '',
    third_person_masculine_description: '',
    display_value: '',
    first_person_singular_display_value: '',
    second_person_singular_display_value: '',
    third_person_masculine_display_value: ''
}

/**
 * Factory function to create an immutable record of type `ProfileFieldShape`.
 * 
 * This factory utilizes the `ImmutableRecord` utility to generate a strongly-typed
 * immutable record based on the `DefaultProfileFieldJSON` object, ensuring that all
 * required fields of `ProfileFieldShape` are present.
 * 
 * @constant {ImmutableRecord<ProfileFieldShape>} ProfileFieldShapeFactory - The immutable record factory for `ProfileFieldShape`.
 */
const ProfileFieldShapeFactory = ImmutableRecord<ProfileFieldShape>(DefaultProfileFieldJSON as Required<ProfileFieldShape>);

/**
 * A factory function that creates an immutable record for ProfileField.
 * 
 * @constant {ImmutableRecord<ProfileField>} ProfileFieldFactory - The factory function that initializes
 * an immutable record with the default values specified in DefaultProfileFieldJSON.
 */
const ProfileFieldFactory = ImmutableRecord<ProfileField>(DefaultProfileFieldJSON as Required<ProfileField>);

/**
 * Creates a profile field shape using the provided properties.
 *
 * @param props - A partial object containing properties to create the profile field shape.
 * @returns The created profile field shape.
 */
export function createProfileFieldShape(props: Partial<ProfileFieldShape>) {
    return ProfileFieldShapeFactory(props);
}
/**
 * Creates a new ProfileField object using the provided properties.
 *
 * @param props - A partial object containing properties to initialize the ProfileField.
 * @returns A fully initialized ProfileField object.
 */
export function createProfileField(props: Partial<ProfileField>): ProfileField {
    return ProfileFieldFactory(props);
}

export class ProfileFields extends Array<ProfileField> {
    get categories(): ProfileFieldCategory[] {
        return this.map((field) =>
            new ProfileFieldCategory(
                this.filter(field2 =>
                    field2.category === field.category))).filter(
                        (value, index, self) => self.indexOf(value) === index);
    }

    get fields(): ProfileField[] { return this; }
    get fieldsByCategory(): Record<string, ProfileField[]> {
        return this.reduce((acc: Record<string, ProfileField[]>, field) => {
            if (!acc[field.category]) acc[field.category] = [];
            acc[field.category!]?.push(field);
            return acc;
        }, {});
    }
}

/**
 * Represents a category of profile fields, extending the Array class to hold multiple ProfileField objects.
 * The first ProfileField in the array determines the category name.
 *
 * @extends {Array<ProfileField>}
 */
export class ProfileFieldCategory extends Array<ProfileField> {
  constructor(fields: ProfileField[]) {
    super(...fields);
  }

  get name(): string {
    return this[0].category;
  }
}

const ProfileFieldValueFactory = ImmutableRecord<ProfileFieldValueShape>(DefaultProfileFieldValueJSON);

export function createProfileFieldValue(props: Partial<ProfileFieldValueShape>) {
    return ProfileFieldValueFactory(props);
}

const DefaultProfileFieldShape = createProfileFieldShape(DefaultProfileFieldJSON);
const DefaultProfileField = createProfileField(DefaultProfileFieldJSON);
const DefaultProfileFieldValue = createProfileFieldValue(DefaultProfileFieldValueJSON);

/**
 * Represents the various types of profile fields that can be used.
 * 
 * @type {('string' | 'url' | 'date' | 'datetime' | 'float' | 'boolean' | 'object' | 'location' | 'integer')} ProfileFieldType
 * 
 * @property {'string'} string - A text field.
 * @property {'url'} url - A URL field.
 * @property {'date'} date - A date field.
 * @property {'datetime'} datetime - A datetime field.
 * @property {'float'} float - A floating-point number field.
 * @property {'boolean'} boolean - A boolean field.
 * @property {'object'} object - An object field.
 * @property {'location'} location - A location field.
 * @property {'integer'} integer - An integer field.
 */
export type ProfileFieldType = 'string' | 'url' | 'date' | 'datetime' | 'float' | 'boolean' | 'object' | 'location' | 'integer' | 'ft&in' | 'in/cm';


/**
 * An array of profile field types.
 * 
 * This constant is generated by converting a union type to a tuple using the `UnionToTuple` utility type.
 * The possible profile field types include:
 * - 'string'
 * - 'url'
 * - 'date'
 * - 'datetime'
 * - 'float'
 * - 'boolean'
 * - 'object'
 * - 'location'
 * - 'integer'
 * - 'ft&in'
 * - 'in/cm'
 * 
 * @constant
 * @type {ProfileFieldType[]}
 */
export const ProfileFieldTypes: ProfileFieldType[] =
  require("./unions-and-tuples-oh-my").UnionToTuple as UnionToTuple<ProfileFieldType>;  //'string', 'url', 'date', 'datetime', 'float', 'boolean', 'object', 'location', 'integer', 'ft&in', 'in/cm'];

/**
 * Represents the JSON structure of an API profile field.
 * 
 * @type {Object} ApiProfileFieldJSON
 * 
 * @property {string | undefined} name - The name of the profile field.
 * @property {ProfileFieldType} field_type - The type of the profile field.
 * @property {string | undefined} value - The value of the profile field.
 * @property {boolean} dropdown - Indicates if the field is a dropdown.
 * @property {string} description - A description of the profile field.
 * @property {boolean} multiple - Indicates if multiple values are allowed.
 * @property {string} category - The category of the profile field.
 * @property {string} first_person_singular_description - Description in the first person singular.
 * @property {string} second_person_singular_description - Description in the second person singular.
 * @property {string} third_person_masculine_description - Description in the third person masculine.
 * @property {ProfileFieldValue[]} field_values - An array of possible values for the profile field.
 */
export type ApiProfileFieldJSON = {
    name: string | undefined;
    field_type: ProfileFieldType
    value: string | undefined;
    dropdown: boolean;
    description: string;
    // Removed unused constants
    multiple: boolean;
    category: string;
    first_person_singular_description: string;
    second_person_singular_description: string;
    third_person_masculine_description: string;
    field_values: ProfileFieldValue[];
};

/**
 * Represents the shape of a profile field value.
 * This interface extends the required properties of `ApiProfileFieldValueJSON`.
 */
export interface ProfileFieldValueShape extends Required<ApiProfileFieldValueJSON> {
};

/**
 * Represents the value of a profile field.
 * 
 * This type is defined as a record of `ProfileFieldValueShape`.
 * It is used to structure the data for profile fields in the application.
 */
export type ProfileFieldValue = RecordOf<ProfileFieldValueShape>;

/**
 * Represents the JSON structure for an API profile field value.
 *
 * @property {number} order - The order of the profile field.
 * @property {boolean} default - Indicates if this is the default value.
 * @property {string | null} value - The actual value of the profile field, can be null.
 * @property {string} description - A description of the profile field.
 * @property {string} first_person_singular_description - Description in the first person singular form.
 * @property {string} second_person_singular_description - Description in the second person singular form.
 * @property {string} third_person_masculine_description - Description in the third person masculine form.
 * @property {string} display_value - The value to be displayed.
 * @property {string} first_person_singular_display_value - Display value in the first person singular form.
 * @property {string} second_person_singular_display_value - Display value in the second person singular form.
 * @property {string} third_person_masculine_display_value - Display value in the third person masculine form.
 */
export type ApiProfileFieldValueJSON = {
    order: number;
    default: boolean;
    value: string | null;
    description: string;
    first_person_singular_description: string;
    second_person_singular_description: string;
    third_person_masculine_description: string;
    display_value: string;
    first_person_singular_display_value: string;
    second_person_singular_display_value: string;
    third_person_masculine_display_value: string;
};
