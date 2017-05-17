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

//form for a user to enter in a github username
var Form = React.createClass({
  //what happens when the form is submitted
  handleSubmit: function(e){
    //e is the event object
    //don't submit and refesh the page (the default)
    e.preventDefault();
    //this.refs.login finds the 'login ref' from below
    //React.findDOMNode finds the input of that ref
    var loginInput = React.findDOMNode(this.refs.login);
    //add the card here
    this.props.addCard(loginInput.value);
    loginInput.value = '';
  },
  render: function(){
    return (
      <form onSubmit={this.handleSubmit}>
        <input placeholder="Enter GitHub Username" ref="login" />
        <button>Add</button>
      </form>
    );
  }
})

var Main = React.createClass({
  getInitialState: function(){
    //an empty array to store usernames in, this array is looped through and added to the dom
    return { logins: []};
  },
  addCard: function(loginToAdd){
    //grab current states login array, push an item, set the state to the new array
    this.setState({ logins: this.state.logins.concat(loginToAdd)});
  },
  render: function(){
    //this adds all of the cards that exist within the 'logins' array to the DOM
    var cards = this.state.logins.map(function(login){
      return(<Card login={login} />);
    });
    return (
      <div>
        <Form addCard={this.addCard}/>
        {cards}
      </div>
    )
  }
});

ReactDOM.render(<Main />, document.getElementById("github"));
