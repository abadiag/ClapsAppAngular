import { Component, OnInit } from '@angular/core';
import { SoundServiceService } from 'src/app/services/sound-service.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  state: any;
  currentFile: any = {};
  soundPlayer: SoundServiceService;
  current_fileIndex = 0;
  sounds: Array<string> =
    [
      "../../../assets/sounds/one_clap.wav",
      "../../../assets/sounds/trumpet.wav",
      "../../../assets/sounds/beep.mp3"
    ];

  current_file_loaded: string = this.sounds[this.current_fileIndex];

  isFirstPlaying() {
    return  this.current_fileIndex == 0;
  }
  isLastPlaying() {
    return  this.current_fileIndex == this.sounds.length;
  }

  constructor(_player: SoundServiceService) {
    this.soundPlayer = _player;
  }

  play() {
    this.soundPlayer.play();
  }

  pause() { this.soundPlayer.pause(); }

  next()
   {
    this.soundPlayer.pause();
    this.current_fileIndex++;
    this.current_fileIndex = this.current_fileIndex == this.sounds.length? 0 : this.current_fileIndex;
    this.soundPlayer.load(this.sounds[this.current_fileIndex]);
   }

  previous()
     {
      this.soundPlayer.pause();
      this.current_fileIndex--;
      this.current_fileIndex = this.current_fileIndex == -1? this.sounds.length : this.current_fileIndex;
      this.soundPlayer.load(this.sounds[this.current_fileIndex]);
   }

  onSliderChangeEnd(ev: any) { }

  onFaderChanged(ev: number, name: string) {
    console.log(ev);
    switch (name) {
      case "bass":

        break;
      case "mid":
        break;
      case "treble":
        break;
      case "vol":
        this.soundPlayer.player.volume = 0.1;
        break;
    }
  }

  ngOnInit(): void {
    this.soundPlayer.load(this.sounds[this.current_fileIndex]);
  }
}
