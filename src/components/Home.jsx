import './Home.css'
export default function Home({ setPage }) {
  return (
    <div className="content center">
      <div className='homecontent'>
      <h2 className='heading'>Welcome to PopX</h2>
      <p className='heading'>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit.</p>
      </div>
       
      <button className="primary" onClick={() => setPage("register")}>
        Create Account
      </button>

      <button className="secondary" onClick={() => setPage("login")}>
        Already Registered? Login
      </button>
    </div>
  );
}