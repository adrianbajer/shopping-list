import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedSection: string = 'recipes';

  onLinkClicked(sectionName: string) {
    this.selectedSection = sectionName;
  }

}
