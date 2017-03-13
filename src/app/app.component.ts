import { Component } from '@angular/core';
import './operators';
import { CONSTANTS } from './shared';
import { MdIconRegistry }  from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
    selector: 'as-main-app',
    templateUrl: 'app.html'
})
export class AppComponent {
    public appBrand: string;

    constructor(mdIconRegistry: MdIconRegistry, private sanitizer: DomSanitizer) {
        this.appBrand = CONSTANTS.MAIN.APP.BRAND;
        mdIconRegistry.addSvgIcon('twitter', sanitizer.bypassSecurityTrustResourceUrl('assets/svg/twitter.svg'));
        mdIconRegistry.addSvgIcon('linkedin', sanitizer.bypassSecurityTrustResourceUrl('assets/svg/linkedin-box.svg'));
    }
}
