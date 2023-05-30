import { Component, Input } from '@angular/core';
import { Currency } from '../../../assets/interface';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent {
    @Input() result = 0;
    @Input() currency: Currency = {id: 0, name: '', shortName: '', sign: '$'};
    @Input() incomePercent = 0;
  
}
