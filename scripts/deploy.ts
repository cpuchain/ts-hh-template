import { type Signer } from 'ethers';
import { getSigners } from 'ethers-opt/hardhat/fixtures';
import { Lock__factory } from '../typechain-types/index.js';
import { Logger } from '@cpuchain/logger';

const JAN_1ST_2030 = 1893456000;

const logger = new Logger();

async function deploy() {
    const [owner] = await getSigners();

    const Lock = await new Lock__factory(owner as unknown as Signer).deploy(JAN_1ST_2030);

    await Lock.waitForDeployment();

    logger.debug(`Deployed Lock ${Lock.target}`);
}

deploy();
