import { Component, Input} from '@angular/core';

@Component({
    selector: 'as-footer',
    templateUrl: 'footer.html',
    styleUrls: [
        'footer.css'
    ],
})
export class FooterComponent {
    @Input() brand: string;
}
