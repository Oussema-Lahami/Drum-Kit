import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keys',
  templateUrl: './keys.component.html',
  styleUrls: ['./keys.component.scss']
})
export class KeysComponent implements OnInit {

  constructor() {
  
    function playSound(e : any) {
      const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`) as HTMLAudioElement;
      const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
      if (!audio) return;
  
     
      audio.currentTime = 0;
      audio.play();
      key?.classList.add('playing');
    }
  
    const keys = Array.from(document.querySelectorAll('.key'));
    window.addEventListener("keyup", playSound);
  
   }

  ngOnInit(): void {
  }
  

}
