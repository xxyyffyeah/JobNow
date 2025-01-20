import { Link } from "react-router-dom";
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { Logo, FormRow } from '../components';
const Register = () => {
    
  return (
    <Wrapper>
      <form className="form">
        <Logo />
        <h4>Register</h4>
        <FormRow type = "text" name='name' defaultValue='Charlie'/>
        <button type="submit" className="btn btn-block">submit</button>
        <p>
          Already a member? <Link to="/login" className="member-btn">Login</Link>
        </p>
      </form>
    </Wrapper>
  );
}
export default Register