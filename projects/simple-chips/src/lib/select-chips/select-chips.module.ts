import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectChipsComponent } from './select-chips.component';



@NgModule({
  declarations: [SelectChipsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [SelectChipsComponent]
})
export class SelectChipsModule { }
