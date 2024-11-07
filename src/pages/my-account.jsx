import FooterPage from "../components/footer";
import HeaderPage from "../components/header";
import off4 from "../pictures/off4.avif"

export default function MyAccountSection() {
return (
  <>
    <HeaderPage />
    <div className="myaccount">
      <img src={off4} alt="" />
      <h1>My account</h1>
      <h3>
        <span>Home / </span>My account
      </h3>
    </div>
    <div className="accountcontainer">
      <div className="logcontainer">
        <h1>Login</h1>
        <h2>Username or email address *</h2>
        <input
          className="inputt"
          type="username"
          placeholder="Enter Username"
        />
        <h2>Password *</h2>
        <input
          className="inputt"
          type="password"
          name=""
          id=""
          placeholder="Enter Password"
        />
        <div className="checkcontainer">
          <div className="check">
            <input type="checkbox" name="" id="" />
            <h4>Remember me</h4>
          </div>
          <div className="lost">
            <a href="">Lost your password?</a>
          </div>
        </div>
        <button>LOG IN</button>
      </div>
      <div className="logcontainer">
        <h1>Register</h1>
        <h2>Username or email address *</h2>
        <input
          className="inputt"
          type="username"
          placeholder="Enter Username"
        />
        <h2>Email Address</h2>
        <input
          className="inputt"
          type="email"
          name=""
          id=""
          placeholder="Email address"
        />
        <h2>Password *</h2>
        <input
          className="inputt"
          type="password"
          name=""
          id=""
          placeholder="Enter Password"
        />
        <div className="policy">
          <h5>
            Your personal data will be used to support your experience
            throughout this <br /> website, to manage access to your account,
            and for other purposes described in <br /> our{" "}
            <a href="">privacy policy</a>.
          </h5>
        </div>
        <button>REGISTER</button>
      </div>
    </div>
    <FooterPage/>
  </>
);

}