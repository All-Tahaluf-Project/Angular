import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-portalcard',
  templateUrl: './portalcard.component.html',
  styleUrls: ['./portalcard.component.css']
})
export class PortalcardComponent implements OnInit {

  @Input() type : string|undefined;
  @Input() subText : string|undefined;
  @Input() description : string|undefined;
  @Output() GoProfile=new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

ShowProfile(){
  this.GoProfile.emit();
}

}
