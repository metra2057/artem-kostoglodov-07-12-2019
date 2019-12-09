import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/shared/theme';

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.scss']
})
export class TopNavigationComponent implements OnInit {
  constructor(private themeService: ThemeService) { }

  ngOnInit() {
  }
  
  handleSwitchTheme() {
    this.themeService.switchTheme();
  }
}
