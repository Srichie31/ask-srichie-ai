import {
  Component,
  Input,
  ViewChild,
  ElementRef,
  AfterViewChecked,
} from '@angular/core';
import { ChatbotService } from '../services/chatbot.service';
import { Message } from '../models/message.model';

@Component({
  selector: 'app-chatbot',
  standalone: false,
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.scss'],
})
export class ChatbotComponent implements AfterViewChecked {
  inputs : any = [{
    'main' : 'Write a code',
    'sub' : "of dikshtra's theorem in python"
  },{
    'main' : 'Write a code',
    'sub' : "of dikshtra's theorem in python"
  }]
  userMessage: string = '';
  messages: { text: string; sender: 'user' | 'bot' }[] = [];
  @ViewChild('scrollContainer') private scrollContainer!: ElementRef;

  constructor(private chatbotService: ChatbotService) {}

  ngAfterViewChecked(): void {
    this.scrollToBottom();
    console.log(this.messages);
  }

  sendMessage() {
    const trimmedMsg = this.userMessage.trim();
    if (!trimmedMsg) return;

    const userMsg: Message = {
      text: trimmedMsg,
      sender: 'user',
      timestamp: new Date(),
    };
    this.messages.push(userMsg);

    this.chatbotService.sendMessage(trimmedMsg).subscribe(
      (response) => {
        const botMsg: Message = {
          text: response.reply || 'No response',
          sender: 'bot',
          timestamp: new Date(),
        };
        this.messages.push(botMsg);
      },
      (error) => {
        console.error('Error:', error);
      }
    );

    this.userMessage = '';
  }

  handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.sendMessage();
    }
  }

  autoGrow(textArea: HTMLTextAreaElement) {
    const maxHeight = 200;
    textArea.style.height = 'auto';
    const newHeight = textArea.scrollHeight;

    if (newHeight > maxHeight) {
      textArea.style.height = `${maxHeight}px`;
      textArea.style.overflowY = 'auto';
    } else {
      textArea.style.height = `${newHeight}px`;
      textArea.style.overflowY = 'hidden';
    }
  }

  private scrollToBottom(): void {
    try {
      this.scrollContainer.nativeElement.scrollTop =
        this.scrollContainer.nativeElement.scrollHeight;
    } catch (err) {
      console.error('Scroll error:', err);
    }
  }
}
