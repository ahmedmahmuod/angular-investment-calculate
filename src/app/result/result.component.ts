import { Component, Input, signal } from '@angular/core';
import { InvestmentResult } from '../models/investment.model';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrl: './result.component.css',
})
export class ResultComponent {
  @Input({ required: true }) calcResult = signal<InvestmentResult[]>([]);
  @Input({ required: true }) showInitialValue = signal(false);
}
