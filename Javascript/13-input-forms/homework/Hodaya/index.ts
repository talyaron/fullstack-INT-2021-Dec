interface myInterface {
    display(): string;
  }
  
  class CheckIn implements myInterface {
    constructor(
      private name: string, 
      private comingFrom: string, 
      private purpose: string,
      public date: string
    ){}
  
    display() {
      return `${this.name} coming from ${this.comingFrom} checked in for ${this.purpose} on ${this.date}`;
    }
  }
  
  class CheckOut implements myInterface{
    constructor(
      private name: string, 
      private comingFrom: string, 
      private purpose: string,
      public date: string
    ){};
  
    display() {
      return `${this.name} coming from ${this.comingFrom} for ${this.purpose} on ${this.date} has checked out`;
    }
  }
  
  
  class ListTemplate {
    constructor(
      private container: HTMLOListElement
      ){};
  
    render(item: myInterface, heading: string){
      const li = document.createElement('li');
    
      const h3 = document.createElement('h3');
      h3.innerText = heading;
      li.append(h3);
  
      const p = document.createElement('p');
      p.innerText = item.display();
      li.append(p);
  
      
      this.container.append(li);
      
    }
  }
  
  
  
  const form = document.querySelector('.input-form') as HTMLFormElement;
  
  
  // grabbing the HTML elements
  const type = document.querySelector('#type') as HTMLInputElement;
  const personName = document.querySelector('#name') as HTMLInputElement;
  const from = document.querySelector('#from') as HTMLInputElement;
  const purpose = document.querySelector('#purpose') as HTMLInputElement;
  const date = document.querySelector('#date') as HTMLInputElement;
  
  
  // creating a ListTemplate instance
  const ol = document.querySelector('ol')!;
  const list = new ListTemplate(ol);
  
  //'form submit' event listner
  form.addEventListener('submit', (e: Event) => {
    
    e.preventDefault();
  
    let visitor: myInterface;
    
    if (type.value === 'CheckIn') {
      visitor = new CheckIn(personName.value, from.value, purpose.value, date.value);
    } else {
      visitor = new CheckOut(personName.value, from.value, purpose.value, date.value);
    }
    
    list.render(visitor, type.value);
    
    type.value = '';
    personName.value = '';
    from.value = '';
    purpose.value = '';
    date.value = '';
  });
  

































// function handleSelectflag(ev:any){
//     console.log(ev.target.value)
// }

// const flag = ['Argentine', 'Israel', 'England', 'France'];
// function myOptions(option:string){
//     return`<option value=${option}>${option}</option>`
// }

// function mySelections(options:Array<string>, functionName:string, element:Element){
//    try { 
//         let html = `<select onchange="${functionName}(event)">
//         <option value="" disabled selected>Choose</option>`;
//         options.forEach(el => {
//             html += myOptions(el)
 
//         });
//         html += `</select>`
//         element.innerHTML = html;

//     } catch (error){
//         console.log(error)
//     }    
 

// }

// const root = document.querySelector('#root');
// mySelections(flag,'handleSelectflag',root)