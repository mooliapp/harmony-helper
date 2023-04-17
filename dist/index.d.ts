import { Harmony } from '@harmony-js/core';
import { ChainID, ChainType } from '@harmony-js/utils';
export { ChainID, ChainType };

/**
 * Create client for Harmony blockchain
 * @param param - net endpoint, chain type, chain id
 * @returns client object
 */
export declare function createClient({
    endpoint,
    type,
    id,
}: {
    endpoint: string;
    type: ChainType;
    id: ChainID;
}): Harmony;

/**
 * Client for Harmony main net
 */
export declare const harmonyMain: Harmony;

/**
 * Request decimals value for provided HRC20 contract address in Harmony blockchain
 * @param address - contract address
 * @param providedClient - Harmony client (optional, use main if not provided)
 * @returns decimals value
 */
export declare function getHrc20decimals(
    address: string,
    providedClient?: Harmony,
): Promise<string>;
