import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faTwitterSquare,
  faGithub,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
// import { useExternalLinks } from '../hooks/externalLinks';
import { useSiteMetadata } from '../hooks/siteMetadata';
import { useSocialInfo } from '../hooks/socialInfo';
// import { CallToAction } from '../components/Section/CallToAction';

export default function Footer({ blok }) {
  const {
    copyright,
    // hasCTA
  } = useSiteMetadata();
  const { email, facebook, twitter, github, instagram } = useSocialInfo();
  // const links = useExternalLinks();
  // const section = useCTAData()[0];
  let social = [];
  let SocialContainer = null;
  if (facebook !== '') {
    social.push({ icon: faFacebook, link: facebook });
  }
  if (instagram !== '') {
    social.push({ icon: faInstagram, link: instagram });
  }

  if (twitter !== '') {
    social.push({ icon: faTwitterSquare, link: twitter });
  }
  if (github !== '') {
    social.push({ icon: faGithub, link: github });
  }
  if (email !== '') {
    social.push({ icon: faEnvelope, link: email });
  }

  if (social.length > 0) {
    SocialContainer = (
      <div className="flex justify-center">
        <div className="flex text-center justify-between">
          {social.map((soc, index) => (
            <a
              key={index}
              href={`${soc.link}`}
              target="_blank"
              rel="noopener noreferrer"
              className={'m-4 textPrimary no-underline text-3xl'}
            >
              <FontAwesomeIcon icon={soc.icon} className={'shadow-sm'} />
            </a>
          ))}
        </div>
      </div>
    );
  }
  return (
    <footer>
      {SocialContainer}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {blok.body[0].body[0].body[0].body.map((link, index) => (
          <div key={`container-${index}`} className="text-center">
            <a
              key={index}
              href={`${link.link.url}`}
              target="_blank"
              rel="noopener noreferrer"
              className={
                'm-4 text-xl textPrimary no-underline  col-span-12 lg:col-span-1 overflow-hidden'
              }
            >
              {`${link.name}`}
            </a>
          </div>
        ))}
      </div>
      <div>
        <div>
          <div className="text-center p-5">{copyright} </div>
        </div>
      </div>
    </footer>
  );
}
