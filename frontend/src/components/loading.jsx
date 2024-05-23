import React from 'react'

export default function Loading({width=100,height=100}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" width={width} height={height} style={{shapeRendering: 'auto', margin:"auto", display: 'block', background: 'transparent'}} xmlnsXlink="http://www.w3.org/1999/xlink"><g><circle fill="#b1acac" r="10" cy="50" cx="84">
    <animate begin="0s" keySplines="0 0.5 0.5 1" values="10;0" keyTimes="0;1" calcMode="spline" dur="0.390625s" repeatCount="indefinite" attributeName="r"></animate>
    <animate begin="0s" values="#b1acac;#b1acac;#b1acac;#b1acac;#b1acac" keyTimes="0;0.25;0.5;0.75;1" calcMode="discrete" dur="1.5625s" repeatCount="indefinite" attributeName="fill"></animate>
</circle><circle fill="#b1acac" r="10" cy="50" cx="16">
  <animate begin="0s" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" values="0;0;10;10;10" keyTimes="0;0.25;0.5;0.75;1" calcMode="spline" dur="1.5625s" repeatCount="indefinite" attributeName="r"></animate>
  <animate begin="0s" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" values="16;16;16;50;84" keyTimes="0;0.25;0.5;0.75;1" calcMode="spline" dur="1.5625s" repeatCount="indefinite" attributeName="cx"></animate>
</circle><circle fill="#b1acac" r="10" cy="50" cx="50">
  <animate begin="-0.390625s" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" values="0;0;10;10;10" keyTimes="0;0.25;0.5;0.75;1" calcMode="spline" dur="1.5625s" repeatCount="indefinite" attributeName="r"></animate>
  <animate begin="-0.390625s" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" values="16;16;16;50;84" keyTimes="0;0.25;0.5;0.75;1" calcMode="spline" dur="1.5625s" repeatCount="indefinite" attributeName="cx"></animate>
</circle><circle fill="#b1acac" r="10" cy="50" cx="84">
  <animate begin="-0.78125s" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" values="0;0;10;10;10" keyTimes="0;0.25;0.5;0.75;1" calcMode="spline" dur="1.5625s" repeatCount="indefinite" attributeName="r"></animate>
  <animate begin="-0.78125s" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" values="16;16;16;50;84" keyTimes="0;0.25;0.5;0.75;1" calcMode="spline" dur="1.5625s" repeatCount="indefinite" attributeName="cx"></animate>
</circle><circle fill="#b1acac" r="10" cy="50" cx="16">
  <animate begin="-1.171875s" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" values="0;0;10;10;10" keyTimes="0;0.25;0.5;0.75;1" calcMode="spline" dur="1.5625s" repeatCount="indefinite" attributeName="r"></animate>
  <animate begin="-1.171875s" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" values="16;16;16;50;84" keyTimes="0;0.25;0.5;0.75;1" calcMode="spline" dur="1.5625s" repeatCount="indefinite" attributeName="cx"></animate>
</circle><g></g></g></svg>
  )
}
