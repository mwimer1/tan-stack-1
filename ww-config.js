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
          header: 'First Name',
          accessor: 'firstName',
        },
        {
          header: 'Last Name',
          accessor: 'lastName',
        },
        {
          header: 'Age',
          accessor: 'age',
        },
        {
          header: 'Visits',
          accessor: 'visits',
        },
        {
          header: 'Status',
          accessor: 'status',
        },
        {
          header: 'Progress',
          accessor: 'progress',
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
      defaultValue: [
        {
          firstName: 'tanner',
          lastName: 'linsley',
          age: 24,
          visits: 100,
          status: 'In Relationship',
          progress: 50,
        },
        {
          firstName: 'tandy',
          lastName: 'miller',
          age: 40,
          visits: 40,
          status: 'Single',
          progress: 80,
        },
        {
          firstName: 'joe',
          lastName: 'dirte',
          age: 45,
          visits: 20,
          status: 'Complicated',
          progress: 10,
        },
      ],
      /* wwEditor:start */
      bindingValidation: {
        type: 'array',
        tooltip: 'An array of objects representing table data',
      },
      /* wwEditor:end */
    }
  }
};
