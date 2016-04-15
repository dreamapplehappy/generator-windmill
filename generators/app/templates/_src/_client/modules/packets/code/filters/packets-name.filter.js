'use strict';

function packetsNameFilter() {
    return function(input) {
        let output = '';
        if('coupon' === input) {
            output = '优惠券';
        }
        else if('red_packet' === input) {
            output = '红包';
        }
        return output;
    }
}

function packetsAccountNameFilter() {
    return function(input) {
        let output = '';
        if('coupon' === input) {
            output = '张';
        }
        else if('red_packet' === input) {
            output = '个';
        }
        return output;
    }
}

function packetsHrefFilter() {
    return function(input) {
        let output = '';
        if('coupon' === input) {
            output = 'packets-coupon';
        }
        else if('red_packet' === input) {
            output = 'packets-red-packet';
        }
        return output;
    }
}

export default angular
    .module('packets.packets-name.filter', [])
    .filter('packetsNameFilter', packetsNameFilter)
    .filter('packetsAccountNameFilter', packetsAccountNameFilter)
    .filter('packetsHrefFilter', packetsHrefFilter);