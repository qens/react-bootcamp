import * as _ from 'lodash';

export class Category {
    constructor(id, name, tasks, categories) {
        this.id = id;
        this.name =name;
        this.tasks = tasks;
        this.categories = categories;
    }
}

export class Task {
    constructor(id, name, done) {
        this.id = id;
        this.name =name;
        this.done = done;
    }
}



function generateCategories() {
    var categories = [];
    for (var i = 0; i < 3; i++ ) {
        var tasks = [];
        for (var j = 0; j < 2; j++) {
            tasks.push(new Task(_.uniqueId(), 'Add new task', false));
        }
        categories.push(new Category(_.uniqueId(), `Category #${i}`, tasks, null));
    }

    categories[categories.length-1].categories = [new Category(_.uniqueId(), 'Nested category', [], null)];
    return categories;
}

function getCategoriesMap(categories) {
    var categoriesMap = new Map();
    // var tasksMap = new Map();

    function goThroughCategories(categories) {
        if (!categories) return;
        categories.forEach(category => {
            categoriesMap.set(category.id, category);
            if (category.categories){ goThroughCategories(category.categories); }
        });
    }

    goThroughCategories(categories);

    return categoriesMap;

}

    

var categories = generateCategories();
var _categoriesMap = getCategoriesMap(categories);

function refresh() {
    _categoriesMap = categories;
}

class MainService {

    constructor() {}

    getCategories() {
        return categories;
    }

    addCategory(name) {
        categories.unshift(new Category(_.uniqueId(), name, [], null));
        refresh();
    }

    addNestedCategory(parentCategoryId, name) {
        var category = _categoriesMap.get(parentCategoryId);
        category.categories = category.categories || [];
        category.categories.unshift(new Category(_.uniqueId(), name, [], null));
        refresh();
    }

}

export default new MainService();