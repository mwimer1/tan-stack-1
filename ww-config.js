export default {
  inherit: {
    type: 'ww-text',
    exclude: ['text'],
  },
  editor: {
    label: { en: 'TanStack Table', fr: 'Tableau TanStack' },
    icon: 'table',
    customSettingsPropertiesOrder: [
      'columns',
      'dataSource',
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
    columns: {
      label: { en: 'Columns' },
      type: 'Array',
      bindable: true,
      responsive: true,
      defaultValue: [
        {
          header: 'Name',
          accessor: 'firstName',
        },
        {
          header: 'Age',
          accessor: 'age',
        },
        {
          header: 'Address',
          accessor: 'address',
        },
      ],
      /* wwEditor:start */
      bindingValidation: {
        type: 'array',
        tooltip: 'An array of objects representing table columns',
      },
      /* wwEditor:end */
    },
    dataSource: {
      label: { en: 'Data Source' },
      type: 'Array',
      bindable: true,
      responsive: true,
      defaultValue: [],
      /* wwEditor:start */
      bindingValidation: {
        type: 'array',
        tooltip: 'An array of objects representing table data',
      },
      /* wwEditor:end */
    }
  }
};
