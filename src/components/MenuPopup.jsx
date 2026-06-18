import React from "react";

export default function MenuPopup({ onSelect }) {
  return (
    <div className="popup-container">
    <div className="menu-popup">
      <div onClick={() => onSelect("info")}>Info</div>
      <div onClick={() => onSelect("report")}>Report Abuse</div>
      <div onClick={() => onSelect("legal")}>Legal Notices</div>
      <div onClick={() => onSelect("signin")}>Sign In</div>
    </div>
    </div>
  );
}