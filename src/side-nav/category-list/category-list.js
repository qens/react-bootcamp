import React, { Component } from 'react';

export class CategoryList extends Component {

    constructor (props) {
        super(props);
        this.state ={
            newCategory: null
        };

        this.newCategoryChange = this.newCategoryChange.bind(this);
        this.addNewCategory = this.addNewCategory.bind(this);
    }

    newCategoryChange (e) {
        this.setState({newCategory: e.target.value});
    }

    addNewCategory(e) {
        this.props.addCategory(this.state.newCategory);
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