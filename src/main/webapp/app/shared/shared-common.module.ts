import { NgModule } from '@angular/core';

import { SchoolInspectionSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [SchoolInspectionSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [SchoolInspectionSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class SchoolInspectionSharedCommonModule {}
