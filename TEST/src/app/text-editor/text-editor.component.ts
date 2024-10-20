import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TextInputComponent } from "../components/text-input/text-input.component";
import { MediumSelectComponent } from "../components/medium-select/medium-select.component";
import { OutputComponent } from "../components/output/output.component";

@Component({
  selector: 'app-text-editor',
  standalone: true,
  imports: [FormsModule, TextInputComponent, MediumSelectComponent, OutputComponent],
  templateUrl: './text-editor.component.html',
  styleUrl: './text-editor.component.css'
})
export class TextEditorComponent {
  inputText: string = '';
  outputText: string = '';
  selectedMedium: string = 'Website';
  media: string[] = ['Website', 'Poster', 'E-mail'];

  generateText(): void {
    if (this.inputText.trim()) {
      this.outputText = `Gegenereerde tekst voor ${this.selectedMedium}: ${this.inputText}`;
    } else {
      alert('Voer eerst een geldige tekst in!');
    }
  }

  handleFinalize(): void {
    this.inputText = '';
    this.outputText = '';
    this.selectedMedium = 'Website';
    alert('De tekst is succesvol gefinaliseerd!');
  }

}
