import { Injectable, Inject, EventEmitter } from '@angular/core';
import { THEMES, ACTIVE_THEME, Theme } from '../shared/theme/symbols';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ThemeService {
  private currentTheme = new BehaviorSubject("");
  current_theme = this.currentTheme.asObservable();

  themeChange = new EventEmitter<Theme>();

  constructor(
    @Inject(THEMES) public themes: Theme[],
    @Inject(ACTIVE_THEME) public theme: string
  ) {
  }

  getTheme(name: string) {
    const theme = this.themes.find(t => t.name === name);
    if (!theme) {
      throw new Error(`Theme not found: '${name}'`);
    }
    return theme;
  }

  getActiveTheme() {
    return this.getTheme(this.theme);
  }

  getProperty(propName: string) {
    return this.getActiveTheme().properties[propName];
  }

  setTheme(name: string) {
    this.theme = name;
    this.currentTheme.next(this.theme);
    this.themeChange.emit(this.getActiveTheme());
  }

  registerTheme(theme: Theme) {
    this.themes.push(theme);
  }

  switchTheme() {
    const atciveThemeName = this.getActiveTheme();
    const isLightThemeActive = atciveThemeName.name.toLowerCase() === 'light';
    const themeName = isLightThemeActive ? 'blue' : 'light';
    
    this.setTheme(themeName);
  }
}
