import { CLICK_UPDATE_VALUE, TICK_CLOCK, UP_TIME, DOWN_TIME } from './actionTypes';

export const clickButton = value => ({
    type: CLICK_UPDATE_VALUE,
    newValue: value
});

export const tickClock = value => ({
    type: TICK_CLOCK,
    time: value
});

export const upTime = () => ({
    type: UP_TIME
});

export const downTime = () => ({
    type: DOWN_TIME
});