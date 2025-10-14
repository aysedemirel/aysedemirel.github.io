import { useTheme } from '../contexts/ThemeContext';
import { MoonFilled, SunFilled } from '@ant-design/icons';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="theme-toggle-wrapper" onClick={toggleTheme}>
      <div className={`theme-toggle-track ${theme === 'dark' ? 'dark' : 'light'}`}>
        <div className="theme-toggle-thumb">
          {theme === 'light' ? (
            <SunFilled className="theme-icon" />
          ) : (
            <MoonFilled className="theme-icon" />
          )}
        </div>
      </div>
    </div>
  );
};

export default ThemeToggle;
