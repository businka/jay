## props
* storeName - namespace vuex
* storeKey - индекс данных в store vuex
* form 


* тип
  * объект
    * форма
      * компонент


## Разметка


Форма - набор компонент которые можно использовать самостоятельно, форма имеет
свой набор данных и действий в хранилище vuex

Расширение формы - набор компонент выделенных с целью возможности переиспользования
из формы, не имеют своего хранилища и действий. Пользуются хранилищем и действиями формы.

Представление формы - набор компонент с отличным об базовой формы оформлением, но и 
использующих тот же набор данных и действий в своём хранилище.

Изначально предполагается, что финальный набор форм приложения строися динамически
по данным бизнес-логики без использования серверного рендеринга.

Таким образом на базовой форме располагается именованный набор переиспользуемых
компонент и дочерних форм. Базовая форма выступает в роли диспетчера, выдавая 
имена хранилищ дочерних форм (каждая форма имеет в хранилище свой именной модуль
 имя формы = namespace vuex ). Т.е. для выполнения
действия в контексте дочерней формы нужно запросить имя хранилища дочерней формы по
её имени в контексте базовой формы и уже затем выполнить действие в хранилище. 


Бизнес логика предоставляет структуру формы в следущем виде.


Приложение разрабатывается с целью обработки данных. Еденицей
обрабатываемой информации является объект данных.

Объекты данных структурируются видам и типам. Для доступа к данным
приложение предоставляет программный и пользовательский интерфейс.

Пользовательский интерфейс состоит с форм привязанных к типу объекта.

вид - тип - формы - имя формы = параметры формы, допускается с параметрами подформ
вид - тип - формы - имя формы - имя подформы = параметры подформы
вид - тип - программный интерфейс - методы - данные объеков

* Document
  * Invoice
    * List (template Browser) = browser \document\invoice\form\list\
      ```

      ``` 
      * ToolBar (template ToolBar)
      * Content (template Grid)
      * EditForm (template Edit)      
    * Index (template Tabs) = tabs \document\invoice\form\index\ 
      * List (template Browser) = urlFormParam: browser\document\invoice\form\list\
    * Edit = \document\invoice\form\edit =
      ```
      * urlFormParam: edit\document\invoice\form\edit\
      * state: Browser \document\invoice\
      * action: edit \document\invoice\
      ```
      * Selection header object 1
        ```
        * urlFormParam: edit\document\invoice\form\edit\
        * state: Browser \document\invoice\
        * action: edit \document\invoice\
        ```
      * Table1 (template Browser)
        ```
        props-root-namespace:
        props-root-uid:
        props-root-form: bool # имя свойства где долны храниться данные, если не заполнены в локальном хранилище
        props-name: имя объекта для корневого объекта, оно же имя свойства где хранятся данные
        props-store-uid: props-root-uid + props-name
        
        form-name = 
        form-store-namespace = template
        form-store-key = 
        
        ```
         * Selection table object 1
          ```
          * urlFormParam: edit\document\invoice\form\edit\
          * state: Browser \document\invoice\
          * action: edit \document\invoice\
          ```
             
    * dfdf     
    
    
* Component props
  * name - имя данного компонента для родителя
  * parentStoreName - parent vuex namespace 
  * parentStoreKey - uid данных в радительском хранилище
  * parentStore - признак какое хранилище использовать - локальное или родителя. в последнем случае данные хранятся в 
                  свойстве одноименном с именем компонента
  * mode - способ работы с данными хранилища (local / remote)
    
    

состоит из разлиного  
На уровне конфигуратора описывается набор форм приложения.

  
## Form
* parentStoreKey
* parentStoreName



## Хранилище


Для каждого типа шаблона выделяется хранилище
