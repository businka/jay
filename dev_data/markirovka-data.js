module.exports = {
  Document: {
    EmissionIC: {
      Form: {
        Index: {
          templateParam: {
            tabs: [
              {
                id: 'Document/EmissionOrderIC/Form/List',
                title: 'OrderIC',
                template: 'Browser',
                templateParams: {
                  toolBar: {
                    visible: false
                  }
                },
                storeParams: {
                  key: 'Document/EmissionOrderIC/List',
                  objType: 'Document',
                  objName: 'EmissionOrderIC',
                  objForm: 'List',
                  mode: 'remote',
                  namespace: 'Browser'
                }
              },
              {
                id: 'Document/EmissionIC/Form/List',
                title: 'EmissionIC',
                template: 'Browser',
                templateParams: {
                  toolBar: {
                    visible: false
                  }
                },
                storeParams: {
                  key: 'Document/EmissionIC/List',
                  objType: 'Document',
                  objName: 'EmissionIC',
                  objForm: 'List',
                  mode: 'remote',
                  namespace: 'Browser'
                }
              }
            ],
            default: 'Document/EmissionIC/Form/List',
            active: 'Document/EmissionIC/Form/List'
          }
        },
        List: {
          parentKey: 'Document/Emission/Form/List',
          name: 'ФормаCписка',
          template: 'Browser',
          templateParam: {
            dataSource: {
              template: 'DataGrid',
              mode: 'remote',
              objType: 'Document',
              objName: 'EmissionIC',
              columns: [
                {
                  field: 'date',
                  label: 'date',
                  align: 'right',
                  template: 'DateTime'
                },
                {
                  field: 'title',
                  label: 'title',
                  align: 'left',
                  template: 'DocMemberAttachment',
                  role: 'Sender'
                },
                {
                  field: 'amount',
                  align: 'right',
                  template: 'Default'
                },
                {
                  field: 'notOrdered',
                  align: 'right',
                  template: 'Default',
                  format: val => `${val || ''}`
                },
                {
                  field: 'notReceived',
                  align: 'right',
                  template: 'Default',
                  format: val => `${val || ''}`
                },
                {
                  field: 'notCleaned',
                  align: 'right',
                  template: 'Default',
                  format: val => `${val || ''}`
                }
              ],
              rows: [],
              filter: {},
              searchString: ''
            },
            mode: 'remote',
            inlineActions: {},
            filterField: '',
            toolBar: {
              visible: true,
              massOperationsBar: true,
              items: [
                {
                  name: 'Add',
                  template: 'DefaultAction',
                  title: 'AddDocument'
                },
                {
                  name: 'Import',
                  template: 'Action',
                  title: 'Import',
                  icon: 'mdi-import'
                }
              ]
            },
            massOperationsBar: {
              selectAll: true,
              visible: false,
              items: [
                {
                  name: 'Delete',
                  title: 'Delete'
                },
                {
                  name: 'Export',
                  title: 'Export'
                }
              ]
            },
            defaultForm: 'DocEmissionIC',
            defaultFormTemplate: 'DocEmissionIC',
            record: {},
            error: {}
          }
        },
        Doc: {}
      },
      Data: [
        {
          id: 'a1',
          number: '1300001',
          date: '2019-09-24 16:36:33',
          title: 'order',
          amount: 2000,
          notOrdered: 2000,
          notReceived: 0,
          notCleaned: 0,
          members: [
            {
              role: 'Sender',
              member_title: 'Пермэнергосбыт',
              member_id: 'a123f1'
            }
          ]
        }
      ]
    },
    EmissionOrderIC: {
      Form: {
        List: {
          parentKey: 'Document/EmissionIC/Form/List',
          name: 'ФормаCписка',
          template: 'Browser',
          templateParam: {
            dataSource: {
              template: 'DataGrid',
              mode: 'remote',
              objType: 'Document',
              objName: 'EmissionIC',
              columns: [
                {
                  field: 'date',
                  label: 'date',
                  align: 'right',
                  template: 'DateTime'
                },
                {
                  field: 'title',
                  label: 'title',
                  align: 'left',
                  template: 'DocMemberAttachment',
                  role: 'Sender'
                },
                {
                  field: 'amount',
                  align: 'right',
                  template: 'Default'
                },
                {
                  field: 'notOrdered',
                  align: 'right',
                  template: 'Default',
                  format: val => `${val || ''}`
                },
                {
                  field: 'notReceived',
                  align: 'right',
                  template: 'Default',
                  format: val => `${val || ''}`
                },
                {
                  field: 'notCleaned',
                  align: 'right',
                  template: 'Default',
                  format: val => `${val || ''}`
                }
              ],
              rows: [],
              filter: {},
              searchString: ''
            },
            mode: 'remote',
            inlineActions: {},
            filterField: '',
            toolBar: {
              visible: true,
              massOperationsBar: true,
              items: [
                {
                  name: 'Add',
                  template: 'DefaultAction',
                  title: 'AddDocument'
                },
                {
                  name: 'Import',
                  template: 'Action',
                  title: 'Import',
                  icon: 'mdi-import'
                }
              ]
            },
            massOperationsBar: {
              selectAll: true,
              visible: false,
              items: [
                {
                  name: 'Delete',
                  title: 'Delete'
                },
                {
                  name: 'Export',
                  title: 'Export'
                }
              ]
            },
            defaultForm: 'DocEdi',
            defaultFormTemplate: 'DocEdi',
            record: {},
            error: {}
          }
        }
      },
      Data: [
        {
          id: 'a1',
          number: '1300001',
          date: '2019-09-24 16:36:33',
          title: 'order',
          amount: 2000,
          notOrdered: 2000,
          notReceived: 0,
          notCleaned: 0,
          members: [
            {
              role: 'Sender',
              member_title: 'Пермэнергосбыт',
              member_id: 'a123f1'
            }
          ]
        }
      ]
    }
  }
}
