import React from 'react';
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image';
import SbEditable from 'storyblok-react';
import { Button } from '../Button/Button';

export const CallToActionHero = ({ blok }) => {
  return (
    <>
      {blok.image && (
        <SbEditable content={blok} key={blok._uid}>
          <div
            className=""
            style={{
              lineHeight: 0,
              margin: '0 auto',
              width: '100%',
              maxWidth: 2000,
            }}
          >
            <div
              className="flex justify-center w-full absolute"
              style={{
                boxSizing: 'inherit',
                width: '100vw',
                maxWidth: 2000,
                minHeight: 600,
                zIndex: 1,
                lineHeight: 0,
                quotes: 'auto',
              }}
            >
              <div
                className="cursor-default flex flex-col justify-center text-center"
                style={{
                  boxSizing: 'inherit',
                  height: '10vh',
                  maxWidth: '700px',
                  minHeight: '600px',
                  width: 'calc(100vw - 90px)',
                  lineHeight: 0,
                  quotes: 'auto',
                }}
              >
                <h1
                  className="md:mx-0 md:mt-0 md:mb-4 font-bold text-4xl mx-0 mt-0 mb-2 heroText"
                  style={{
                    boxSizing: 'inherit',
                    lineHeight: 1.33333,
                    quotes: 'auto',
                  }}
                >
                  {blok.text}
                </h1>
                <p
                  className="md:text-3xl md:mx-0 md:my-8 text-xl m-0 heroText"
                  style={{
                    boxSizing: 'inherit',
                    lineHeight: 1.4,
                    fontFamily: 'inherit',
                    quotes: 'auto',
                    textShadow: '2px 2px #4e4e4e',
                  }}
                >
                  {blok.headline}
                </p>
                {blok.buttons &&
                  blok.buttons.map((button, index) => {
                    const overrideStyles = button.paragraph_style.concat(
                      button.style
                    );
                    return (
                      <span key={`buttonSection-${index}`}>
                        <Button
                          key={`${button.text}-${index}`}
                          href={button.link.url}
                          classes={overrideStyles?.join()}
                        >
                          {button.text}
                        </Button>
                      </span>
                    );
                  })}
              </div>
            </div>

            <picture>
              <img
                className="object-cover"
                style={{
                  width: '100%',
                  height: '10vh',
                  minHeight: 600,
                  maxWidth: 2000,
                }}
                alt={blok.text}
                src={`https:${blok.image}`}
              />
            </picture>
          </div>
        </SbEditable>
      )}
      <div className="container">
        {blok.title && (
          <h2 className="py-8" key={`${blok.title}`}>
            {blok.title}
          </h2>
        )}
        {blok.description && (
          <div className="text-lg text-gray-800 mb-2">{blok.headline}</div>
        )}
      </div>
    </>
  );
};
