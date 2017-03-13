import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

export enum AppPage { Home, Team}

@Component({
    selector: 'as-navbar',
    templateUrl: 'navbar.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {
    @Input() brand: string;
}
