import { Component, forwardRef, OnInit } from "@angular/core"
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms"
import { DomSanitizer } from "@angular/platform-browser"
import snarkdown from "snarkdown"

type tabNames = 'md' | 'text'

@Component({
  selector: "mn-md-editor",
  templateUrl: "./md-editor.component.html",
  styleUrls: [ "./md-editor.component.scss" ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MdEditorComponent),
      multi: true
    }
  ]
})
export class MdEditorComponent implements OnInit, ControlValueAccessor {
  public selectedTab: tabNames = "md"
  public mdText: string;
  public isDisabled:boolean = true

  constructor(private domSanitizer: DomSanitizer) {
  }

  public ngOnInit(): void {
  }

  public onMdEditorChange(md: string): void {
  }

  public onMdEditorTouch(): void {
  }

  public onClickTabBtn(tabName: tabNames) {
    this.selectedTab = tabName
  }

  public convertMD(markdown: string) {
    return this.domSanitizer.bypassSecurityTrustHtml(snarkdown(markdown))
  }

  public registerOnChange(fn: any): void {
    this.onMdEditorChange = fn
  }

  public registerOnTouched(fn: any): void {
    this.onMdEditorTouch = fn
  }

  public setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled
  }

  public writeValue(md: string): void {
    this.mdText = md
    console.log(this.mdText)
  }
}