import { Component } from "@angular/core";
@Component({
    selector:'app-main',
    templateUrl:'./main.component.html',
    styleUrls:['./main.component.css'],
})
export class MainComponent{
    formData:any[]=[]
    showForm = false;
    searchText: string = '';
    openForm(){
        this.showForm=true
    }
    closeForm(){
        this.showForm=false
    }
 saveFormData(data:any){
    this.formData.push(data);
    console.log(this.formData)
 }

    Match(searchText: string): number {
    if (!searchText) return 0;

    const totalItems = this.formData.length;
    const matchedItems = this.formData.filter(item => item.name.toLowerCase().includes(searchText.toLowerCase())).length;

    return (matchedItems / totalItems) * 100;
  }
}