import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Button } from './button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './dropdown-menu'

const THEME = {
  light : 'light',
  dark : 'dark',
  system : 'system'
}

export type Theme = keyof typeof THEME

export const ThemeToggle = () => {
  const [theme, setTheme] = useState<Theme>('light')

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark')
    setTheme(isDarkMode ? 'dark' : 'light')  
  }, [])

  useEffect(() => {
    const isDark = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)
    document.documentElement.classList[isDark ? 'add' : 'remove']('dark')
  }, [theme])

  const onChangeTheme = (theme: Theme) => {
    setTheme(theme)
    localStorage.setItem('theme', theme)
  }

  return (
    <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="outline" size="icon">
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuItem onClick={() => onChangeTheme('light')}>
        Light
      </DropdownMenuItem>
      <DropdownMenuItem onClick={() => onChangeTheme('dark')}>
        Dark
      </DropdownMenuItem>
      <DropdownMenuItem onClick={() => onChangeTheme('system')}>
        System
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
  )
}
