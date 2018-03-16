import {NgModule} from '@angular/core';
import {MatCardModule, MatGridListModule, MatListModule, MatSidenavModule} from '@angular/material';

@NgModule({
  imports: [MatCardModule, MatGridListModule, MatListModule, MatSidenavModule],
  exports: [MatCardModule, MatGridListModule, MatListModule, MatSidenavModule],
  declarations: []
})
export class MaterialModule {
}
