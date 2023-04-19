import { createClient, getHrc20decimals } from '../../dist';

describe('(BundleTests) Test utility functions', () => {
    it('Harmony client', () => {
        const client = createClient({
            endpoint: 'https://api.s0.t.hmny.io/',
        });

        expect(client).toBeDefined();
    });

    it('HRC20 decimals', async () => {
        const decimals1 = await getHrc20decimals('0x985458e523db3d53125813ed68c274899e9dfab4');
        expect(decimals1).toEqual('6');

        const decimals2 = await getHrc20decimals('0x0dc78c79b4eb080ead5c1d16559225a46b580694');
        expect(decimals2).toEqual('9');

        const decimals3 = await getHrc20decimals('0x3095c7557bcb296ccc6e363de01b760ba031f2d9');
        expect(decimals3).toEqual('8');

        const decimals4 = await getHrc20decimals('0x22d62b19b7039333ad773b7185bb61294f3adc19');
        expect(decimals4).toEqual('18');

        const decimals5 = await getHrc20decimals('0x1449ab6c24dcf3dbc1971021f465af1b81f48f07');
        expect(decimals5).toEqual('18');
    });
});

export {};
