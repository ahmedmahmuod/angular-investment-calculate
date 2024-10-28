import { Component, signal, computed } from '@angular/core';
import { InvestmentService } from '../services/investment.service';
import { InvestmentResult } from '../models/investment.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  showInitialValue = signal(false);

  // Signals to hold the input values
  initialInvestment = signal(0);
  annualInvestment = signal(0);
  expectedReturn = signal(0);
  duration = signal(10);

  // Signal to hold the calculated results
  results = signal<InvestmentResult[]>([]);

  constructor(private investmentService: InvestmentService) {}

  calculate() {
    // Get the current values from signals
    const initial = this.initialInvestment();
    const annual = this.annualInvestment();
    const expected = this.expectedReturn();
    const years = this.duration();

    // Calculate the results using the service
    const calcResults = this.investmentService.calculateInvestment(
      initial,
      annual,
      expected,
      years
    );

    this.results.set(calcResults);
    this.showInitialValue.set(true);

    // Clear the input fields by resetting the signals
    this.initialInvestment.set(0);
    this.annualInvestment.set(0);
    this.expectedReturn.set(0);
  }
}
