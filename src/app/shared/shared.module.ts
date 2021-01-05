import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
// import { ParallaxModule } from 'ngx-parallax';
// import { NgxNewstickerAlbeModule } from 'ngx-newsticker-albe';
// import { NgxAnimatedGradientModule } from 'ngx-animated-gradient';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CarouselHolderComponent } from './carousel-holder/carousel-holder.component';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';



@NgModule({
  declarations: [CarouselHolderComponent, SafeHtmlPipe],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule,
    BsDropdownModule.forRoot(),
    AlertModule.forRoot(),
    ModalModule.forRoot(),
    TooltipModule.forRoot(),
    PopoverModule.forRoot(),
    AccordionModule.forRoot(),
    CollapseModule.forRoot(),
    TabsModule.forRoot(),
    TypeaheadModule.forRoot(),
    BsDatepickerModule.forRoot(),
    ProgressbarModule.forRoot(),
    PaginationModule.forRoot(),
    TimepickerModule.forRoot(),
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule,
    BsDropdownModule,
    AlertModule,
    ModalModule,
    TooltipModule,
    PopoverModule,
    AccordionModule,
    CollapseModule,
    TabsModule,
    TypeaheadModule,
    BsDatepickerModule,
    ProgressbarModule,
    PaginationModule,
    TimepickerModule,
    CarouselHolderComponent,
    SafeHtmlPipe
  ],
  entryComponents: [CarouselHolderComponent]
})
export class SharedModule { }