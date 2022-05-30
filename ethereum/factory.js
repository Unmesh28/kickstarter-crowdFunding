import web3 from "./web3";
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xA924aBB896210ADd2449B85625D169d54acdc9AD'
);

export default instance;