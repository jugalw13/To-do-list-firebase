import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  imports: [MatInputModule, MatFormFieldModule, MatIconModule, MatCardModule, MatButtonModule, MatToolbarModule],
  exports: [MatInputModule, MatFormFieldModule, MatIconModule, MatCardModule, MatButtonModule, MatToolbarModule],
})

export class MatModule { }
