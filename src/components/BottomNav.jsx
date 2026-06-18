import { useState } from "react";
import MenuPopup from "./MenuPopup";
import BottomSheet from "./BottomSheet";

export default function BottomNav({ setPage }) {
  const [showMenu, setShowMenu] = useState(false);
  const [sheet, setSheet] = useState(null);

  const handleSelect = (type) => {
    setShowMenu(false);
    setSheet(type);
  };

  return (
    <>
      <div className="bottom-nav">
        <button onClick={() => setPage("home")}>🏠</button>
        <button onClick={() => setPage("login")}>💬</button>
        <button onClick={() => setShowMenu(!showMenu)}>⋯</button>
        
      </div>
      {showMenu && <MenuPopup onSelect={handleSelect} />}
      <BottomSheet type={sheet} close={() => setSheet(null)} />
    </>
  );
}