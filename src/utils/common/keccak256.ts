// Source: Harmony One SDK
// https://github.com/harmony-one/sdk/blob/master/packages/harmony-crypto/src/keccak256.ts

import * as sha3 from 'js-sha3';

import { arrayify, Arrayish } from './bytes';

export function keccak256(data: Arrayish): string {
    const arrayified = arrayify(data);
    if (arrayified) {
        return `0x${sha3.keccak_256(arrayified)}`;
    }
    throw new Error('arrayify failed');
}
