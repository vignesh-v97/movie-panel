import {
 Directive,
 HostBinding,
 HostListener,
 Input,
 OnInit,
} from "@angular/core";

@Directive({
 selector: "[appImgLoadingHelper]",
})
export class ImgLoadingHelperDirective implements OnInit {
 private _src: string;

 @Input() @HostBinding("src") src: string;
 @Input() @HostBinding("placeholderSrc") placeholderSrc: string;
 @Input() @HostBinding("noData") noData: string;

 constructor() {}

 @HostListener("load")
 onLoad() {
   this.src = this._src;
  }
  
  @HostListener("error")
  onError() {
    this.src = this.noData;
  }
  
  ngOnInit(): void {
    this._src = this.src;
    this.src = this.placeholderSrc;
}
}
