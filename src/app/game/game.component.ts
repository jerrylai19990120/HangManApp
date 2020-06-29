import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  public word = '';
  public displayWord = '';
  public correctLetters = '';
  public incorrectLetters = '';
  public guesses = 10;
  public lettersLeft = 0;
  public status = '';

  constructor() { }

  ngOnInit(): void {
  }

  head(): void {
    let canvas: any = document.getElementById('drawings');
    let context: any = canvas.getContext('2d');
    context.beginPath();
    context.strokeStyle = 'white';
    context.lineWidth = '2'
    context.arc(150, 100, 22, 0, 2 * Math.PI);
    context.stroke();
  }

  base(): void{
    let canvas: any = document.getElementById('drawings');
    let context: any = canvas.getContext('2d');
    context.beginPath();
    context.strokeStyle = 'white';
    context.lineWidth = '6'
    context.moveTo(46,330);
    context.lineTo(226, 330);
    context.stroke();
  }

  hangBar(): void{
    let canvas: any = document.getElementById('drawings');
    let context: any = canvas.getContext('2d');
    context.beginPath();
    context.strokeStyle = 'white';
    context.lineWidth = '6';
    context.moveTo(66,30);
    context.lineTo(66, 330);
    context.stroke();
  }

  bar():void{
    let canvas: any = document.getElementById('drawings');
    let context: any = canvas.getContext('2d');
    context.beginPath();
    context.strokeStyle = 'white';
    context.lineWidth = '6';
    context.moveTo(66,40);
    context.lineTo(206, 40);
    context.stroke();
  }

  rope():void{
    let canvas: any = document.getElementById('drawings');
    let context: any = canvas.getContext('2d');
    context.beginPath();
    context.strokeStyle = 'white';
    context.lineWidth = '6';
    context.moveTo(150, 40);
    context.lineTo(150, 78);
    context.stroke();

  }

  body():void{
    let canvas: any = document.getElementById('drawings');
    let context: any = canvas.getContext('2d');
    context.beginPath();
    context.strokeStyle = 'white';
    context.lineWidth = '2';
    context.moveTo(150, 123);
    context.lineTo(150, 208);
    context.stroke();
  }

  leftArm():void{
    let canvas: any = document.getElementById('drawings');
    let context: any = canvas.getContext('2d');
    context.beginPath();
    context.strokeStyle = 'white';
    context.lineWidth = '2';
    context.moveTo(150, 142);
    context.lineTo(90, 154);
    context.stroke();
  }

  rightArm():void{
    let canvas: any = document.getElementById('drawings');
    let context: any = canvas.getContext('2d');
    context.beginPath();
    context.strokeStyle = 'white';
    context.lineWidth = '2';
    context.moveTo(150, 142);
    context.lineTo(210, 154);
    context.stroke();
  }

  leftLeg():void{
    let canvas: any = document.getElementById('drawings');
    let context: any = canvas.getContext('2d');
    context.beginPath();
    context.strokeStyle = 'white';
    context.lineWidth = '2';
    context.moveTo(150, 206);
    context.lineTo(90, 266);
    context.stroke();

  }

  rightLeg():void{
    let canvas: any = document.getElementById('drawings');
    let context: any = canvas.getContext('2d');
    context.beginPath();
    context.strokeStyle = 'white';
    context.lineWidth = '2';
    context.moveTo(150, 206);
    context.lineTo(210, 266);
    context.stroke();
  }



  generate(input): void{
    this.word = input.value;
    for(let i=0;i<this.word.length;i++){
      this.displayWord += '*';
    }
    this.lettersLeft = this.word.length;
    input.value = '';
  }
  
  submit(input): void{
    let letter = input.value;
    if(this.word.includes(letter)){
      this.correctLetters += letter;
      for(let i=0;i<this.word.length;i++){
          if(this.word[i]===letter){
            this.lettersLeft--;
            this.displayWord = this.displayWord.slice(0, i) + this.word[i] + this.displayWord.slice(i+1, this.word.length);
          }
      }
      input.value = '';
    }else{
      this.guesses--;
      if(this.guesses===9){
        this.base();
      }else if(this.guesses===8){
        this.hangBar();
      }else if(this.guesses===7){
        this.bar();
      }else if(this.guesses===6){
        this.rope();
      }else if(this.guesses===5){
        this.head();
      }else if(this.guesses===4){
        this.body();
      }else if(this.guesses===3){
        this.leftArm();
      }else if(this.guesses===2){
        this.rightArm();
      }else if(this.guesses===1){
        this.leftLeg();
      }else if(this.guesses===0){
        this.rightLeg();
      }
      this.incorrectLetters += letter;
      input.value = '';
    }

    if(this.guesses==0){
      this.displayWord = this.word;
      this.status = 'You Lost :(';
    }
    if(!this.displayWord.includes('*')){
      this.displayWord = this.word;
      this.status = 'You Won :)';
    }
  }

  restart(): void{
    this.word = '';
    this.displayWord = '';
    this.correctLetters = '';
    this.incorrectLetters = '';
    this.guesses = 10;
    this.lettersLeft = 0;
    this.status = '';
  }

}
