module.exports = {
  Catalog: {
    Nomenclature: {
      Form: {
        List: {
          template: 'Browser',
          mode: {
            name: 'remote'
          },
          components: {
            content: {
              template: 'TreeDataGrid',
              mode: { name: 'remote' },
              objType: 'Catalog',
              objName: 'Nomenclature',
              columns: [
                {
                  field: 'id',
                  label: 'name',
                  align: 'left',
                  template: 'Default'
                }
              ],
              inlineActions: {},
              store: {
                visible: true,
                massOperationsBar: true,
                filters: {},
                error: {},
                rows: [],
                row: {}
              }
            },
            toolBar: {
              template: 'ToolBar',
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
              template: 'MassOperationsBar',
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
            filterBar: {
              template: 'FilterBar',
              components: {
                search: {
                  template: 'SearchForm',
                  filterField: {}
                },
                filer: {
                  template: 'Filter',
                  filterField: {}
                }
              }
            }
          },
          store: {
            massOperationsBarVisible: false,
            massOperationsBar: true,
            editForm: {},
            filters: {},
            error: {}
          },
          editFormDefault: 'Catalog/Nomenclature/Item'
        },
        Item: {
          template: 'NomenclatureItem',
          mode: {
            name: 'remote'
          },
          components: {
            props: {
              template: 'Browser',
              components: {
                content: {
                  template: 'DataGrid',
                  mode: {
                    name: 'store',
                    path: ['item', 'props']
                  },
                  objType: 'Catalog',
                  objName: 'Nomenclature',
                  columns: [
                    {
                      field: 'id',
                      label: 'name',
                      align: 'left',
                      template: 'Default'
                    },
                    {
                      field: 'value',
                      label: 'value',
                      align: 'right',
                      template: 'Default'
                    }
                  ],
                  inlineActions: {},
                  store: {
                    filters: {},
                    error: {},
                    rows: [],
                    row: {}
                  }
                }
              },
              store: {
                massOperationsBarVisible: false,
                massOperationsBar: true,
                editForm: {},
                filters: {},
                error: {}
              }
            },
            toolBar: {
              template: 'ToolBar',
              visible: true,
              items: [
                {
                  template: 'Space'
                },
                {
                  name: 'Save',
                  template: 'DefaultAction',
                  title: 'Save',
                  action: 'emit',
                  data: { name: 'Update' }
                },
                {
                  name: 'Close',
                  template: 'Action',
                  title: 'Close',
                  icon: 'close',
                  action: 'emit',
                  data: { name: 'Close' }

                }
              ]
            }
          },
          store: {
            item: {},
            loading: false
          }
        }
      },
      Data: [
        {
          id: 't1',
          title: 'Туфли славянка',
          parent: null,
          characteristic: '',
          category: ['Туфли'],
          props: [
            {
              id: 'Размер обуви RUS',
              characteristic: true,
              min: 42,
              max: 46
            },
            {
              id: 'Цвет',
              characteristic: true,
              items: ['белый', 'черный']
            },
            {
              id: 'Материал подошвы',
              items: ['резина', 'каучук']
            }
          ],
          child: null
        },
        {
          id: 't2',
          title: 'Туфли славянка р.43 цв.белый',
          folder: false,
          parent: 't1',
          characteristic: 'р.43 цв.белый',
          category: ['Туфли'],
          props: [
            {
              id: 'Размер обуви RUS',
              characteristic: true,
              value: 43
            },
            {
              id: 'Цвет',
              characteristic: true,
              value: 'белый'
            },
            {
              id: 'Материал подошвы',
              items: 'резина'
            }
          ]
        },
        {
          id: 't3',
          title: 'Туфли славянка р.46 цв.белый',
          folder: false,
          parent: 't1',
          characteristic: 'р.46 цв.белый',
          category: ['Туфли'],
          props: [
            {
              id: 'Размер обуви RUS',
              characteristic: true,
              value: 46
            },
            {
              id: 'Цвет',
              characteristic: true,
              value: 'белый'
            },
            {
              id: 'Материал подошвы',
              items: 'резина'
            }
          ]
        },
        {
          id: 't4',
          title: 'Шлепанцы',
          folder: false,
          parent: null,
          characteristic: 'р.43 цв.белый',
          category: ['Туфли'],
          props: [
            {
              id: 'Размер обуви RUS',
              characteristic: true,
              value: 43
            },
            {
              id: 'Цвет',
              characteristic: true,
              value: 'белый'
            },
            {
              id: 'Материал подошвы',
              items: 'резина'
            }
          ]
        }

      ]
    }
  },
  nom_categories:
    [
      {
        id: 'Кросовки'
      },
      {
        id: 'Туфли'
      },
      {
        id: 'Средства для ухода за обувью'
      }
    ],
  nom_types:
    [
      {
        id: 'Мужская обувь',
        props: [
          {
            id: 'Размер обуви RUS',
            characteristic: true,
            type: 'number',
            min: 37.5,
            max: 50
          },
          {
            id: 'Материал подошвы',
            type: 'enum'
          }
        ]

      },
      {
        id: 'Средства для ухода за обувью'
      }
    ],
  nam_props:
    [
      {
        id: 'Размер обуви RUS',
        type: 'number'
      },
      {
        id: 'Материал подошвы',
        type: 'enum'
      },
      {
        id: 'Цвет',
        type: 'enum'
      }
    ]
}
