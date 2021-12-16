// TODO: write your code here
import { ajax } from 'rxjs/ajax';
import { interval } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import Message from './Message';

let newMessages = [];
let lastTimestamp = null;
const url = 'https://rxjs-back.herokuapp.com/?method=messages/unread';
let subscription;

const data$ = interval(5000).pipe(
  switchMap(ajax.getJSON(`${url}&time=${lastTimestamp}`)),
);
data$.subscribe(
  (res) => {
    console.log(res);
    newMessages = res.messages;
    lastTimestamp = res.timestamp;
    newMessages.forEach((item) => {
      const msg = new Message(item);
      msg.addMessageToDOM();
    });
  },
  (err) => console.error(err),
);

// setInterval(() => {
//   const urlWithTime = `${url}&time=${lastTimestamp}`;
//   const data$ = ajax.getJSON(urlWithTime);
//   subscription = data$.subscribe(
//     (res) => {
//       console.log(res);
//       newMessages = res.messages;
//       lastTimestamp = res.timestamp;
//       newMessages.forEach((item) => {
//         const msg = new Message(item);
//         msg.addMessageToDOM();
//       });
//     },
//     (err) => console.error(err),
//   );
// }, 5000);

setTimeout(() => subscription.unsubscribe(), 1000000);
