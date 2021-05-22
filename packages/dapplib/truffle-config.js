require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess clock other sugar fan regret remind proud install hat army genre'; 
let testAccounts = [
"0xc15bc0c69dcc3cd394d3fc2f4d0456bedbd197e5d12299a4c4d11752d4b65a8e",
"0x5da34d8b545606082cebbfd4c98472efa1f22ab3accd5907a68f61c175415ad4",
"0xd85a7b24cbdd9b2fa95fc9561f8275686b1fcd76fae1440072a656592da1fa8f",
"0x080a88b1facd20b87a1fea6df660874f262277e2ff8ff03ca600a350732a1081",
"0xd1327cc90feb6884805ec58daa3e69d114fdd5dbec2b9f886b587213f8d7a725",
"0x14e8dce00ca33cb5c25103112f152dc525aa125f5547e4cd29985199c28c27fc",
"0x4115aa4bd7ba4cc76b5058e29aa88ba78353a64b93e588bc2b23504c7fc989f1",
"0x9a896fb6c769b15123b6732dbabcbd3c653647f1b1fe7d1ea088de4f84502e3e",
"0x59c558d9adea590e3dc3c6168bd39e587520cc691740839616a47178588caea2",
"0xb73c9493e3076f69a1a828b1d70bd4911eaf9f3c5626a908f3c825afc844d7ec"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
