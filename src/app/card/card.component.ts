import { Component, OnInit, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() titulo = '';
  @Input() preco = '';
  @Input() conteudo: string[] = [];
  @Input() cor = '#ffffff';
  @Input() corTexto = '#000000';

  constructor(private snackBar: MatSnackBar) { }
    
  ngOnInit(): void {
  }

  onClickLearnMore(): void {
    this.snackBar.open("Pacote comprado! Mas, tenha cuidado ao gastar seu dinheiro com bobagens na internet", "OK");
  }

}

