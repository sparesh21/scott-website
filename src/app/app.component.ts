import { Component } from '@angular/core';

declare var TweenMax;
declare var TimelineMax;
declare var Back: any;
declare var Linear: any;
declare var Power2: any;
declare var Bounce: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  searchOpen: boolean = false;
  searchIcon: string = "search";
  headerOpen: boolean = false;
  menuName: string = 'menu';
  
  openSearch(){
    if(this.searchOpen == false){
      this.searchOpen = true;
      this.searchIcon = "times"
    }
    else{
      this.searchOpen = false;
      this.searchIcon = "search"
    }
    
  }
  ngOnInit(){
    
  }
  openMenu(){
    if (!this.headerOpen==true) {
      console.log('clicked working');
      var tl = new TimelineMax();
      tl.fromTo('.menu-overlay', .8, {
        left: '-100%',
        skewType: "simple",
        skewX: -30,
        xPercent: -50,
        ease: Back.easeInOut.config(10),

      }, {
          left: '0%',
          skewType: "simple",
          skewX: 0,
          visibility: 'visible',
          xPercent: 0,
          delay: 0.3,

      })
      .to('header', 1, {
        opacity: 1,
        display:'block',
        ease: Linear.easeNone,
      })
      setTimeout(() => {
        this.headerOpen = true;
        this.menuName = "close";
      }, 500);
    }else{
      var tl = new TimelineMax();
      tl.to('header', 0.1, {
        opacity: 0,
        display:'none',
        ease: Linear.easeNone,
      })
      tl.to('.menu-overlay', 1.6, {
        left: '-100%',
        skewType: "simple",
        skewX: -30,
        xPercent: -50,
      })
      
      setTimeout(() => {
        this.headerOpen = false;
        this.menuName = "menu";
      }, 500);
    }
      
  }

}
