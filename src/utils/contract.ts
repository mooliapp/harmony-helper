import type Web3 from 'web3';
import { AbiItem } from 'web3-utils';

import { harmonyMain } from '../client';

import { isBech32Address, fromBech32 } from './address';

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

    // web3 works with canonical addresses only
    const addr = isBech32Address(address) ? fromBech32(address) : address;

    const contract = new client.eth.Contract(abi, addr);

    return contract.methods.decimals().call();
}
