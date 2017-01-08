import React, { Component } from 'react';

export class CategoryList extends Component {

    constructor (props) {
        super(props);
        console.log('CategoryList')
    }

    newCategoryChange (e) {
        console.log(e.target.value);
    }

    addNewCategory(e) {
        console.log('add category');
    }

    

    render () {
        let drawCategoryList = (categories) => {
            return (
                <ul>
                    {categories.map(item => (
                        <li key={item.id} onClick={e => this.props.chooseCategory(e, item)}>{item.name}
                            {item.categories && drawCategoryList(item.categories)}
                        </li>
                    ))}
                </ul>
            );
        }

        return (
            <div>            
                <div>
                    <input onChange={this.newCategoryChange} type="text" placeholder="Enter category title"/>
                    <button  onClick={this.addNewCategory}>Add</button>
                </div>

                {drawCategoryList(this.props.categories)}
                
            </div>
        );
    }
}