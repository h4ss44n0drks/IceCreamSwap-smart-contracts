export const bridgeConfig = {
  bridgeAdmin: "0xe020582E77b5aA9e471e1A127906476242d12cb7",
  relayers: ["0xe4B30ce8D7Fd3A546D8a2a785D7D6108cCD1D683", "0x79f0939bf2E1bD0a9b526BE1A5462976b03a1278"],
  relayerThreshold: 1,
  baseFeeDolla: 1,
  tokenFeePercent: 0.5,
  bridgedTokens: [
    {
      symbol: "ICE",
      name: "IceCream",
      resourceId: "0x0000000000000000000000B999Ea90607a826A3E6E6646B404c3C7d11fa39D02",
    },
    {
      symbol: "USDT",
      name: "Tether USD",
      resourceId: "0x0000000000000000000000C7E6d7E08A89209F02af47965337714153c529F001",
    },
    {
      symbol: "BNB",
      name: "Binance Token",
      resourceId: "0x0000000000000000000000bb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c01",
    },
    {
      symbol: "ETH",
      name: "Ether",
      resourceId: "0x00000000000000000000002170Ed0880ac9A755fd29B2688956BD959F933F801",
    },
  ],
} as const;

export const dexConfig = {
  dexAdmin: "0x0075C169d8887F902cF881fEdC26AD0EbC7c8c19",
} as const;

export const farmConfig = {
  farmAdmin: "0x0075C169d8887F902cF881fEdC26AD0EbC7c8c19",
  iceTreasury: "0x0075C169d8887F902cF881fEdC26AD0EbC7c8c19",
} as const;
