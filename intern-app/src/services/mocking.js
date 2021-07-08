export class Mocking {
  constructor() {
    this.data = Math.floor(Math.random()*10000000).toString();
  }
  getData(){
    return new Promise(resolve =>{ setTimeout(()=>{resolve(this.data)},200); });

  }
}
