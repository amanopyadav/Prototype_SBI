import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class EventHandlerService {
  constructor() {}

  onAgeProofChange(userForm: FormGroup): void {
    const proofValue = userForm.get('age_proof')?.value;
    const panNumberControl = userForm.get('panNumber');
    const aadharNumberControl = userForm.get('aadharNumber');

    if (proofValue === 'Pan') {
      panNumberControl?.enable();
      aadharNumberControl?.disable();
    } else if (proofValue === 'Aadhar') {
      aadharNumberControl?.enable();
      panNumberControl?.disable();
    } else {
      panNumberControl?.enable();
      aadharNumberControl?.enable();
    }
  }
}
