import { HtmlAstPath } from "@angular/compiler"
import { Component, OnInit } from "@angular/core"
import { FormControl } from "@angular/forms"
import { LeafletMouseEvent } from "leaflet"
import { DialogService } from "../../../../dialog.service"
import { MapService } from "../../../../map.service"

@Component({
  selector: "mn-shell",
  templateUrl: "./shell.component.html",
  styleUrls: [ "./shell.component.scss" ]
})
export class ShellComponent implements OnInit {
  public isShowAddButton: boolean = false
  public searchFormControl: FormControl = new FormControl()
  private addButtonLifeTimerId: any| null = null
  public tags:string[] = ['Паб', 'Бар', 'Ресторан'];
  public selectedTags:string[] = [];

  constructor(private mapService: MapService,
              private dialogService: DialogService) {
  }

  public ngOnInit(): void {
    this.mapService.isReady.then((map) => {
      map.addEventListener("click", (event: LeafletMouseEvent) => {
        this.isShowAddButton = true

        if (this.addButtonLifeTimerId !== null) {
          clearTimeout(this.addButtonLifeTimerId)
        }

        this.addButtonLifeTimerId = setTimeout(() => {
          this.isShowAddButton = false
        }, 5000)

        this.dialogService.isCurrentEditLatLng = event.latlng
      })
    })
  }

  public onClickClearButton(): void {
    this.searchFormControl.reset()
  }

  public onClickAddButton(): void {
    this.dialogService.open()
    this.isShowAddButton = false
    clearTimeout(this.addButtonLifeTimerId)
  }

  public onChangeSelectedTags(event: Event): void{
    const tagText:HTMLButtonElement = event.target as HTMLButtonElement;
    const tagsIndex:number = this.selectedTags.indexOf(tagText.textContent);
    console.log(tagsIndex);
    tagsIndex === -1 ? this.selectedTags.push(tagText.textContent) : this.selectedTags.splice(tagsIndex, 1);
  }
}
