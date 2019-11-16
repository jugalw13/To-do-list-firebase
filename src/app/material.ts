import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [MatInputModule, MatFormFieldModule, MatIconModule, MatCardModule, MatButtonModule],
  exports: [MatInputModule, MatFormFieldModule, MatIconModule, MatCardModule, MatButtonModule]
})

export class MatModule { }
