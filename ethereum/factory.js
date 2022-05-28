import web3 from "./web3";
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xd1C14cdd415B994Ba61C817957E53f9e13356280'
);

export default instance;