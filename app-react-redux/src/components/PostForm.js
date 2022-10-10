import React from "react";

export default class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
  }

  submitHandler = (e) => {
    e.preventDefault();

    const { title } = this.state;

    const newPost = {
      title,
      id: Date.now().toString(),
    };

    console.log(newPost);
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
