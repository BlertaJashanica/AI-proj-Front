import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-output',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './output.component.html',
  styleUrl: './output.component.css'
})
export class OutputComponent {
  @Input() outputText: string = '';  // Ontvangt de gegenereerde tekst van de parent
  @Output() finalized = new EventEmitter<void>();

  finalizeText() {
    this.finalized.emit();  // Meldt dat de tekst is afgerond
  }
}
