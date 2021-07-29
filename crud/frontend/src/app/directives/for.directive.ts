import { Template } from '@angular/compiler/src/render3/r3_ast';
import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[myFor]'
})
export class ForDirective implements OnInit{
  @Input('myForEm') numbers!: number[]
  //@Input('myForUsando') texto!: string

  constructor(
    private container: ViewContainerRef, 
    private template: TemplateRef<any>
    ) { 
    /*console.log('MyFor')*/

  }

  ngOnInit(): void{
    for (let number of this.numbers) {
      this.container.createEmbeddedView(
        this.template, { Simplicit: number });

    }
    console.log(this.numbers)
    //console.log(this.texto)
     
  }

}
