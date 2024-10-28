import { Injectable } from '@angular/core';
import { InvestmentResult } from '../models/investment.model';

@Injectable({
  providedIn: 'root',
})
export class InvestmentService {
  calculateInvestment(
    initialInvestment: number,
    annualInvestment: number,
    expectedReturn: number,
    duration: number
  ): InvestmentResult[] {
    const r = expectedReturn / 100;
    let totalInterest = 0;
    let investedCapital = initialInvestment;
    let investmentValue = initialInvestment;

    const results: InvestmentResult[] = [];

    for (let year = 1; year <= duration; year++) {
      const interest = investmentValue * r;
      totalInterest += interest;

      investmentValue += interest + annualInvestment;
      investedCapital += annualInvestment;

      results.push({
        year,
        investmentValue: investmentValue.toFixed(2),
        interest: interest.toFixed(2),
        totalInterest: totalInterest.toFixed(2),
        investedCapital: investedCapital.toFixed(2),
      });
    }
    return results;
  }
}
