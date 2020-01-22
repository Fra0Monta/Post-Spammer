import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-bella',
  templateUrl: './bella.component.html',
  styleUrls: ['./bella.component.css']
})
export class BellaComponent implements OnInit {
 @Input() name:string;
  constructor() { }

  ngOnInit() {
  }

}
