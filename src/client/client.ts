/* eslint-disable import/no-extraneous-dependencies */
import { Harmony } from '@harmony-js/core';
import { ChainID, ChainType } from '@harmony-js/utils';

export { ChainID, ChainType };

/**
 * Create client for Harmony blockchain
 * @param param - net endpoint, chain type, chain id
 * @returns client object
 */
export function createClient({
    endpoint,
    type,
    id,
}: {
    endpoint: string;
    type: ChainType;
    id: ChainID;
}): Harmony {
    return new Harmony(endpoint, {
        chainType: type,
        chainId: id,
    });
}

/**
 * Client for Harmony main net
 */
export const harmonyMain = createClient({
    endpoint: 'https://api.s0.t.hmny.io/',
    type: ChainType.Harmony,
    id: ChainID.HmyMainnet,
});
