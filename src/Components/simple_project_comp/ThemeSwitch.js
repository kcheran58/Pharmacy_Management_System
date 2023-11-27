import React, { useState } from 'react';

function ThemeSwitch() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleThemeChange = () => {
    setIsDarkMode(!isDarkMode);
  };

  const themeStyles = isDarkMode ? 
    { background: 'black', color: 'white' } : 
    { background: 'white', color: 'black' };

  return (
    <div style={themeStyles} >
      <h1>{isDarkMode ? 'Darkmode' : 'Lightmode'}</h1>
      <button onClick={handleThemeChange} style={{width:"100px",height:"30px", borderRadius:"5px",fontFamily:"sans-serif"}}>Switch theme</button>
    </div>
  );
}

export default ThemeSwitch;
