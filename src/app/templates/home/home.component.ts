import { Component, OnInit } from '@angular/core';


declare var $: any;
//declare var scrollify : ('jquery.scrollify');

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	tab: any = "avuator";
	tabList: any = "avuator";
	slider: any = "avuator-slider";
  	constructor() { }
  
 	 ngOnInit() {
		$.scrollify({
			section:".scroll-panel",
			scrollbars: true,
			easing: "swing",
			scrollSpeed: 1100,
			updateHash:false
		});
		setTimeout(()=>{
			console.log('slider',this.tab);
			$('.avuator').owlCarousel({
				loop:false,
				margin:10,
				nav:true,
				dots:false,
				items:1,
				smartSpeed: 1250,
				animateOut: 'fadeOut',
    			animateIn: 'flipInX',
			});
		}, 1);

	  }
	
  	showDetails(tabVal){
		this.tab=tabVal;
		this.tabList=tabVal;
		console.log(tabVal);
		setTimeout(()=>{
			console.log('slider',this.tab);
			$('.' + this.tab).owlCarousel({
				loop:true,
				margin:10,
				nav:true,
				dots:false,
				items:1,
				smartSpeed: 1250,
				animateOut: 'fadeOut',
    			animateIn: 'flipInX',
			});
		}, 1);
  	}

}
