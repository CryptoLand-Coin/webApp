// ==================================================================
// ==== SET WINDOW SIZE ===

export const WIDTH_RESIZE = 'WIDTH_RESIZE';

export const updateDimensions = event => {
  if (event.width) {
    return {
      type: WIDTH_RESIZE,
      payload: event
    };
  } else if (event.target) {
    let width = event.target.innerWidth;
    let height = event.target.innerHeight;
    let resizeObj = {
      width,
      height
    };
    return {
      type: WIDTH_RESIZE,
      payload: resizeObj
    };
  }
};

// ==================================================================
// ==== SET Navbar Location ===

export const NAVBAR_LOCATION = 'NAVBAR_LOCATION';

export const setNavbarLocation = isInHero => {
  return {
    type: NAVBAR_LOCATION,
    payload: isInHero
  };
};

// ==================================================================
// ==== Is landing page loaded ===

export const LP_LOADED = 'LP_LOADED';

export const confirmLPLoaded = bool => {
  return {
    type: LP_LOADED,
    payload: bool
  };
};
