import React from "react";
import { connect } from "react-redux";
import {createPost, showAlert} from "../redux/action";
import Alert from "./Alert";

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
      return this.props.showAlert('Без ввода в поле невозможно создать')
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
        {this.props.alert && <Alert text={this.props.alert}/>}
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            <h3>Зоголовок поста</h3>
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
  createPost, showAlert
}

const mapStateToProps = state => ({
   alert: state.app.alert
})

export default connect(mapStateToProps, mapDispathToProps)(PostForm);