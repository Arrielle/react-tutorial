var Button = React.createClass({
  localHandleClick: function(){
    this.props.localHandleClick(this.props.increment);
  },
  //rendering the button
  render: function(){
    return (
      //when button is clicked -onClick- it runs the function handleClick
      <button onClick={this.localHandleClick}>+{this.props.increment}</button>
    )
  }
});

var Result = React.createClass({
  render: function(){
    return (
      <div>{this.props.localCounter}</div>
    )
  }
});

var Main = React.createClass({
  //Set the inital state of the button
  getInitialState: function(){
    return {counter:0};
  },
  handleClick: function(increment){
    //Read the current counter state, increment the counter, change the state
    this.setState({counter: this.state.counter + increment});
  },
  //this shows both the button component and the result component
  render: function(){
    return(
      <div>
      <Button localHandleClick={this.handleClick} increment={1}/>
      <Button localHandleClick={this.handleClick} increment={5}/>
      <Button localHandleClick={this.handleClick} increment={10}/>
      <Button localHandleClick={this.handleClick} increment={100}/>
        <Result localCounter={this.state.counter}/>
      </div>
    )
  }
})

//rendering the button
React.render(<Main />, document.getElementById("root"));
