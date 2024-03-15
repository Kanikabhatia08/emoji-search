import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode : " ",
    darkTheme: () => {},
    lightTheme: () => {},
});

export const ThemeProvider = ThemeContext.Provider;

//custom hook jisme hum apna context pass kar rhe hai
export default function useTheme(){
    return useContext(ThemeContext);
}
