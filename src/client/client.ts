import Web3 from 'web3';

/**
 * Create client for Ethereum compatible blockchain
 * @param param - net endpoint, chain type, chain id
 * @returns client object
 */
export function createClient({ endpoint }: { endpoint: string }): Web3 {
    return new Web3(endpoint);
}

/**
 * Client for Harmony main net
 */
export const harmonyMain = new Web3('https://api.s0.t.hmny.io/');
