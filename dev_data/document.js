let data1 = require('./markirovka-data')
module.exports = {
  Document: {
    Outgoing: {
      Form: {
        Index: {
          templateParam: {
            tabs: [
              {
                id: 'Document/Outgoing/Form/Statistic',
                title: 'Statistic',
                template: ''
              },
              {
                id: 'Document/Outgoing/Form/Answers',
                // section: 'Document',
                // page: 'Outgoing',
                // form: 'Answers',
                title: 'Answers',
                template: 'Browser'
              },
              {
                id: 'Document/Outgoing/Form/List',
                title: 'List',
                template: 'Browser',
                templateParams: {
                  toolBar: {
                    visible: false
                  }
                },
                storeParams: {
                  key: 'Document/Outgoing/List',
                  objType: 'Document',
                  objName: 'Outgoing',
                  objForm: 'List',
                  mode: 'remote',
                  namespace: 'Browser'
                }
              }
            ],
            default: 'Document/Outgoing/Form/List',
            active: 'Document/Outgoing/Form/List'
          }
        },
        List: {
          parentKey: 'Document/Outgoing/Form/List',
          name: 'ФормаCписка',
          template: 'Browser',
          templateParam: {
            dataSource: {
              template: 'DataGrid',
              mode: 'remote',
              objType: 'Document',
              objName: 'Outgoing',
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
                  field: 'title',
                  label: 'title',
                  align: 'left',
                  template: 'Default'
                },
                {
                  field: 'sum',
                  label: 'sum',
                  align: 'right',
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
        },
        DocEdi: { data: {} }
      },
      Data: [
        {
          id: 'a1',
          number: '1300001',
          date: '2019-09-24 16:36:33',
          title: 'order',
          sum: 3443.22,
          members: [
            {
              role: 'Sender',
              member_title: 'Пермэнергосбыт',
              member_id: 'a123f1'
            },
            {
              role: 'Receiver',
              member_title: 'Патрнер СБИС, филиал г.Москва',
              member_id: 'a123f2'
            }
          ],
          attachment: [
            {
              file_title: 'Накладная 03.03.19 № 1 на сумму 481 666 р. в т.ч. НДС 59 568.16 р.',
              file_id: 'ff112'
            },
            {
              file_title: 'Директор Пермэнергосбыт Иванов И.С.',
              file_id: 'ff115',
              role: 'signature',
              parent_id: 'ff112'
            },
            {
              file_title: 'Фактура 03.01.19 № 1 на сумму 481 666 р., в т.ч. НДС 59 568.16 р.',
              file_id: 'ff1122'
            },
            {
              file_title: 'Директор Патрнер СБИС Михайлов И.С.',
              file_id: 'ff116',
              role: 'signature',
              parent_id: 'ff1122'
            },
            {
              file_title: 'Извещение о получении',
              file_id: 'ff117',
              role: 'service'
            }
          ]
        },
        {
          id: 'a2',
          number: '1300001',
          date: '2019-09-24 17:36:33',
          title: 'order',
          sum: 13443.22,
          members: [
            {
              role: 'Sender',
              member_title: 'Пермэнергосбыт',
              member_id: 'a123f1'
            },
            {
              role: 'Receiver',
              member_title: 'Патрнер СБИС, филиал г.Москва',
              member_id: 'a123f2'
            }
          ],
          attachment: [
            {
              file_title: 'Накладная 05.03.19 № 2 на сумму 1481 666 р. в т.ч. НДС 59 568.16 р.',
              file_id: 'ff112'
            },
            {
              file_title: 'Директор Пермэнергосбыт Иванов И.С.',
              file_id: 'ff115',
              role: 'signature',
              parent_id: 'ff112'
            },
            {
              file_title: 'Фактура 05.01.19 № 2 на сумму 481 1666 р., в т.ч. НДС 59 568.16 р.',
              file_id: 'ff1122'
            },
            {
              file_title: 'Директор Патрнер СБИС Михайлов И.С.',
              file_id: 'ff116',
              role: 'signature',
              parent_id: 'ff1122'
            },
            {
              file_title: 'Извещение о получении',
              file_id: 'ff117',
              role: 'service'
            }
          ]
        },
        {
          id: 'a3',
          number: '1300001',
          date: '2019-09-24 17:40:33',
          title: 'order',
          sum: 13443.22,
          members: [
            {
              role: 'Sender',
              member_title: 'Пермэнергосбыт',
              member_id: 'a123f1'
            },
            {
              role: 'Receiver',
              member_title: 'Патрнер СБИС, филиал г.Москва',
              member_id: 'a123f2'
            }
          ],
          attachment: [
            {
              file_title: 'Накладная 05.03.19 № 2 на сумму 1481 666 р. в т.ч. НДС 59 568.16 р.',
              file_id: 'ff112'
            },
            {
              file_title: 'Директор Пермэнергосбыт Иванов И.С.',
              file_id: 'ff115',
              role: 'signature',
              parent_id: 'ff112'
            },
            {
              file_title: 'Фактура 05.01.19 № 2 на сумму 481 1666 р., в т.ч. НДС 59 568.16 р.',
              file_id: 'ff1122'
            },
            {
              file_title: 'Директор Патрнер СБИС Михайлов И.С.',
              file_id: 'ff116',
              role: 'signature',
              parent_id: 'ff1122'
            },
            {
              file_title: 'Извещение о получении',
              file_id: 'ff117',
              role: 'service'
            }
          ]
        },
        {
          id: 'a4',
          number: '1300001',
          date: '2019-09-25 17:36:33',
          title: 'order',
          sum: 13443.22,
          members: [
            {
              role: 'Sender',
              member_title: 'Пермэнергосбыт',
              member_id: 'a123f1'
            },
            {
              role: 'Receiver',
              member_title: 'Патрнер СБИС, филиал г.Москва',
              member_id: 'a123f2'
            }
          ],
          attachment: [
            {
              file_title: 'Накладная 05.03.19 № 2 на сумму 1481 666 р. в т.ч. НДС 59 568.16 р.',
              file_id: 'ff112'
            },
            {
              file_title: 'Директор Пермэнергосбыт Иванов И.С.',
              file_id: 'ff115',
              role: 'signature',
              parent_id: 'ff112'
            },
            {
              file_title: 'Фактура 05.01.19 № 2 на сумму 481 1666 р., в т.ч. НДС 59 568.16 р.',
              file_id: 'ff1122'
            },
            {
              file_title: 'Директор Патрнер СБИС Михайлов И.С.',
              file_id: 'ff116',
              role: 'signature',
              parent_id: 'ff1122'
            },
            {
              file_title: 'Извещение о получении',
              file_id: 'ff117',
              role: 'service'
            }
          ]
        },
        {
          id: 'a5',
          number: '1300001',
          date: '2019-09-25 17:36:33',
          title: 'order',
          sum: 13443.22,
          members: [
            {
              role: 'Sender',
              member_title: 'Пермэнергосбыт',
              member_id: 'a123f1'
            },
            {
              role: 'Receiver',
              member_title: 'Патрнер СБИС, филиал г.Москва',
              member_id: 'a123f2'
            }
          ],
          attachment: [
            {
              file_title: 'Накладная 05.03.19 № 2 на сумму 1481 666 р. в т.ч. НДС 59 568.16 р.',
              file_id: 'ff112'
            },
            {
              file_title: 'Директор Пермэнергосбыт Иванов И.С.',
              file_id: 'ff115',
              role: 'signature',
              parent_id: 'ff112'
            },
            {
              file_title: 'Фактура 05.01.19 № 2 на сумму 481 1666 р., в т.ч. НДС 59 568.16 р.',
              file_id: 'ff1122'
            },
            {
              file_title: 'Директор Патрнер СБИС Михайлов И.С.',
              file_id: 'ff116',
              role: 'signature',
              parent_id: 'ff1122'
            },
            {
              file_title: 'Извещение о получении',
              file_id: 'ff117',
              role: 'service'
            }
          ]
        }
      ]
    },
    EmissionIC: data1.Document.EmissionIC,
    EmissionOrderIC: data1.Document.EmissionOrderIC
  }
}
// module.exports = function (app, server) {
// let listBrowserParams = Object.assign({}, form.Documents.Outgoing.Form.List, {
//   toolBar: {
//     visible: false
//   }
// })
// app.get('/form/Document/Outgoing/Index', function (req, res) {
//   res.json(
//     {
//       tabs: [
//         {
//           id: 'Document/Outgoing/Form/Statistic',
//           title: 'Statistic',
//           template: ''
//         },
//         {
//           id: 'Document/Outgoing/Form/Answers',
//           // section: 'Document',
//           // page: 'Outgoing',
//           // form: 'Answers',
//           title: 'Answers',
//           template: 'Browser'
//         },
//         {
//           id: 'Document/Outgoing/Form/List',
//           title: 'List',
//           template: 'Browser',
//           templateParams: {
//             toolBar: {
//               visible: false
//             }
//           },
//           storeParams: {
//             key: 'Document/Outgoing/List',
//             objType: 'Document',
//             objName: 'Outgoing',
//             objForm: 'List',
//             mode: 'remote',
//             namespace: 'Browser'
//           }
//         }
//       ],
//       default: 'Document/Outgoing/Form/List',
//       active: 'Document/Outgoing/Form/List'
//     })
// })
// app.get('/form/:objType/:objName/:objForm', function (req, res) {
//   res.json(data['Document']['Outgoing'].Form[req.params.objForm].templateParam)
// })
// app.get('/api/:objType/:objName/query', function (req, res) {
//   res.json(data.Documents.Outgoing.Data)
// })
// app.get('/api/:objType/:objName', function (req, res) {
//   res.json(data.Documents.Outgoing.Data[0])
// })
// }
