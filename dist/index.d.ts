import Web3 from 'web3';

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
}): Web3;

/**
 * Client for Harmony main net
 */
export declare const harmonyMain: Web3;

/**
 * Request decimals value for provided HRC20 contract address in Harmony blockchain
 * @param address - contract address
 * @param providedClient - Harmony client (optional, use main if not provided)
 * @returns decimals value
 */
export declare function getHrc20decimals(
    address: string,
    providedClient?: Web3,
): Promise<string>;
