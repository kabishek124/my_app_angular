import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-counter',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './Counter.component.html',
    //template: `<p>Counter works!</p>`,
    styleUrl: './Counter.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterComponent {
    count = 0;

    onIncrease () {
        this.count++;
    }

    onDecrease () {
        if(this.count === 0) {
            return;
        }
        this.count--;
    }
}
