import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import {HideComponent} from "./hide/hide.component";
import { FormsModule } from "@angular/forms";

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [HideComponent],
    exports: [HideComponent]
})
export class HideModule { }