import React, { Component, useState, useEffect } from "react";
import SearchBox from "../components/SearchBox";
import CardList from "../components/CardList";
import Scroll from "../components/Scroll";

const App = () => {
  const [robots, setRobots] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [count, setCount] = useState(0);

  const onSearchChange = (e) => {
    setSearchField(e.target.value);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((user) => setRobots(user));
    console.log("working?");
  }, []);

  useEffect(() => {
    console.log(count);
  }, [count]);

  const filterRobot = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  });

  return !robots.length ? (
    <h1>loading</h1>
  ) : (
    <div className="tc">
      <h1 className="f2">Robot Friends</h1>
      <button onClick={() => setCount(count + 1)}>click me</button>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <CardList robots={filterRobot} />
      </Scroll>
    </div>
  );
};

/* 
class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: "",
    };
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((user) => this.setState({ robots: user }));
  }

  render() {
    const { robots, searchField } = this.state;
    const filterRobot = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return !robots.length ? (
      <h1>loading</h1>
    ) : (
      <div className="tc">
        <h1 className="f2">Robot Friends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <CardList robots={filterRobot} />
        </Scroll>
      </div>
    );
  }
} */

export default App;
