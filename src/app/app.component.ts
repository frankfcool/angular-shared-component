import { ChildComponent } from './child/child.component';
import { Component, ViewChild, ViewContainerRef, ComponentFactory, ComponentFactoryResolver, ComponentRef } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  @ViewChild("child1", { read: ViewContainerRef }) child1: ViewContainerRef;
  component1Ref: ComponentRef<ChildComponent>;
  @ViewChild("child2", { read: ViewContainerRef }) child2: ViewContainerRef;
  omponent2Ref: ComponentRef<ChildComponent>;

  constructor(private resolver: ComponentFactoryResolver){
    
  }

  createComponent(type) {
    this.child1.clear(); 
    const factory1: ComponentFactory<ChildComponent> = this.resolver.resolveComponentFactory(ChildComponent);
    this.component1Ref = this.child1.createComponent(factory1);
    this.component1Ref.instance.type='Child1'+Math.floor(Math.random()*10);
    

    this.child2.clear(); 
    const factory2: ComponentFactory<ChildComponent> = this.resolver.resolveComponentFactory(ChildComponent);
    this.omponent2Ref = this.child2.createComponent(factory2);
    this.omponent2Ref.instance.type='Child2'+Math.floor(Math.random()*10);


    this.component1Ref.instance.output.subscribe((msg: string) => {
      this.omponent2Ref.instance.type = msg;
      console.log(msg)
    });

    this.omponent2Ref.instance.output.subscribe((msg: string) => {
      this.component1Ref.instance.type = msg;
      console.log(msg)
    });
 }
}
