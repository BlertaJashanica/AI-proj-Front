import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MediumSelectComponent} from './components/medium-select/medium-select.component'
import {OutputComponent} from './components/output/output.component'
import {TextInputComponent} from './components/text-input/text-input.component'
import {TextEditorComponent} from './text-editor/text-editor.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MediumSelectComponent,OutputComponent,TextInputComponent,TextEditorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  outputText: string = '';

  onTextGenerated(text: string) {
    this.outputText = text;
  }

  onTextFinalized() {
    this.outputText = '';
  }
}
