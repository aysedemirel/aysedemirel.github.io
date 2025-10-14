import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { ConfigProvider, theme as antdTheme } from 'antd';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('theme') as Theme;
    return saved || 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => {
      const newTheme = prev === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  };

  const antdThemeConfig = {
    algorithm: theme === 'dark' ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm,
    token: {
      colorPrimary: '#fb923c',
      colorLink: '#fb923c',
      borderRadius: 8,
      fontSize: 16,
      colorBgContainer: theme === 'dark' ? '#2a2a2a' : '#ffffff',
      colorBgBase: theme === 'dark' ? '#1c1c1c' : '#ffffff',
      colorTextBase: theme === 'dark' ? '#f9fafb' : '#1f2937',
      colorBorder: theme === 'dark' ? '#374151' : '#e5e7eb'
    },
    components: {
      Menu: {
        itemSelectedBg: theme === 'dark' ? '#374151' : '#faf7f4',
        itemSelectedColor: '#fb923c'
      },
      Button: {
        colorPrimary: '#fb923c'
      }
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ConfigProvider theme={antdThemeConfig}>{children}</ConfigProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
};
