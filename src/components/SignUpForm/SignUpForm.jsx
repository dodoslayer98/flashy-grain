import { Component } from 'react';
import { signUp } from '../../utilities/users-service';
import Form from 'react-bootstrap/Form';


export default class SignUpForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: ''
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const formData = { ...this.state };
      delete formData.confirm;
      delete formData.error;
      const user = await signUp(formData);
      this.props.setUser(user);
    } catch {
      this.setState({
        error: 'Sign Up Failed - Try Again'
      });
    }
  }

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: ''
    });
  }

  render() {
    const disable = this.state.password !== this.state.confirm;
    return (

      <div >
        <h1>Sign Up</h1>
        <div className="container col-4" >
          <form autoComplete="off" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input className="form-control" type="text" name="name" value={this.state.name} onChange={this.handleChange} required /> 
            </div>
            <div className="form-group">
              <label>Email</label>
              <input className="form-control" type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input className="form-control" type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
            </div>
            <div className="form-group">
              <label>Confirm</label>
              <input className="form-control"type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required /> 
            </div>
            <button className="m-4" type="submit" disabled={disable}>SIGN UP</button>
          </form>
        </div>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </div>
    );
  }
}