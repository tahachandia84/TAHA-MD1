import { describe, it, expect, vi, beforeEach } from 'vitest';

vi.mock('../../config.js', () => ({
    default: { ownerNumber: '8801309991724@s.whatsapp.net' }
}));

vi.mock('../../lib/index.js', () => ({
    isSudo: vi.fn(async () => false)
}));

describe('isOwnerOrSudo', () => {
    let isOwnerOrSudo, isOwnerOnly, cleanJid;

    beforeEach(async () => {
        vi.resetModules();
        const mod = await import('../../lib/isOwner.js');
        isOwnerOrSudo = mod.default;
        isOwnerOnly = mod.isOwnerOnly;
        cleanJid = mod.cleanJid;
    });

    it('owner JID matches', async () => {
        expect(await isOwnerOrSudo('8801309991724@s.whatsapp.net')).toBe(true);
    });

    it('owner with device suffix matches', async () => {
        expect(await isOwnerOrSudo('8801309991724:10@s.whatsapp.net')).toBe(true);
    });

    it('non-owner returns false', async () => {
        expect(await isOwnerOrSudo('911111111111@s.whatsapp.net')).toBe(false);
    });

    it('isOwnerOnly rejects sudo', async () => {
        expect(isOwnerOnly('911111111111@s.whatsapp.net')).toBe(false);
    });

    it('cleanJid strips device suffix', () => {
        expect(cleanJid('8801309991724:10@s.whatsapp.net')).toBe('8801309991724');
    });

    it('cleanJid strips @s.whatsapp.net', () => {
        expect(cleanJid('8801309991724@s.whatsapp.net')).toBe('8801309991724');
    });

    it('cleanJid handles empty string', () => {
        expect(cleanJid('')).toBe('');
    });
});
