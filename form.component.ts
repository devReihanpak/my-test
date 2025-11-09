import { Component,Input,Output,EventEmitter} from '@angular/core';
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @Output() close= new EventEmitter <void> () 
  @Output() save= new EventEmitter <any> ()
  name:string='';
  age:number=0;
  Madrak:number=1;
    options = [
    { id: 1, name: 'دیپلم'  },
    { id: 2, name: 'لیسانس' },
    { id: 3, name: 'ارشد' }
  ];


  closeForm(){
    this.close.emit()
  }
  submitForm(){
    const selectedOption=this.options.find(o=>o.id===this.Madrak)
    const data={

      name:this.name,
      age:this.age,
      degree:selectedOption? selectedOption:''
    };
    console.log(data,'داده فرم')
    this.save.emit(data);
    this.closeForm()
  }
  

}




