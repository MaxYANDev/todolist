import React from 'react';

class List extends React.Component{
  constructor(props){
    super(props);

  }

  render(){
    const {items, onClickButton} = this.props
    return(
      <ul>
          {items.map((value, index) => (
            <div key = {index}>
              <li>{value}</li>
              <button
                onClick = {() => onClickButton(value)}
              >Done</button>
            </div>
          ))}
      </ul>
    );
  }
}

export default List;
