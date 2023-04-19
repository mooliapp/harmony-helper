import type Web3 from 'web3';
import { AbiItem } from 'web3-utils';

import { harmonyMain } from '../client';

/**
 * Request decimals value for provided HRC20 contract address in Harmony blockchain
 * @param address - contract address
 * @param providedClient - Harmony client (optional, use main if not provided)
 * @returns decimals value
 */
export async function getHrc20decimals(address: string, providedClient?: Web3): Promise<string> {
    const client = providedClient ?? harmonyMain;

    const abi: AbiItem[] = [
        {
            constant: true,
            inputs: [],
            name: 'decimals',
            outputs: [{ internalType: 'uint8', name: '', type: 'uint8' }],
            payable: false,
            stateMutability: 'view',
            type: 'function',
        },
    ];

    const contract = new client.eth.Contract(abi, address);

    return contract.methods.decimals().call();
}
