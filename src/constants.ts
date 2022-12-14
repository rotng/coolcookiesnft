export const PRIVATE_ARROW_DRAFT = JSON.stringify({
  blocks: [
    {
      key: 'privatePost',
      text: '<private>',
      type: 'unstyled',
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {},
    }
  ],
  entityMap: {},
});

export const PRIVATE_ARROW_TEXT = '<private>';

export const REMOVED_ARROW_DRAFT = JSON.stringify({
  blocks: [
    {
      key: 'removedPost',
      text: '<deleted>',
      type: 'unstyled',
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {},
    }
  ],
  entityMap: {},
});

export const REMOVED_ARROW_TEXT = '<deleted>';


export const START_ARROW_ID = '118d5dc5-ebc0-4a47-8323-2edb6ad1914e';
export const START_ARROW_TITLE = 'Quickstart'
export const START_ARROW_ROUTNAME = 'quickstart'


export const START_ARROW_1_ID = 'a871cd40-98f1-4912-994d-5a835b34ae32'; // SearchGhost
export const START_ARROW_2_ID = 'e1501397-8637-47b6-9ef2-e1b4d1b926fd'; // CoolCookiesNFT


export const uuidRegexExp = /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i;

export const LOAD_LIMIT = 20;

export const ACTIVE_TIME = 60 * 1000;
export const IDLE_TIME = 2 * 60 * 1000;


export const VIEW_RADIUS = 30000;

export const TWIG_WIDTH = 360;
export const TWIG_HEIGHT = 140;