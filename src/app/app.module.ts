import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { ListsComponent } from './lists/lists.component';
import { ItemComponent } from './item/item.component';
import { CreateCharacterComponent } from './create-character/create-character.component';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    ListsComponent,
    ItemComponent,
    CreateCharacterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
