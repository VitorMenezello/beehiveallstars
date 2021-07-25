import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss', '../../components/sass/page.scss']
})
export class SobreComponent {
  photoArray(): Array<number> {
    return Array.from(new Array(14), (x, i) => i + 1);
  }

  photoSrc(i: number): string {
    return `assets/images/about/${i}.jpg`
  }
}
