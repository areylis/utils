import { assert, it, describe } from 'vitest'
import {diff} from "./diff.mjs";

describe('', function() {
    it('diff should return an empty array when a1 and a2 are empty', () => {
        const a1: number[] = [];
        const a2: number[] = [];
        const result: number[] = diff(a1, a2);
        assert.deepEqual(result, []);
    });

    it('diff should return a1 when a2 is empty', () => {
        const a1: number[] = [1, 2, 3];
        const a2: number[] = [];
        const result: number[] = diff(a1, a2);
        assert.deepEqual(result,[1, 2, 3]);
    });

    it('diff should return a1 when a1 is empty', () => {
        const a1: number[] = [];
        const a2: number[] = [1, 2, 3];
        const result: number[] = diff(a1, a2);
        assert.deepEqual(result,[]);
    });

    it('diff should return elements in a1 that are not in a2', () => {
        const a1: number[] = [1, 2, 3];
        const a2: number[] = [2, 3, 4];
        const result: number[] = diff(a1, a2);
        assert.deepEqual(result,[1]);
    });

    it('diff should not modify a1 or a2', () => {
        const a1: number[] = [1, 2, 3];
        const a2: number[] = [2, 3, 4];
        diff(a1, a2);
        assert.deepEqual(a1,[1, 2, 3]);
        assert.deepEqual(a2,[2, 3, 4]);
    });
})
