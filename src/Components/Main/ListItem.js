import React, { Component } from 'react'
import { ImRadioUnchecked ,ImRadioChecked} from 'react-icons/im';

export default class ListItem extends Component {

  state={
    content:this.props.content,
    check: false
  }

  renderCheckbox = cond => cond ? <ImRadioChecked/> : <ImRadioUnchecked/>

  render() {
    return (
      <div className="algo-li" onClick={()=>this.setState({check: !this.state.check})}>
        {this.renderCheckbox(this.state.check)}
        <li>{this.state.content}</li>
      </div>
    )
  }
}
