import { LightningElement, track } from 'lwc';

export default class SipCalculator extends LightningElement {
  @track sipMode = true;

  @track monthly = 0;
  @track lumpsum = 0;
  @track rate = 0;
  @track years = 0;

  @track futureValue = 0;
  @track totalInvested = 0;
  @track showResults = false;

  handleChange(event) {
    const key = event.target.dataset.id;
    this[key] = parseFloat(event.target.value) || 0;
  }

  setSIPMode() {
    this.sipMode = true;
    this.resetResults();
  }

  setLumpsumMode() {
    this.sipMode = false;
    this.resetResults();
  }

  resetResults() {
    this.showResults = false;
    this.futureValue = 0;
    this.totalInvested = 0;
  }

  calculate() {
    const r = this.rate / 100;
    const n = this.years;

    if (this.sipMode) {
      const monthlyRate = r / 12;
      const months = n * 12;
      this.futureValue = this.monthly * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
      this.totalInvested = this.monthly * months;
    } else {
      this.futureValue = this.lumpsum * Math.pow(1 + r, n);
      this.totalInvested = this.lumpsum;
    }

    this.showResults = true;
  }

  get returns() {
    return this.futureValue - this.totalInvested;
  }

  formatCurrency(value) {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(value);
  }

  get formattedInvested() {
    return this.formatCurrency(this.totalInvested);
  }

  get formattedFutureValue() {
    return this.formatCurrency(this.futureValue);
  }

  get formattedReturns() {
    return this.formatCurrency(this.returns);
  }

  // 🚀 Variant getters for button styling
  get sipButtonVariant() {
    return this.sipMode ? 'brand' : 'neutral';
  }

  get lumpsumButtonVariant() {
    return this.sipMode ? 'neutral' : 'brand';
  }
}
