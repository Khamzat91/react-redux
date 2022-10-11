import React from "react";
import { connect } from "react-redux";
import {createPost} from "../redux/action";

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
  }

  submitHandler = (e) => {
    e.preventDefault();

    const { title } = this.state;

    if(!title.trim()){
      return
    }

    const newPost = {
      title,
      id: Date.now().toString(),
    };

    this.props.createPost(newPost)
    this.setState({ title: "" });
  };

  changeInputHandlet = (e) => {
    this.setState((prev) => ({
      ...prev,
      ...{
        [e.target.name]: e.target.value,
      },
    }));
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Зоголовок поста
          </label>
          <input
            onChange={this.changeInputHandlet}
            name="title"
            value={this.state.title}
            type="text"
            className="form-control"
            id="title"
          />
        </div>
        <button className="btn btn-success" type="submit">
          Создать
        </button>
      </form>
    );
  }
}

const mapDispathToProps = {
  createPost
}

export default connect(null, mapDispathToProps)(PostForm);