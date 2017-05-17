var Button = React.createClass({

  getInitialState: function(){
    return {counter:0};
  },

  render: function(){
    return (
      <button>{this.state.counter}</button>
    )
  }
  
});

React.render(<Button />, document.getElementById("root"));
