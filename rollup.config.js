/**
 * Unused for solidity projects unless you need to test custom src files
 */
import { getRollupConfig } from '@cpuchain/rollup';

const config = [
    getRollupConfig({ input: './src/index.ts' }),
]

export default config;