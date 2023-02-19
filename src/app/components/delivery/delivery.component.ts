import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DeliveryService } from './services/delivery.service';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeliveryComponent implements OnInit {
  public form!: FormGroup;
  public isPopupSeen!: boolean;

  constructor(
    private fb: FormBuilder,
    private deliveryService: DeliveryService
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.subscribeNameChange();
  }

  private initForm(): void {
    this.form = this.fb.group({
      name: this.fb.control(null, [
        Validators.required,
        Validators.minLength(2),
      ]),
      address: this.fb.control(null, [
        Validators.required,
        Validators.minLength(5),
      ]),
      phone: this.fb.control(null, [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
        Validators.minLength(11),
      ]),
    });
  }

  private subscribeNameChange(): void {
    this.form.get('name')?.valueChanges.subscribe((val) => {
      if (val?.includes('.')) {
        const editedVal = val.replace(/\./g, '');
        this.form.get('name')?.setValue(editedVal);
      }
    });
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.form.controls[controlName];

    return control.invalid && control.dirty;
  }

  isReadySubmit(): boolean {
    return this.form.invalid;
  }

  onSubmit() {
    if (!this.form.invalid) {
      this.deliveryService.postForm(this.form.value);
      this.setFormValuesToDefault();
      this.openPopup();
    }
  }

  private setFormValuesToDefault(): void {
    const controls = this.form.controls;

    Object.keys(controls).forEach((controlName) => {
      controls[controlName].setValue(null);
      controls[controlName].markAsPristine();
    });
  }

  closePopup(): void {
    this.isPopupSeen = false;
  }

  openPopup(): void {
    this.isPopupSeen = true;
  }
}
