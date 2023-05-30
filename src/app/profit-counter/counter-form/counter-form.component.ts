import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-counter-form',
  templateUrl: './counter-form.component.html',
  styleUrls: ['./counter-form.component.scss']
})
export class CounterFormComponent {
  profitForm: FormGroup;
  minValue = 1000;
  maxValue = 1000000;
  options: string[] = ['Option 1', 'Option 2', 'Option 3'];

  constructor(private fb: FormBuilder) {
    this.profitForm = this.fb.group({
      amount: [null, Validators.required],
      period: [null, Validators.required],
      currency: [this.minValue, [Validators.required, Validators.min(this.minValue), Validators.max(this.maxValue)]],
    });
  }

  decreaseValue() {
    const currentValue = this.profitForm.get('value')?.value;
    if (currentValue > this.minValue) {
      this.profitForm.patchValue({ value: currentValue - 1000 });
    }
  }

  increaseValue() {
    const currentValue = this.profitForm.get('value')?.value;
    if (currentValue < this.maxValue) {
      this.profitForm.patchValue({ value: currentValue + 1000 });
    }
  }

  isMinValue() {
    const currentValue = this.profitForm.get('value')?.value;
    return currentValue === this.minValue;
  }

  isMaxValue() {
    const currentValue = this.profitForm.get('value')?.value;
    return currentValue === this.maxValue;
  }

  compareOptions(option1: string, option2: string) {
    return option1 === option2;
  }
}
