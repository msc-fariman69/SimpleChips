import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputChipsComponent } from './input-chips.component';



@NgModule({
  declarations: [InputChipsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [InputChipsComponent]
})
export class InputChipsModule { }
