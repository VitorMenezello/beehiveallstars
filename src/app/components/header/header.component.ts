import {Component, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';
import {colorOpacity, COLORS} from '../../helpers/colors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class HeaderComponent {
  constructor(private router: Router) {
  }

  get rippleColor(): string {
    return colorOpacity(COLORS.GREY, 0.5);
  }

  isRouteActive(route: string): boolean {
    console.log(route, this.router.isActive(route, false));
    return this.router.isActive(route, false);
  }
}
