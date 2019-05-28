import { Component, OnInit } from '@angular/core';
import { COLORS } from './colors.data';
import { ThemeService } from '../../theme/theme.service';
import { CrafterService } from '../../crafter/crafter.service';

@Component({
  selector: 'app-color-selector',
  templateUrl: './color-selector.component.html',
  styleUrls: ['./color-selector.component.scss'],
})

export class ColorSelectorComponent implements OnInit {

  colors = COLORS;

  constructor(private themeService: ThemeService,
              private crafter: CrafterService) { }

  ngOnInit() {}

  changeTheme(color: string): void {
    const theme = this.themeService.getTheme();
    this.themeService.removeBodyClass(theme);
    this.themeService.setTheme(color);
    this.themeService.addBodyClass(color);
    this.crafter.alert('Theme changed!');
    this.crafter.close();
  }

}
