import React from 'react';
import SbEditable from 'storyblok-react';
import { Button } from '../Button/Button';
import { ConditionalWrapper } from '../../lib/ConditionalWrapper';
import { NewsletterSignup } from '../Newsletter/NewsletterSignup';

export const CallToAction = ({ blok }) => {
  return (
    <div className="container p-8">
      <SbEditable content={blok} key={blok._uid}>
        <h3 key={blok._uid}>{blok.headline}</h3>
        <p className="text-lg text-gray-800 mb-2 text-left">{blok.text}</p>
        <ConditionalWrapper
          condition={blok.isNewsletter}
          wrapper={children => (
            <NewsletterSignup blok={blok} children={children} />
          )}
        >
          {blok.buttons &&
            blok.buttons.map((button, index) => {
              return (
                <span key={`buttonSection-${index}`}>
                  <Button
                    key={`${button.text}-${index}`}
                    href={button.link.url}
                  >
                    {button.text}
                  </Button>
                </span>
              );
            })}
        </ConditionalWrapper>
      </SbEditable>
    </div>
  );
};
