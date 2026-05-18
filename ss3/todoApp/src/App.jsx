import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      todo: "",
      todoList: []
    };
  }

  handleChange = (event) => {
    this.setState({
      todo: event.target.value
    });
  };

  handleAdd = () => {

    if (this.state.todo.trim() === "") {
      alert("Vui lòng nhập công việc");
      return;
    }

    this.setState((prevState) => ({
      todoList: [...prevState.todoList, prevState.todo],
      todo: ""
    }));
  };

  render() {
    return (
        <div className="container mt-5">

          <h1 className="text-center mb-4">
            Todo List
          </h1>

          <div className="d-flex gap-2 mb-4">

            <input
                type="text"
                className="form-control"
                placeholder="Nhập công việc..."
                value={this.state.todo}
                onChange={this.handleChange}
            />

            <button
                className="btn btn-primary"
                onClick={this.handleAdd}
            >
              Add
            </button>

          </div>

          <ul className="list-group">

            {this.state.todoList.map((item, index) => (
                <li
                    key={index}
                    className="list-group-item"
                >
                  {item}
                </li>
            ))}

          </ul>

        </div>
    );
  }
}

export default App;