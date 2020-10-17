import { css } from 'styled-components';

// default
const PADDING_VALUE = 4;

// nesting css
export const TA_CENTER = css`
  text-align: center;
`;

// padding
export const PT = `${PADDING_VALUE}px`;
export const PL = `${PADDING_VALUE}px`;
export const PR = `${PADDING_VALUE}px`;
export const PB = `${PADDING_VALUE}px`;
export const P = `${PADDING_VALUE}px`;

// font
export const HEADER_FONT_SIZE = '24px';
export const HEADER_FONT_COLOR = '#5f6368';

// function
export const bit_p = (shift) => `${PADDING_VALUE << shift}px`; // 8, 16, 32, 64, 128, ...
export const multi_p = (multiple) => `${multiple * PADDING_VALUE}px`; // 4, 8, 12, 16, ...
