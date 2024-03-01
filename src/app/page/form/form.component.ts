// import { HttpClient, HttpErrorResponse } from '@angular/common/http';
// import { Component } from '@angular/core';
// import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { debounceTime } from 'rxjs';
// import { EventHandlerService } from 'src/app/onChangeEvent/event-handler.service';

// @Component({
//   selector: 'app-form',
//   templateUrl: './form.component.html',
//   styleUrls: ['./form.component.css']
// })
// export class FormComponent {
//   userForm!: FormGroup ;
//   serverErrors: any = {};
//   successMessage: string = '';

//   constructor(private fb: FormBuilder, private http: HttpClient, private eventHandlerService: EventHandlerService) {}

//   ngOnInit(): void {
//     this.userForm = this.fb.group({
//       salutation: ['', Validators.required],
//       gender: ['', Validators.required],
//       nationality: ['', Validators.required],
//       COR: ['', Validators.required],
//       age_proof: ['', Validators.required],
//       panNumber: ['', Validators.required, this.disableIfProofSelected.bind(this, 'Aadhar')],
//       aadharNumber: ['', Validators.required, this.disableIfProofSelected.bind(this, 'Pan')],
//       // Add other form controls here
//     });

//     // Subscribe to value changes and perform validation
//     this.userForm.valueChanges.pipe(debounceTime(300)).subscribe(() => {
//       this.validateForm();
//     });
//   }

//   disableIfProofSelected(proofType: string, control: AbstractControl | null) {
//     const proofValue = this.userForm.get('age_proof')!.value;
//     const otherControl = proofType === 'Aadhar' ? this.userForm.get('panNumber')! : this.userForm.get('aadharNumber')!;

//     if (proofValue === proofType) {
//       control?.disable();
//     } else {
//       control?.enable();
//     }

//     // Reset other control's value when disabling
//     if (control?.disabled) {
//       otherControl.setValue('');
//     }
//   }

//   validateForm(): void {
//     const formData = { ...this.userForm.value };
//     this.successMessage = '';
//     this.serverErrors = {};

//     this.http.post('http://localhost:3000/api/validate', formData)
//       .subscribe(
//         (response: any) => {
//           if (response.message) {
//             this.successMessage = response.message;
//             this.serverErrors = {};
//           }
//         },
//         (error: HttpErrorResponse) => {
//           console.error('Error:', error);

//           // Update serverErrors with the complete error object for further inspection
//           this.serverErrors = error.error?.errors || {};

//           if (error.error && error.error.errors) {
//             console.log('Validation Errors:', error.error.errors);
//           }

//           if (error.error.errors.length > 0) {
//             this.serverErrors.validation = error.error.errors;
//           }
//         }
//       );
//   }

//   submitForm(formData: any): void {
//     if (this.userForm.valid) {
//       this.validateForm();
//     } else {
//       this.markFormGroupTouched(this.userForm);
//     }
//   }

//   private markFormGroupTouched(formGroup: FormGroup) {
//     Object.values(formGroup.controls).forEach(control => {
//       control.markAsTouched();
//       if (control instanceof FormGroup) {
//         this.markFormGroupTouched(control);
//       }
//     });
//   }

//   // Event handler for change in Age Proof dropdown
//   onAgeProofChange(): void {
//     this.eventHandlerService.onAgeProofChange(this.userForm);
//   }
// }

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { EventHandlerService } from 'src/app/onChangeEvent/event-handler.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  userForm!: FormGroup;
  serverErrors: any = {};
  successMessage: string = '';

  constructor(private fb: FormBuilder, private http: HttpClient, private eventHandlerService: EventHandlerService) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      salutation: ['', Validators.required],
      gender: ['', Validators.required],
      nationality: ['', Validators.required],
      COR: ['', Validators.required],
      age_proof: ['', Validators.required],
      panNumber: ['', Validators.required],
      aadharNumber: ['', Validators.required],
      // Add other form controls here
    });

    // Subscribe to value changes for salutation and gender
    this.userForm.get('salutation')!.valueChanges.subscribe(() => {
      this.validateForm();
    });

    this.userForm.get('gender')!.valueChanges.subscribe(() => {
      this.validateForm();
    });
  }

  disableIfProofSelected(proofType: string, control: AbstractControl | null) {
    const proofValue = this.userForm.get('age_proof')!.value;
    const otherControl = proofType === 'Aadhar' ? this.userForm.get('panNumber')! : this.userForm.get('aadharNumber')!;

    if (proofValue === proofType) {
      control?.disable();
    } else {
      control?.enable();
    }

    // Reset other control's value when disabling
    if (control?.disabled) {
      otherControl.setValue('');
    }
  }

  validateForm(): void {
    const formData = { ...this.userForm.value };
    this.successMessage = '';
    this.serverErrors = {};

    this.http.post('http://localhost:3000/api/validate', formData)
      .subscribe(
        (response: any) => {
          if (response.message) {
            this.successMessage = response.message;
            this.serverErrors = {};
          }
        },
        (error: HttpErrorResponse) => {
          console.error('Error:', error);

          // Update serverErrors with the complete error object for further inspection
          this.serverErrors = error.error?.errors || {};

          if (error.error && error.error.errors) {
            console.log('Validation Errors:', error.error.errors);
          }

          if (error.error.errors.length > 0) {
            this.serverErrors.validation = error.error.errors;
          }
        }
      );
  }

  submitForm(formData: any): void {
    if (this.userForm.valid) {
      this.validateForm();
    } else {
      this.markFormGroupTouched(this.userForm);
    }
  }

  private markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }

  // Event handler for change in Age Proof dropdown
  onAgeProofChange(): void {
    this.eventHandlerService.onAgeProofChange(this.userForm);
  }
}
