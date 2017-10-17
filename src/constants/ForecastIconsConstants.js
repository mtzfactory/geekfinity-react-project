import React from 'react';

const dayIcons = {
    chanceFlurries      : <ul><li class="basecloud"></li><li class="icon-windy"></li></ul>,
    chanceRain          : <ul><li class="basecloud"></li><li class="icon-rainy"></li></ul>,
    chancesLeet         : <ul><li class="basecloud"></li><li class="icon-sleet"></li></ul>,
    chanceSnow          : <ul><li class="basecloud"></li><li class="icon-snowy"></li></ul>,
    chanceTStorms       : <ul><li class="basethundercloud"></li><li class="icon-thunder"></li></ul>,
    clear               : <ul><li class="icon-sun"></li></ul>,
    cloudy              : <ul><li class="icon-cloud"></li></ul>,
    flurries            : <ul><li class="basecloud"></li><li class="icon-windy"></li></ul>,
    fog                 : <ul><li class="icon-mist"></li></ul>,
    hazy                : <ul><li class="icon-cloud"></li></ul>,
    mostlyCloudy        : <ul><li class="basecloud"></li><li class="icon-sunny"></li></ul>,
    mostlySunny         : <ul><li class="basecloud"></li><li class="icon-sunny"></li></ul>,
    partlyCloudy        : <ul><li class="basecloud"></li><li class="icon-sunny"></li></ul>,
    partlySunny         : <ul><li class="basecloud"></li><li class="icon-sunny"></li></ul>,
    sleet               : <ul><li class="basecloud"></li><li class="icon-sleet"></li></ul>,
    rain                : <ul><li class="basecloud"></li><li class="icon-rainy"></li></ul>,
    snow                : <ul><li class="basecloud"></li><li class="icon-snowy"></li></ul>,
    sunny               : <ul><li class="icon-sun"></li></ul>,
    tStorms             : <ul><li class="basethundercloud"></li><li class="icon-thunder"></li></ul>,
}

const nightIcons = {
    nt_chanceFlurries  : <ul><li class="basecloud"></li><li class="icon-windy"></li></ul>,
    nt_chanceRain      : <ul><li class="basecloud"></li><li class="icon-rainy"></li></ul>,
    nt_chanceSleet     : <ul><li class="basecloud"></li><li class="icon-sleet"></li></ul>,
    nt_chanceSnow      : <ul><li class="basecloud"></li><li class="icon-snowy"></li></ul>,
    nt_chanceTStorms   : <ul><li class="basethundercloud"></li><li class="icon-thunder"></li></ul>,
    nt_clear           : <ul><li class="icon-moon"></li></ul>,
    nt_cloudy          : <ul><li class="icon-cloud"></li></ul>,
    nt_flurries        : <ul><li class="basecloud"></li><li class="icon-windy"></li></ul>,
    nt_fog             : <ul><li class="icon-mist"></li></ul>,
    nt_hazy            : <ul><li class="icon-cloud"></li></ul>,
    nt_mostlyCloudy    : <ul><li class="basecloud"></li><li class="icon-night"></li></ul>,
    nt_mostlySunny     : <ul><li class="basecloud"></li><li class="icon-night"></li></ul>,
    nt_partlyCloudy    : <ul><li class="basecloud"></li><li class="icon-night"></li></ul>,
    nt_partlySunny     : <ul><li class="basecloud"></li><li class="icon-night"></li></ul>,
    nt_sleet           : <ul><li class="basecloud"></li><li class="icon-sleet"></li></ul>,
    nt_rain            : <ul><li class="basecloud"></li><li class="icon-rainy"></li></ul>,
    nt_snow            : <ul><li class="basecloud"></li><li class="icon-snowy"></li></ul>,
    nt_sunny           : <ul><li class="icon-moon"></li></ul>,
    nt_tStorms         : <ul><li class="basethundercloud"></li><li class="icon-thunder"></li></ul>,
}

const defaultIcon = <span>¿¿??</span>

export { dayIcons, nightIcons, defaultIcon }