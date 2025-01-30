import { Component } from '@angular/core';

@Component({
  selector: 'app-dynamic-form-component',
  templateUrl: './dynamic-form-component.component.html',
  styleUrls: ['./dynamic-form-component.component.css']
})
export class DynamicFormComponentComponent {
  selectedOption: string = '';
  inputValue: any = '';

  updateInputField(option: string): void {
    this.selectedOption = option;
    this.inputValue = ''; // Clear the input field value when changing option
  }
}
