import React from 'react';

const Splashpage = () => (
  <div className='homepage-main'>
    <div className='homepage-intro'>
    Scroll Up and Down this page to see the parallax scrolling effect.
    This div is just here to enable scrolling.
    Tip: Try to remove the background-attachment property to remove the scrolling effect.
    </div>
    <div className='homepage-features'>
      <div className='homepage-feature-1'>
        Feature 1
      </div>
      <div className='homepage-feature-2'>
        Feature 2
      </div>
      <div className='homepage-feature-3'>
        Feature 3
      </div>
      <div className='homepage-feature-4'>
        Feature 4
      </div>
    </div>
    <div className='homepage-footer'>
      <span>Github</span>
      <span>LinkedIn</span>
      <span>App Academy</span>
    </div>
  </div>
);

export default Splashpage;
