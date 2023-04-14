import type { Harmony } from '@harmony-js/core';

import { harmonyMain } from '../client';

/**
 * Request decimals value for provided HRC20 contract address in Harmony blockchain
 * @param address - contract address
 * @param providedClient - Harmony client (optional, use main if not provided)
 * @returns decimals value
 */
export async function getHrc20decimals(address: string, providedClient?: Harmony): Promise<string> {
    const client = providedClient ?? harmonyMain;

    const abi = [
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

    const contract = client.contracts.createContract(abi, address);

    return contract.methods.decimals().call();
}
