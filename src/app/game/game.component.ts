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
  public guesses = 6;
  public lettersLeft = 0;
  public status = '';

  constructor() { }

  ngOnInit(): void {
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
      this.incorrectLetters += letter;
      input.value = '';
    }

    if(this.guesses==0){
      this.status = 'You Lost :(';
    }
    if(!this.displayWord.includes('*')){
      this.status = 'You Won :)';
    }
  }

}
