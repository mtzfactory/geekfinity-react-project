import React from 'react';

const dayIcons = {
    chanceFlurries      : <ul><li className="basecloud"></li><li className="icon-windy"></li></ul>,
    chanceRain          : <ul><li className="basecloud"></li><li className="icon-rainy"></li></ul>,
    chancesLeet         : <ul><li className="basecloud"></li><li className="icon-sleet"></li></ul>,
    chanceSnow          : <ul><li className="basecloud"></li><li className="icon-snowy"></li></ul>,
    chanceTStorms       : <ul><li className="basethundercloud"></li><li className="icon-thunder"></li></ul>,
    clear               : <ul><li className="icon-sun"></li></ul>,
    cloudy              : <ul><li className="icon-cloud"></li></ul>,
    flurries            : <ul><li className="basecloud"></li><li className="icon-windy"></li></ul>,
    fog                 : <ul><li className="icon-mist"></li></ul>,
    hazy                : <ul><li className="icon-cloud"></li></ul>,
    mostlyCloudy        : <ul><li className="basecloud"></li><li className="icon-sunny"></li></ul>,
    mostlySunny         : <ul><li className="basecloud"></li><li className="icon-sunny"></li></ul>,
    partlyCloudy        : <ul><li className="basecloud"></li><li className="icon-sunny"></li></ul>,
    partlySunny         : <ul><li className="basecloud"></li><li className="icon-sunny"></li></ul>,
    sleet               : <ul><li className="basecloud"></li><li className="icon-sleet"></li></ul>,
    rain                : <ul><li className="basecloud"></li><li className="icon-rainy"></li></ul>,
    snow                : <ul><li className="basecloud"></li><li className="icon-snowy"></li></ul>,
    sunny               : <ul><li className="icon-sun"></li></ul>,
    tStorms             : <ul><li className="basethundercloud"></li><li className="icon-thunder"></li></ul>,
}

const nightIcons = {
    nt_chanceFlurries  : <ul><li className="basecloud"></li><li className="icon-windy"></li></ul>,
    nt_chanceRain      : <ul><li className="basecloud"></li><li className="icon-rainy"></li></ul>,
    nt_chanceSleet     : <ul><li className="basecloud"></li><li className="icon-sleet"></li></ul>,
    nt_chanceSnow      : <ul><li className="basecloud"></li><li className="icon-snowy"></li></ul>,
    nt_chanceTStorms   : <ul><li className="basethundercloud"></li><li className="icon-thunder"></li></ul>,
    nt_clear           : <ul><li className="icon-moon"></li></ul>,
    nt_cloudy          : <ul><li className="icon-cloud"></li></ul>,
    nt_flurries        : <ul><li className="basecloud"></li><li className="icon-windy"></li></ul>,
    nt_fog             : <ul><li className="icon-mist"></li></ul>,
    nt_hazy            : <ul><li className="icon-cloud"></li></ul>,
    nt_mostlyCloudy    : <ul><li className="basecloud"></li><li className="icon-night"></li></ul>,
    nt_mostlySunny     : <ul><li className="basecloud"></li><li className="icon-night"></li></ul>,
    nt_partlyCloudy    : <ul><li className="basecloud"></li><li className="icon-night"></li></ul>,
    nt_partlySunny     : <ul><li className="basecloud"></li><li className="icon-night"></li></ul>,
    nt_sleet           : <ul><li className="basecloud"></li><li className="icon-sleet"></li></ul>,
    nt_rain            : <ul><li className="basecloud"></li><li className="icon-rainy"></li></ul>,
    nt_snow            : <ul><li className="basecloud"></li><li className="icon-snowy"></li></ul>,
    nt_sunny           : <ul><li className="icon-moon"></li></ul>,
    nt_tStorms         : <ul><li className="basethundercloud"></li><li className="icon-thunder"></li></ul>,
}

const defaultIcon = <span>¿¿??</span>

export { dayIcons, nightIcons, defaultIcon }