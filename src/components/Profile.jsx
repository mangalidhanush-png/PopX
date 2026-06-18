
export default function Profile() {
  return (
    <div className="content profilecontent">
      <h3>Account Settings</h3>
       
      <div className="profile-box">
      
        <img
          src="https://tse3.mm.bing.net/th/id/OIP.YDyoIafIwW1tILED3HgZRQHaHa?pid=Api&P=0&h=180"
          alt="profile"
          className="avatar"
        /><span>📸</span>
        <div>
          <h4>Marry Doe</h4>
          <p>Marry@gmail.com</p>
        </div>
      </div>
      <p className="desc para">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
        nonumy eirmod tempor.
      </p>
    </div>
  );
}