import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import {MatExpansionModule} from '@angular/material/expansion';
import { Tab2PageRoutingModule } from './tab2-routing.module';
import { ChartsModule} from 'ng2-charts'
import { SearchPipe } from '../tab1/services/search.pipe';



@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab2PageRoutingModule,
    MatExpansionModule,
    ChartsModule

  ],
  declarations: [
    Tab2Page,
    SearchPipe
  ]
})
export class Tab2PageModule {}
