import {Component, OnInit} from '@angular/core';
import {ThemeService} from '../../services/theme.service';

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.scss']
})
export class TopNavigationComponent implements OnInit {
  constructor(private themeService: ThemeService) {
  }

  ngOnInit() {
  }

  public handleSwitchTheme(): void {
    this.themeService.switchTheme();
  }
}
