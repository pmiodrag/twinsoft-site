import { Component } from '@angular/core';
import './operators';
import { CONSTANTS } from './shared';
import { MdIcon, MdIconRegistry }  from '@angular/material/icon';
@Component({
    selector: 'as-main-app',
    templateUrl: 'app.html'
})
export class AppComponent {
    public appBrand: string;

    constructor(mdIconRegistry: MdIconRegistry) {
        this.appBrand = CONSTANTS.MAIN.APP.BRAND;
        mdIconRegistry.addSvgIcon('twitter', 'assets/svg/twitter.svg');
        mdIconRegistry.addSvgIcon('linkedin', 'assets/svg/linkedin-box.svg');
    }
}
