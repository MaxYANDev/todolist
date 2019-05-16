import React from 'react';
import AddItem from '../AddItem';

class Todolist extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      list: [],
    }
    this.addItemList = this.addItemList.bind(this);
  }

  addItemList(item){
    const {list} = this.state;
    const newList = [...list, item];
    this.setState({
      list: newList
    });
   
  }
  render(){
    const {list} = this.state;
    return(
     
      <div>
        <AddItem 
          onAdd = {this.addItemList}
        />
        <ul>
          {list.map((value, index) => (
            <li key = {index}>{value}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Todolist;