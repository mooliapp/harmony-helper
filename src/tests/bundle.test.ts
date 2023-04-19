import { createClient, getHrc20decimals } from '../../dist';

import { oneDecimals } from './constants';

describe('(BundleTests) Test utility functions', () => {
    it('Harmony client', () => {
        const client = createClient({
            endpoint: 'https://api.s0.t.hmny.io/',
        });

        expect(client).toBeDefined();
    });

    it('HRC20 decimals', async () => {
        const addresses = Object.keys(oneDecimals);

        await Promise.all(
            addresses.map(async address => {
                const decimals = await getHrc20decimals(address);
                expect(Number(decimals)).toEqual(oneDecimals[address].decimals);
            }),
        );
    });
});

export {};
