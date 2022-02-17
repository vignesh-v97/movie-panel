import {
    Directive,
    OnChanges,
    OnInit,
    SimpleChanges,
    Input,
    Output,
    EventEmitter,
    ElementRef,
    Renderer2,
    HostBinding,
    HostListener,
  } from "@angular/core";

  @Directive({
    selector: "[appPagination]",
    exportAs: "appPagination"
  })


  export class PaginationDirective implements OnChanges, OnInit {

    @Input() pageNo = 1;
    @Input() totalPages = 1;
    @Output() pageChange = new EventEmitter<number>();

    constructor(private el: ElementRef, private renderer: Renderer2) {}

    ngOnInit() {
      // In case no value is passed
      this.setValue(this.pageNo);
    }

    ngOnChanges({ pageNo, totalPages }: SimpleChanges) {
      // Needs to be checked before pageNo
      if (totalPages) {
        console.log('on total pages pages change 🤢🤢')
        this.onTotalPagesInput();
      }

      if (pageNo) {
        console.log('on pageNo change 🥵🥵', pageNo, '🥵🥵')
        this.onPageNoInput();
      }
    }

    @HostListener("input", ["$event.target.value"]) onInput(val: string) {
      console.log('input 🟡 👉👉', val)

      this.setValue(this.getParsedValue(val));
    }

    @HostListener("change", ["$event.target.value"]) onChange(val: string) {
      console.log('change triggered 🔴🔴🔴')
      if (val === "") {
        this.setValue(1);
      }

      if (this.isOutOfRange(val)) {
        this.setValue(this.totalPages);
      }

      this.pageNo = Number(this.el.nativeElement.value);
      this.pageChange.emit(this.pageNo);
    }

    public get isFirst(): boolean {
      return this.pageNo === 1;
    }

    public get isLast(): boolean {
      return this.pageNo === this.totalPages;
    }

    public first() {
      this.setPage(1);
    }

    public prev() {
      // this.setPage(Math.max(1, this.pageNo - 1));
      this.setPage(this.pageNo - 1);
    }

    public next() {
      // this.setPage(Math.min(this.totalPages, this.pageNo + 1));
      this.setPage(this.pageNo + 1);
    }

    public last() {
      this.setPage(this.totalPages);
    }

    private setValue(val: string | number) {
      this.renderer.setProperty(this.el.nativeElement, "value", String(val));
    }

    private setPage(val: number) {
      this.pageNo = val;
      this.setValue(this.pageNo);
      this.pageChange.emit(this.pageNo);
    }

    private getParsedValue(val: string): string {
      return val.replace(/(^0)|([^0-9]+$)/, "");
    }

    private isOutOfRange(val: string): boolean {
      return Number(val) > this.totalPages;
    }

    private onTotalPagesInput() {
      if (typeof this.totalPages !== "number") {
        this.totalPages = 1;
      }
    }

    private onPageNoInput() {
      this.pageNo = this.pageNo * 1;
      if (
        typeof this.pageNo !== "number" ||
        this.pageNo < 1 ||
        this.pageNo > this.totalPages
      ) {
        console.log('error 🦴', this.pageNo > this.totalPages,  this.pageNo )
        this.pageNo = 1;
      }

      this.setValue(this.pageNo);
    }
  }
