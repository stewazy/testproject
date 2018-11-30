import { Recipie } from './../../recipie.model';
import { Component, OnInit, Input} from '@angular/core';
import { RecipieService } from '../../recipie.service';

@Component({
  selector: 'app-recipie-item',
  templateUrl: './recipie-item.component.html',
  styleUrls: ['./recipie-item.component.css'],
})
export class RecipieItemComponent implements OnInit {
  @Input() recipie: Recipie;
  //@Output() recipieSelected = new EventEmitter<void>();

  constructor(private recipieService: RecipieService) { }

  ngOnInit() {
  }

  onSelected() {
    this.recipieService.recipieSelected.emit(this.recipie);
  }
}
