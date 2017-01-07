
var categories = [
        {
          id: 0,
          name: 'Category 1',
          tasks: [
            {
              id: 0,
              name: 'Task 1'
            }, {
              id: 1,
              name: 'Task 2'
            },
          ]
        },{
          id: 1,
          name: 'Category 2',
          tasks: [
            {
              id: 0,
              name: 'Task 2 1'
            }, {
              id: 1,
              name: 'Task 2 2'
            },
          ]
        },{
          id: 2,
          name: 'Category 3',
          tasks: [
            {
              id: 0,
              name: 'Task 3 1'
            }, {
              id: 1,
              name: 'Task 3 2'
            },
          ],
          categories: [
            {
              id: 20,
              name: 'Category 3 1',
              tasks: [
                {
                  id: 0,
                  name: 'Task 3 1 1'
                }, {
                  id: 1,
                  name: 'Task 3 1 2'
                },
              ]
            }
          ]
        }
      ];
    
class MainService {

    constructor() {}

    getCategories() {
        return categories;
    }

}

export default new MainService();