
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  conteudoCardBasic = ['500 GB Storage', '2 Users Allowed', 'Send up to 3 GB'];
  conteudoCardProfessional = ['1 TB Storage', '5 Users Allowed', 'Send up to 10 GB'];
  conteudoCardMaster = ['2 TB Storage', '10 Users Allowed', 'Send up to 20 GB'];
}

