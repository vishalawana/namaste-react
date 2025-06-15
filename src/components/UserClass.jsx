import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor called: " + this.props.name);
    this.state = {
      count: 0,
      count2: 10,
    };
  }

  componentDidMount() {
    console.log("componentDidMount called for: " + this.props.name );
    // API calls or subscriptions can go here
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate called: " + this.props.name);
    // Logic to run after updates
  }

  componentWillUnmount() {
    console.log("componentWillUnmount called: " + this.props.name);
    // Cleanup timers, subscriptions, etc.
  }

  render() {
    const { name, location, contact } = this.props;
    const { count, count2 } = this.state;

    console.log("render called: " + this.props.name);

    return (
      <div className="class-comp">
        <div>This is CLASS component</div>
        <h2>Count: {count}</h2>
        <h2>Count2: {count2}</h2>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
              count2: this.state.count2 + 1,
            });
          }}
        >
          Click Me
        </button>
        <h1>Name: {name}</h1>
        <h2>Location: {location}</h2>
        <h3>Contact: {contact}</h3>
      </div>
    );
  }
}

export default UserClass;
