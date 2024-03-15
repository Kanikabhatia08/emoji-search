import './App.css';
import { useEffect, useState } from 'react';
import { ThemeProvider } from './context/Theme';
import Header from './components/Header';
import Emoji from './components/Emoji';

function App() {

  const getTheme = () => {
    let theme = JSON.parse(localStorage.getItem("theme"));
    if (!theme) {
        // Default theme is dark-theme
        localStorage.setItem("theme", JSON.stringify('dark'));
        return "dark";
    } else {
        return theme;
    }
  };

const [themeMode, setThemeMode]= useState(getTheme())
// const [themeMode, setThemeMode]= useState('light')


  const darkTheme = () =>{
    setThemeMode('dark')
    localStorage.setItem("theme", JSON.stringify("dark"));
  }

  const lightTheme = () =>{
    setThemeMode('light')
    localStorage.setItem("theme", JSON.stringify("light"));

  }

  useEffect(()=>{
    document.querySelector('html').classList.remove('dark',"light")
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])

  return (
    <div className='h-screen py-10 mx-auto justify-center dark:bg-[#121212]'>
      <ThemeProvider value={{themeMode, darkTheme, lightTheme}}>
        <Header/>
        <Emoji />
      </ThemeProvider>
      
    </div>
  );
}

export default App;
