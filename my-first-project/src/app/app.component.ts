import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SampleComponent } from './sample/sample.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule,SampleComponent, HomeComponent,SignupComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-first-project';
  private _name:string ='Suresh';
  show=true;

  public getName():string {
    return this._name;
  }
  public employees =['Jack', 'Max', 'Steve'];

  employee = {
    title: 'Software Engineer',
    name: 'Steve',
    src: 'https://pixabay.com/photos/woman-fashion-lady-arch-classic-9227532',
    alt: 'Profile Pic',
    salary: '12345'
  };



  public clickSave():void{
    this._name="Changed Suresh";
  }
}
