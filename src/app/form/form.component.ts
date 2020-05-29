import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  f='';
  l='';
  m='';
  a='';
    fname='';
    lname='';
    mno='';
    add='';
    d:boolean=false;
    @Input() pattern: string | RegExp

  ngOnInit(): void {
  }

update(obj1,obj2,obj3,obj4)
{
  this.fname= obj1;
  this.lname=obj2;
  this.mno=obj3;
  this.add=obj4;
  this.d=!this.d;
}

}
