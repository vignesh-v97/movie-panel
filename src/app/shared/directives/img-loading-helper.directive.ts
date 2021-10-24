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

 @Input()
 @HostBinding("src")
 src: string;

 constructor() {}

 @HostListener("load")
 onLoad() {
   this.src = this._src;
 }

 @HostListener("error")
 onError() {}

 ngOnInit(): void {
   this._src = this.src;
   this.src =
     "assets/images/img-placeholder.png";
   }
}
