import React from 'react'

export default function Duration ({ seconds }) {
  return (
    <div >
      {format(seconds)}
    </div>
  );
}

function format (seconds) {
  const date = new Date(seconds * 1000);
  const hh = date.getUTCHours();
  const mm = pad(date.getUTCMinutes());
  const ss = pad(date.getUTCSeconds());
  if (hh) {
    return `${hh}:${mm}:${ss}`;
  }
  return `${mm}:${ss}`;
}


function pad(val) {
  return ('0' + val).slice(-2);
}
