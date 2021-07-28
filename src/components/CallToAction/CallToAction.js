import React from 'react';
import SbEditable from 'storyblok-react';
import { Button } from '../Button/Button';
import { ConditionalWrapper } from '../../lib/ConditionalWrapper';
import { NewsletterSignup } from '../Newsletter/NewsletterSignup';

export const CallToAction = ({ blok }) => {
  return (
    <div className="max-w-3xl m-auto p-8">
      <SbEditable content={blok} key={blok._uid}>
        <h2 className="text-center" key={`what!`}>
          {blok.headline}
        </h2>
        <p className="">{blok.text}</p>
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
