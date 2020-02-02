import { Control } from './control';

fdescribe('Control Unit', () => {
    let control: Control = null;

    beforeAll(() => control = new Control());

    it('sets pc write', () => {
        control.pcWrite = '1';

        expect(control.pcWrite).toBe('1');
    });

    it('sets pc write cond', () => {
        control.pcWriteCond = '0';

        expect(control.pcWriteCond).toBe('0');
    });

    it('sets lorD', () => {
        control.lorD = '1';

        expect(control.lorD).toBe('1');
    });

    it('sets memRead and memWrite', () => {
        control.memRead = '1';
        control.memWrite = '0';

        expect(control.memRead).toBe('1');
        expect(control.memWrite).toBe('0');
    });

    it('sets irWrite', () => {
        control.irWrite = '1';

        expect(control.irWrite).toBe('1');
    });

    it('sets memToReg', () => {
        control.memToReg = '1';

        expect(control.memToReg).toBe('1');
    });

    it('sets pcSource', () => {
        control.pcSource = '0';

        expect(control.pcSource).toBe('0');
    });

    it('sets targetWrite', () => {
        control.targetWrite = '1';

        expect(control.targetWrite).toBe('1');
    });

    it('sets aluOp', () => {
        control.aluOp = '1';

        expect(control.aluOp).toBe('1');
    });
});
