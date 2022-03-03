import { themes } from './theme'
import { useTheme } from './contexts/ThemeProvider';

function App() {
  const { isDark, toggleTheme } = useTheme()

  return (
    <div className="app" style={{ backgroundColor: isDark ? themes.dark.backgroundColor : themes.light.backgroundColor, color: isDark ? themes.dark.color : themes.light.color }}>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  )
}

export default App;
