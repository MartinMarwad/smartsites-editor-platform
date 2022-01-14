import type { CellPlugin } from '@react-page/editor';
import dynamic from 'next/dynamic';
import React from 'react';
// import type { Field } from '../components/ContactFormExample.js';

// Contact form component
// : React.FC<{
//   recipientId: string;
//   fields: Field[];
// }>
const ContactFormExample = ({ fields = [], recipientId }) => {
  return (
    <form
      onSubmit={(e) => {
        const formData = new FormData(e.currentTarget);
        const formProps = Object.fromEntries(formData);
        alert(`would send contact form to ${recipientId}.\n
        ${Object.keys(formProps)
          .map((key) => `${key}: ${formProps[key]}`)
          .join('\n')}
                `);
                e.preventDefault();
              }}
              style={{
                border: '1px solid black',
                padding: 10,
              }}
            >
              {fields.map((field, index) => (
                <label key={field.name ?? index}>
                  {field.label} {field.required ? '*' : ''}
                  <br />
                  <input
                    type={field.type}
                    required={field.required}
                    name={field.name}
                  />
                  <br />
                </label>
              ))}
              <button type="submit">Submit</button>
            </form>
          );
};

// lazy load to keep initial bundle small
// const ContactFormExample = dynamic(
//   () => import('../components/ContactFormExample.js')
// );


// : CellPlugin<{
//   fields: Field[];
//   recipientId: string;
// }>
const contactForm = {
  Renderer: ({ data }) => (
    <ContactFormExample fields={data.fields} recipientId={data.recipientId} />
  ),
  id: 'contact-form',
  title: 'Contact form',
  description: 'A simple, configurable contactform',
  version: 1,
  controls: {
    type: 'autoform',
    columnCount: 1,
    schema: {
      properties: {
        recipientId: {
          type: 'string',
          enum: ['recipient-1', 'recipient-2', 'recipient-3'],
        },
        fields: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              label: {
                type: 'string',
              },
              type: {
                type: 'string',
                enum: ['text', 'number'],
              },
              name: {
                type: 'string',
              },
              required: {
                type: 'boolean',
              },
            },
          },
        },
      },
      required: ['fields', 'recipientId'],
    },
  },
};
export default contactForm;
