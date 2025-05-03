import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MarkdownModule } from 'ngx-markdown';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LeftBarComponent } from './left-bar/left-bar.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';
import { InputBarComponent } from './input-bar/input-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftBarComponent,
    ChatbotComponent,
    InputBarComponent,
    
  ],
  imports: [
    MarkdownModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
