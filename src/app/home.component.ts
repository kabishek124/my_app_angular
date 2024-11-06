import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterOutlet } from "@angular/router";

@Component({
    selector: "abi-root",
    standalone: true,
    templateUrl: './home.component.html',
    imports: [RouterOutlet, FormsModule]
})

export class HomeComponent{
    title = "Hello World";
    img = "https://picsum.photos/200/300";
    alt = "Image";
    app:any = null;
    count = 0;
    onClick() {
        this.count++;
    }
}