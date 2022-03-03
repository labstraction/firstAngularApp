import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';

import { WelcomeComponent } from './components/welcome/welcome.component';
import { DoneListComponent } from './components/wrapper/subComponents/done-list/done-list.component';
import { FilterComponent } from './components/wrapper/subComponents/filter/filter.component';
import { StatisticsComponent } from './components/wrapper/subComponents/statistics/statistics.component';
import { TaskInputComponent } from './components/wrapper/subComponents/task-input/task-input.component';
import { TaskListElementComponent } from './components/wrapper/subComponents/task-list-element/task-list-element.component';
import { ToDoListComponent } from './components/wrapper/subComponents/to-do-list/to-do-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    WrapperComponent,
    ToDoListComponent,
    DoneListComponent,
    TaskInputComponent,
    FilterComponent,
    StatisticsComponent,
    TaskListElementComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
