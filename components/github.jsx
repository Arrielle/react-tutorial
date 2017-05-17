//box that displays the avatar and the name of the user
var Card = React.createClass({
  //initialize the component with an empty state object
  getInitialState: function(){
    return{};
  },
  //determine the right time to make the component fetch the data
  //lifecycle hook - right after the component is mounted in the DOM
  componentDidMount: function(){
    console.log('I was triggered during componentDidMount');
    var component = this;
    $.get("https://api.github.com/users/" + this.props.login, function(data){
      component.setState(data);
      console.log('what is the data?', data);
    });
  },
  //Render the html
  render: function(){
    return (
      <div>
        <img src={this.state.avatar_url} width="80" />
        <h3>{this.state.name}</h3>
        <hr/>
      </div>
    )
  }
});

var Main = React.createClass({
  render: function(){
    return (
      <div>
        <Card login="Arrielle"/>
      </div>
    )
  }
});

ReactDOM.render(<Main />, document.getElementById("github"));
