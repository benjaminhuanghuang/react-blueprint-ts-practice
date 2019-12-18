import React from 'react';
import PropTypes from 'prop-types';


export const ExternalLink = React.memo(function ExternalLink(props) {
  const { href, children } = props;

  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
});


ExternalLink.propTypes = {
  href: PropTypes.string,
  children: PropTypes.ReactNode
};