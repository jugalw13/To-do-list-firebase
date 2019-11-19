import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  imports: [MatInputModule, MatFormFieldModule, MatIconModule, MatCardModule, MatButtonModule, MatToolbarModule, MatCheckboxModule],
  exports: [MatInputModule, MatFormFieldModule, MatIconModule, MatCardModule, MatButtonModule, MatToolbarModule, MatCheckboxModule],
})

export class MatModule { }
