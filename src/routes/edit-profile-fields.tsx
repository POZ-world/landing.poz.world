import React from 'react';
import { useState, useEffect } from 'react';
import { apiGetFieldTemplates, apiGetCurrentUserAccount } from '../api/fields';
import { ProfileField, ProfileFieldCategory, ProfileFields } from '../types/profile-fields';
import Accordion from 'react-bootstrap/Accordion';
import { Account } from '@poz-world/poz.world/mastodon/models/account';

function titleize(str: string): string {
    return str.replace(/\b\w/g, char => char.toUpperCase());
}

export default function EditProfileFields() {
    const [account, setAccount] = useState<Account>({} as Account);
    const [fieldTemplates, setFieldTemplates] = useState<ProfileFields>({} as ProfileFields);

    useEffect(() => {
        const fetchData = async () => {
            const fieldTemplatesResponse = await apiGetFieldTemplates();
            setFieldTemplates(fieldTemplatesResponse);

            const accountResponse = await apiGetCurrentUserAccount();
            setAccount(accountResponse);
        };
        fetchData();
    }, []);

    return (
        <Accordion>
            {
                fieldTemplates.categories?.map((category:ProfileFieldCategory) => (
                    <Accordion.Item key={category.name} eventKey={category.name}>
                        <Accordion.Header>{titleize(category.name)}</Accordion.Header>
                        <Accordion.Body>
                            {
                                fieldTemplates.filter((fieldTemplate: ProfileField) => fieldTemplate.category === category.name)?.map((fieldTemplate: ProfileField) => (
                                  <div key={fieldTemplate.name}>
                                        <h2>{fieldTemplate.name}</h2>
                                        <p>{fieldTemplate.category}</p>
                                        <p>{fieldTemplate.field_values}</p>
                                    </div>
                                ))
                            }
                        </Accordion.Body>
                    </Accordion.Item>
                ))
            }
        </Accordion >
    );

    // return (
    //     <div>
    //     <h1>Profile Fields </h1>
    //         < div >
    //         <div>
    //         {
    //             fieldTemplates.map((fieldTemplate) => (
    //                 <div key= { fieldTemplate.name } >
    //                 <h2>{ fieldTemplate.name } </h2>
    //                 < p > { fieldTemplate.category } </p>
    //                 < p > { fieldTemplate.dropdownOptions } </p>
    //                 </div>
    //             ))
    //         }
    //         </div>
    //         </div>
    //         </div>
    // );
}
// const ProfileFields = ({ initialFields }) => {
//     const [fields, setFields] = useState(initialFields);

//     const handleDropdownChange = (index, value) => {
//         const newFields = [...fields];
//         newFields[index].value = value;
//         setFields(newFields);
//     };

//     const handleTextChange = (index, e) => {
//         const newFields = [...fields];
//         newFields[index].value = e.target.value;
//         setFields(newFields);
//     };

//     const handleAddField = (templateName) => {
//         const selectedTemplate = fieldTemplates.find((template) => template.name === templateName);
//         if (selectedTemplate) {
//             setFields([
//                 ...fields,
//                 { name: selectedTemplate.name, value: '', dropdown: selectedTemplate.dropdown },
//             ]);
//         } else {
//             setFields([
//                 ...fields,
//                 { name: '', value: '', dropdown: false, isNew: true },
//             ]);
//         }
//     };

//     const handleDelete = (index) => {
//         const newFields = fields.filter((_, i) => i !== index);
//         setFields(newFields);
//     };

//     return (
//         <div className= "profile-fields-form" >
//         {
//             fieldTemplates.reduce((acc, { category }) => {
//                 if (!acc.includes(category)) acc.push(category);
//                 return acc;
//             }, []).map((category) =>
//                 <div key={ category } className = "accordion" >
//                 <h3>{ category } </h3>
//                 < div className = "accordion-content" >
//                 {
//                     fields
//               .filter((field) => fieldTemplates.some((template) => template.category === category && template.name === field.name))
//                         .map((field, index) => (
//                             <div key= { index } className = "field-group" >
//                             <label>{ field.name } </label>
//                   {
//                                 field.dropdown ? (
//                                     <select
//                       value= { field.value }
//                       onChange={(e) => handleDropdownChange(index, e.target.value)}
//                     >
// {
//     fieldTemplates.find(template => template.name === field.name).dropdownOptions.map((option, i) => (
//         <option key= { i } value = { option } > { option } </option>
//     ))
// }
//     < option value = "custom" > Add custom...</option>
//         </select>
//                   ) : (
//     <input
//                       type= "text"
// value = { field.value }
// placeholder = { field.name }
// onChange = {(e) => handleTextChange(index, e)}
//                     />
//                   )}
// <button type="button" onClick = {() => handleDelete(index)}> Delete </button>
//     </div>
//               ))}
// </div>
//     </div>)}

// <div className="combo-button-group" >
//     <select onChange={ (e) => handleAddField(e.target.value) }>
//         <option value="" > Select from Templates...</option>
// {
//     fieldTemplates.map(template => (
//         <option key= { template.name } value = { template.name } > { template.name } </option>
//     ))
// }
// </select>
//     < button onClick = {() => handleAddField("")}> Add New Field </button>
//         </div>
//         </div>
//   );
// };

// // Usage example
// // mockInitialFields would be retrieved and passed from the backend.
// const mockInitialFields = [
//     { name: 'Birthday', value: '', dropdown: true },
//     { name: 'Email', value: '', dropdown: false }
// ];

// export default function App() {
//     return (
//         <ProfileFields initialFields= { mockInitialFields } />
//   );
// }
