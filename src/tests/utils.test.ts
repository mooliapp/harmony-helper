import { getHrc20decimals } from "..";

describe('(IntegrationTests) Test utility functions', () => {
    it('HRC20 decimals', async () => {
        const decimals1 = await getHrc20decimals('0x985458e523db3d53125813ed68c274899e9dfab4');
        expect(decimals1).toEqual('6');

        const decimals2 = await getHrc20decimals('0x0dc78c79b4eb080ead5c1d16559225a46b580694');
        expect(decimals2).toEqual('9');

        const decimals3 = await getHrc20decimals('0x3095c7557bcb296ccc6e363de01b760ba031f2d9');
        expect(decimals3).toEqual('8');
    });
});