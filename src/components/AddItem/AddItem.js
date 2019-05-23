import React from 'react';

class AddItem extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      value: '',
    }
  }

  onInputChange(value){
    this.setState({
      value
    })
  }
  render(){
    const {value} = this.state;
    const {onAdd} = this.props;
    return(
      <form onSubmit = {
        (event) => {
          event.preventDefault();
          if(value === '') return;
          onAdd(value);
          this.setState({
            value:'',
          });
        }
      }
      >
        <input 
          value = {value}
          type="text"
          onChange = {({target:{value}}) => this.onInputChange(value)}
        />
        &nbsp;
        <button>AddItem(heloo)</button>
      </form>
    );
  }
}

export default AddItem;