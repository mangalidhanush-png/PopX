import { useEffect, useState } from "react";

export default function BottomSheet({ type, close }) {
  const [date,setdate]=useState("")
  useEffect(()=>{
    const date=new Date()
    setdate(date.getFullYear())
  })
  if (!type) return null;

  return (
    <div className="sheet-overlay" onClick={close}>
      <div className="sheet" onClick={(e) => e.stopPropagation()}>
        
        {type === "info" && (
          <div className="popup-container">
            <div className="menu-popup">
              <h4>Dhanush</h4>
              <p>protitype {date}</p>
            </div>
          </div>
        )}

        {type === "report" && (
          <div className="report-page">
            <h3>Report Abuse</h3>
            <hr />
            <p>If you feel the creative Cloud Content Violates The Adobe Terms of Use,You may report this content Filling out this form.</p>
            <input placeholder="Your Email *" />
            <input placeholder="Your Name *" />

            <div className="report-list">
              <h3>why are you reporting this content *</h3>
                  <form>

        <input type="radio"  name="list" value="Defamation" />
        <label for="Defamation">Defamation</label><br />
        <input type="radio" name="list" value="Trademark" />
        <label for="Trademark">Trademark</label><br />
        <input type="radio"name="list" value="Offensive Content" />
        <label for="Offensive Content">Offensive content</label>
        <input type="radio" name="list" value="hate" />
        <label for="hate">hate</label><br />
        <input type="radio" name="list" value="Sexually Explicit content" />
        <label for="sexual content">Sexual content</label>

    </form>
        <p>Please Provide a Description of Concern</p>
            </div>

            <textarea placeholder="Describe Concern"></textarea>
            <p className="required-line">*required</p>
        <div className="report-buttons">
        <button className="cancelbtn">cancel</button>
        <button className="reportbtn">reportabuse</button>
        </div>
          </div>
        )}

        {type === "legal" && (
          <>
            <h3>Legal Notices</h3>
                        <h3>Terms of Use</h3>
            <p>© 2016-2025 Adobe. All rights reserved.</p>
            <p>
              Adobe, the Adobe logo and Adobe XD are trademarks of Adobe.
            </p>
            <p>All legal terms and policies go here.</p>
          </>
        )}

        {type === "signin" && (
          <>
            <h3>Sign In</h3>
            <input placeholder="Email" />
            <input placeholder="Password" type="password" />
            <button className="loginbtn">login</button>
          </>
        )}
      </div>
    </div>
  );
}