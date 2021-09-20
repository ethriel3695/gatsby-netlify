import React from 'react';
import SbEditable from 'storyblok-react';
import Teaser from './teaser';
import { CallToAction, CallToActionHero } from './CallToAction/index';
import { Button } from './Button/Button';
import { Header } from './Header/Header';
import Footer from './Footer';
import GoogleCalendar from './Calendar/GoogleCalendar';

const Components = {
  teaser: Teaser,
  call_to_action: CallToAction,
  call_to_action_wide_image: CallToActionHero,
  button: Button,
  google_calendar: GoogleCalendar,
  header: Header,
  footer: Footer,
};

const DynamicComponent = ({ blok }) => {
  if (typeof Components[blok.component] !== 'undefined') {
    const Component = Components[blok.component];
    return (
      <SbEditable content={blok}>
        <Component blok={blok} />
      </SbEditable>
    );
  }
  return (
    <p>
      The component <strong>{blok.component}</strong> has not been created yet.
    </p>
  );
};

export default DynamicComponent;
