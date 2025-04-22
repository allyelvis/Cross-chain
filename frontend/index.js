await window.ethereum.request({
  method: 'wallet_watchAsset',
  params: {
    type: 'ERC20',
    options: {
      address: '0xYourTokenAddress',
      symbol: 'AZT',
      decimals: 18,
    },
  },
});
