import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { SerieService } from '../../services/serie.service';
import { Serie } from '../../models/serie.model';
declare var jQuery: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [SerieService]
})
export class HeaderComponent implements OnInit {

	public series:any = [];

  constructor(
  		private _route: ActivatedRoute,
		private _router: Router,
		private _serieService: SerieService) 
  { }

  public loadScript(url: string) {
	    const body = <HTMLDivElement> document.body;
	    const script = document.createElement('script');
	    script.innerHTML = '';
	    script.src = url;
	    script.async = false;
	    script.defer = true;
	    body.appendChild(script);
  	}

  ngOnInit() {

  	this.getSeries();

  	this.loadScript('https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js');

  	(function ($) {
		$(document).ready(function(){


	      			
			  const $dropdown = $(".dropdown");
			  const $dropdownToggle = $(".dropdown-toggle");
			  const $dropdownMenu = $(".dropdown-menu");
			  const showClass = "show";
			   
			  $(window).on("load resize", function() {
			    //if (this.matchMedia("(min-width: 768px)").matches) {
			      $dropdown.hover(
			        function() {
			          const $this = $(this);
			          $this.addClass(showClass);
			          $this.find($dropdownToggle).attr("aria-expanded", "true");
			          $this.find($dropdownMenu).addClass(showClass);
			        },
			        function() {
			          const $this = $(this);
			          $this.removeClass(showClass);
			          $this.find($dropdownToggle).attr("aria-expanded", "false");
			          $this.find($dropdownMenu).removeClass(showClass);
			        }
			      );
			    //} else {
			    //  $dropdown.off("mouseenter mouseleave");
			    //}
			  });


	        		console.log("Hello from jQuery!");
	      		});
    		})(jQuery);
    }

    getSeries() : any{
		this._serieService.getSeries().subscribe(
			result => {
				console.log(result);

				this.series = result;
			},
			error => {
				console.log(<any>error);
			}
		);
	}


	highlightMenuNav(){

		(function ($) {
	  		$(document).ready(function(){
	  			$('#navbarDropdown1').addClass( 'active' );
	  		});
		})(jQuery);
        
	}

	unhighlightMenuNav(){

		(function ($) {
	  		$(document).ready(function(){
	  			$('#navbarDropdown1').removeClass( 'active' );
	  		});
		})(jQuery);
        
	}

	initialMenuNav(){
		(function ($) {
	  		$(document).ready(function(){
	  			$('#navbarDropdown1').removeClass( 'active' );
	  		});
		})(jQuery);
        
	}

}
