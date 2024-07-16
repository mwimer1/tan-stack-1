export default {
  inherit: {
    type: 'ww-text',
    exclude: ['text'],
  },
  editor: {
    label: { en: 'Custom Table', fr: 'Tableau Personnalisé' },
    icon: 'table',
    customSettingsPropertiesOrder: [
      'headers',
      'rows',
    ],
    customStylePropertiesOrder: [
      'borderColor',
      'borderWidth',
      'cellPadding',
    ],
  },
  states: ['hover', 'active'],
  actions: [{ label: 'Row Click', action: 'onRowClick' }],
  triggerEvents: [
    { name: 'rowClick', label: { en: 'On row click' }, event: { row: '' }, default: true },
  ],
  properties: {
    headers: {
      label: { en: 'Headers' },
      type: 'Array',
      bindable: true,
      responsive: true,
      defaultValue: [],
      /* wwEditor:start */
      bindingValidation: {
        type: 'array',
        tooltip: 'An array of strings representing table headers',
      },
      /* wwEditor:end */
    },
    rows: {
      label: { en: 'Rows' },
      type: 'Array',
      bindable: true,
      responsive: true,
      defaultValue: [],
      /* wwEditor:start */
      bindingValidation: {
        type: 'array',
        tooltip: 'An array of arrays representing table rows',
      },
      /* wwEditor:end */
    },
  },
};
