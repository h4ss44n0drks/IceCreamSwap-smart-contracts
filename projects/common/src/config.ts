export const chainConfigs = {
  bsc: {
    ice: "0xce6c9c70f91c6797873EFC80505f972290A88f5D",
    bridgeDomainId: 1,
    oneDollarInNative: 2500000000000000,
  },
  core: {
    WNATIVE: "0xb0788B601C0D712702bc829B52771199ad8E33Ff",
    ice: "0xc0E49f8C615d3d4c245970F6Dc528E4A47d69a44",
    bridgeDomainId: 7,
    oneDollarInNative: 2000000000000000000,
  },
  xdc: {
    WNATIVE: "0x951857744785E80e2De051c32EE7b25f9c458C42",
    ice: "0x54051D9DbE99687867090d95fe15C3D3E35512Ba",
    bridgeDomainId: 6,
    oneDollarInNative: 25000000000000000000,
  },
  shimmer: {
    WNATIVE: "0xBEb654A116aeEf764988DF0C6B4bf67CC869D01b",
    ice: "0x40375C92d9FAf44d2f9db9Bd9ba41a3317a2404f",
    bridgeDomainId: 11,
    oneDollarInNative: 40000000000000000000,
  },
  scroll: {
    WNATIVE: "0x5300000000000000000000000000000000000004",
    ice: "0x40375C92d9FAf44d2f9db9Bd9ba41a3317a2404f",
    bridgeDomainId: 12,
    oneDollarInNative: 250000000000000,
  },
  telos: {
    WNATIVE: "0xDC2393dc10734BF153153038943a5deB42b209cd",
    ice: "0xB25cB6a275a8D6a613228FB161eB3627b50EB696",
    bridgeDomainId: 9,
    oneDollarInNative: 5000000000000000000,
  },
  bitgert: {
    WNATIVE: "0x0eb9036cbE0f052386f36170c6b07eF0a0E3f710",
    ice: "0xB999Ea90607a826A3E6E6646B404c3C7d11fa39D",
    bridgeDomainId: 2,
    oneDollarInNative: 10000000000000000000000000,
  },
  base: {
    WNATIVE: "0x4200000000000000000000000000000000000006",
    ice: "0x40375C92d9FAf44d2f9db9Bd9ba41a3317a2404f",
    bridgeDomainId: 10,
    oneDollarInNative: 250000000000000,
  },
  doge: {
    WNATIVE: "0xB7ddC6414bf4F5515b52D8BdD69973Ae205ff101",
    ice: "0x81bCEa03678D1CEF4830942227720D542Aa15817",
    bridgeDomainId: 3,
    oneDollarInNative: 12500000000000000000,
  },
  fuse: {
    WNATIVE: "0x0BE9e53fd7EDaC9F859882AfdDa116645287C629",
    ice: "0x867f08A3ab824b42e8058a1B48e32E1dF205b092",
    bridgeDomainId: 5,
    oneDollarInNative: 20000000000000000000,
  },
  xodex: {
    WNATIVE: "0x2F3AD0cdC8AD20337eb02bD6411b808EE30c7896",
    ice: "0x81bCEa03678D1CEF4830942227720D542Aa15817",
    bridgeDomainId: 8,
    oneDollarInNative: 10000000000000000000000,
  },
  /*
  doken: {
    WNATIVE: '0x27b45bCC26e01Ed50B4080A405D1c492FEe89d63',
    ice: '0x54051D9DbE99687867090d95fe15C3D3E35512Ba',
    bridgeDomainId: 4,
    oneDollarInNative: 10000000000000000000000,
  },
  */
  neon: {
    WNATIVE: "0x202C35e517Fa803B537565c40F0a6965D7204609",
    ice: "0x40375C92d9FAf44d2f9db9Bd9ba41a3317a2404f",
    bridgeDomainId: 13,
    oneDollarInNative: 800000000000000000,
  },
  shardeum_testnet: {
    WNATIVE: "0x5eB65C6feC23d4eb36bC9966aA110Fe13FBd7c7F",
    ice: "0xb5C7882e37359572FD1cCFAA276e7Fdf70145D42",
    bridgeDomainId: null,
    oneDollarInNative: null,
  },
  hardhat: {
    WNATIVE: "0x0000000000000000000000000000000000000123",
    ice: "0x0000000000000000000000000000000000000321",
    bridgeDomainId: 200,
    oneDollarInNative: 500000000000000000,
  },
} as const;

export const bridgeConfig = {
  relayers: ["0xe4B30ce8D7Fd3A546D8a2a785D7D6108cCD1D683", "0x79f0939bf2E1bD0a9b526BE1A5462976b03a1278"],
  relayerThreshold: 1,
  baseFeeDolla: 1,
  tokenFeePercent: 0.5,
} as const;
