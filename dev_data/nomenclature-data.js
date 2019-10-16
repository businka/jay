module.exports = {
  Catalog: {
    Nomenclature: {
      Form: {
        List: {
          parentKey: 'Catalog/Nomenclature/Form/List',
          name: 'ФормаCписка',
          template: 'Browser',
          templateParam: {
            dataSource: {
              template: 'treeDataGrid',
              mode: 'remote',
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
  nom_categories: [
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
  nom_types: [
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
  nam_props: [
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
