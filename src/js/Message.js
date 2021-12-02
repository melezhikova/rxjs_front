import { getTime, getSubject } from './others';

export default class Message {
  constructor(object) {
    this.id = object.id;
    this.from = object.from;
    this.subject = object.subject;
    this.body = object.body;
    this.received = object.received;
  }

  addMessageToDOM() {
    const box = document.querySelector('.messages-container');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('messageDiv');
    messageDiv.dataset.idMessage = this.id;

    const messageFrom = document.createElement('div');
    messageFrom.classList.add('messageFrom');
    messageFrom.textContent = this.from;
    const messageSubject = document.createElement('div');
    messageSubject.classList.add('messageSubject');
    messageSubject.textContent = getSubject(this.subject);

    const messageTime = document.createElement('div');
    messageTime.classList.add('messageTime');
    messageTime.textContent = getTime(this.received);

    messageDiv.append(messageFrom);
    messageDiv.append(messageSubject);
    messageDiv.append(messageTime);
    box.insertBefore(messageDiv, box.firstChild);
  }
}
