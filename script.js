import { paint } from './canvas.js';
const {fromEvent} = Rx.Observable;
const {delay, filter, throttleTime, bufferTime, bufferCount, tap, map} = Rx.operators;


const click$ = fromEvent(document, 'mousemove')
                  .pipe(
                    //delay(1000),
                    //filter(point => point.clientX > 200),
                    //filter(point => point.clientY > 200)
                    //throttleTime(100)
                    //bufferTime(5000),
                    //bufferCount(50),
                    map(point => {
                      return {
                        clientX: point.clientX *2,
                        clientY: point.clientY *2
                    }}),
                    tap(points => console.log(points))
                  );
//const click$ = fromEvent(document, 'mousemove');
//const observer = (onmousemove) => console.log(onmousemove);

/*
const observer = (click) => {
  const {clientX, clientY} = click
  paint({clientX:clientX, clientY:clientY})
}
*/

click$.subscribe(paint)
/*
click$.subscribe(points => {
  points.map(point => paint(point));
})
*/