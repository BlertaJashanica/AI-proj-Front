import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-medium-select',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './medium-select.component.html',
  styleUrl: './medium-select.component.css'
})
export class MediumSelectComponent {

  selectedMedium: string = '';
  media: string[] = ['Website', 'Blog', 'Nieuwsbrief'];

  @Output() mediumSelected = new EventEmitter<string>();

  // Emit het geselecteerde medium
  onMediumChange() {
    this.mediumSelected.emit(this.selectedMedium);
  }

}
