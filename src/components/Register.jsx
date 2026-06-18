export default function Register() {
  return (
    <div className="content">
      <h3>Create your<br /> PopX account</h3>
      <label className="label-name">Fll Name</label><input placeholder="Full Name*" />
      <label className="label-phone">Phone number</label><input placeholder="Phone number*" />
      <label className="label-email">Enter Email</label><input placeholder="Email address*" />
      <label className="label-password">Password</label><input placeholder="Password*" type="password" />
      <label className="label-company">Company name</label><input placeholder="Company name" />
      <div className="radio">
        <label>Are you an Agency?</label>
        <div className="radios">
          <input type="radio" name="agency" /> Yes
          <input type="radio" name="agency" /> No
        </div>
      </div>
      <button className="primary">Create Account</button>
    </div>
  );
}