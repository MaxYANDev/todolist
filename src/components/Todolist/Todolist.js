import React from 'react';
import AddItem from '../AddItem';
import List from '../List';

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
    this.onClickDoneButton = this.onClickDoneButton.bind(this);
  }

  onClickDoneButton(item){
    const {list} = this.state;
    const newList = list.filter((value) => value !== item);
    this.setState({
      list: newList,
    })
  }
  render(){
    const {list} = this.state;
    return(
     
      <div>
        <AddItem 
          onAdd = {this.addItemList}
        />
        <List 
          items = {this.state.list}
          onClickButton = {this.onClickDoneButton}
        />
      </div>
    );
  }
}

export default Todolist;