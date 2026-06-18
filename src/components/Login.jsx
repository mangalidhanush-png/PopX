import './Login.css'
export default function Login() {
  return (
    <div className="content">
      <h2>Signin to your<br /> PopX account</h2>
      <p>Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit.</p>

      <label className='label-email'>Enter-Email</label><input placeholder="Enter  Email Address" />
      <label className='label-password'>Password</label><input placeholder="Enter Password" type="password" />

      <button className="primary">Login</button>
    </div>
  );
}