import React from 'react';

export default function GoogleCalendar({ blok }) {
  console.log(blok);
  return (
    <div className="flex flex-col align-center">
      <iframe
        src={blok.url}
        style={{ border: 0, frameborder: 0, scrolling: 'no' }}
        width={`${blok.width}%`}
        height={blok.height}
        title={blok.title}
      ></iframe>
    </div>
  );
}
