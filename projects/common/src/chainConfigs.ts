const chainConfigs = {
  hardhat: {
    chainId: -1,
    url: "",
    explorer: "",
    explorerApi: null,
    explorerApiKey: null,
    ice: "0x0000000000000000000000000000000000000321",
    bridgeDomainId: 200,
    oneDollarInNative: "500000000000000000",
    weth: "0x0000000000000000000000000000000000000123",
  },
  bsc: {
    chainId: 56,
    url: "https://bsc-dataseed.binance.org",
    explorer: "https://bscscan.com",
    explorerApi: "https://api.bscscan.com/api",
    explorerApiKey: process.env.EXPLORER_API_KEY_BSC,
    ice: "0xce6c9c70f91c6797873EFC80505f972290A88f5D",
    bridgeDomainId: 1,
    oneDollarInNative: "1800000000000000",
    weth: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
  },
  core: {
    chainId: 1116,
    url: "https://rpc-core.icecreamswap.com",
    explorer: "https://scan.coredao.org",
    explorerApi: "https://openapi.coredao.org/api",
    explorerApiKey: process.env.EXPLORER_API_KEY_CORE,
    ice: "0xc0E49f8C615d3d4c245970F6Dc528E4A47d69a44",
    bridgeDomainId: 7,
    oneDollarInNative: "2000000000000000000",
    weth: "0xb0788B601C0D712702bc829B52771199ad8E33Ff",
  },
  xdc: {
    chainId: 50,
    url: "https://rpc.ankr.com/xdc",
    explorer: "",
    explorerApi: null,
    explorerApiKey: null, // XDC block explorer seems to have no etherscan compatible API
    ice: "0x54051D9DbE99687867090d95fe15C3D3E35512Ba",
    bridgeDomainId: 6,
    oneDollarInNative: "25000000000000000000",
    weth: "0x951857744785E80e2De051c32EE7b25f9c458C42",
  },
  shimmer: {
    chainId: 148,
    url: "https://json-rpc.evm.shimmer.network",
    explorer: "https://explorer.evm.shimmer.network",
    explorerApi: "https://explorer.evm.shimmer.network/api",
    explorerApiKey: "NoKeyRequired",
    ice: "0x40375C92d9FAf44d2f9db9Bd9ba41a3317a2404f",
    bridgeDomainId: 11,
    oneDollarInNative: "40000000000000000000",
    weth: "0xBEb654A116aeEf764988DF0C6B4bf67CC869D01b",
  },
  scroll: {
    chainId: 534352,
    url: "https://rpc-scroll.icecreamswap.com",
    explorer: "https://scrollscan.com/",
    explorerApi: "https://api.scrollscan.com/api",
    explorerApiKey: process.env.EXPLORER_API_KEY_SCROLL,
    ice: "0x40375C92d9FAf44d2f9db9Bd9ba41a3317a2404f",
    bridgeDomainId: 12,
    oneDollarInNative: "250000000000000",
    weth: "0x5300000000000000000000000000000000000004",
  },
  telos: {
    chainId: 40,
    url: "https://mainnet.telos.net/evm",
    explorer: "",
    explorerApi: null,
    explorerApiKey: null, // does not seem to have etherscan compatible API
    ice: "0xB25cB6a275a8D6a613228FB161eB3627b50EB696",
    bridgeDomainId: 9,
    oneDollarInNative: "5000000000000000000",
    weth: "0xDC2393dc10734BF153153038943a5deB42b209cd",
  },
  bitgert: {
    chainId: 32520,
    url: "https://rpc.icecreamswap.com",
    explorer: "https://brisescan.com",
    explorerApi: "https://brisescan.com/api",
    explorerApiKey: "NoKeyRequired",
    ice: "0xB999Ea90607a826A3E6E6646B404c3C7d11fa39D",
    bridgeDomainId: 2,
    oneDollarInNative: "10000000000000000000000000",
    weth: "0x0eb9036cbE0f052386f36170c6b07eF0a0E3f710",
  },
  base: {
    chainId: 8453,
    url: "https://developer-access-mainnet.base.org",
    explorer: "https://basescan.org",
    explorerApi: "https://api.basescan.org/api",
    explorerApiKey: process.env.EXPLORER_API_KEY_BASE,
    ice: "0x40375C92d9FAf44d2f9db9Bd9ba41a3317a2404f",
    bridgeDomainId: 10,
    oneDollarInNative: "250000000000000",
    weth: "0x4200000000000000000000000000000000000006",
  },
  doge: {
    chainId: 2000,
    url: "https://rpc.dogechain.dog",
    explorer: "",
    explorerApi: null,
    explorerApiKey: process.env.EXPLORER_API_KEY_DOGE,
    ice: "0x81bCEa03678D1CEF4830942227720D542Aa15817",
    bridgeDomainId: 3,
    oneDollarInNative: "12500000000000000000",
    weth: "0xB7ddC6414bf4F5515b52D8BdD69973Ae205ff101",
  },
  fuse: {
    chainId: 122,
    url: "https://rpc.fuse.io",
    explorer: "",
    explorerApi: null,
    explorerApiKey: process.env.EXPLORER_API_KEY_FUSE,
    ice: "0x867f08A3ab824b42e8058a1B48e32E1dF205b092",
    bridgeDomainId: 5,
    oneDollarInNative: "20000000000000000000",
    weth: "0x0BE9e53fd7EDaC9F859882AfdDa116645287C629",
  },
  xodex: {
    chainId: 2415,
    url: "https://xo-dex.io",
    explorer: "",
    explorerApi: null,
    explorerApiKey: process.env.EXPLORER_API_KEY_XODEX,
    ice: "0x81bCEa03678D1CEF4830942227720D542Aa15817",
    bridgeDomainId: 8,
    oneDollarInNative: "10000000000000000000000",
    weth: "0x2F3AD0cdC8AD20337eb02bD6411b808EE30c7896",
  },
  /*
  doken: {
    chainId: 61916,
    url: "https://nyrpc.doken.dev",
    explorer: "",
    explorerApi: null,
    explorerApiKey: process.env.EXPLORER_API_KEY_DOKEN,
    ice: '0x54051D9DbE99687867090d95fe15C3D3E35512Ba',
    bridgeDomainId: 4,
    oneDollarInNative: "10000000000000000000000",
    weth: "0x27b45bCC26e01Ed50B4080A405D1c492FEe89d63",
  },
  */
  neon: {
    chainId: 245022934,
    url: "https://neon-proxy-mainnet.solana.p2p.org",
    explorer: "https://neonscan.org",
    explorerApi: "https://api.neonscan.org/hardhat/verify",
    explorerApiKey: "NoKeyRequired",
    ice: "0x40375C92d9FAf44d2f9db9Bd9ba41a3317a2404f",
    bridgeDomainId: 13,
    oneDollarInNative: "800000000000000000",
    weth: "0x202C35e517Fa803B537565c40F0a6965D7204609",
  },
  shardeumTestnet: {
    chainId: 8082,
    url: "https://sphinx.shardeum.org",
    explorer: "",
    explorerApi: null,
    explorerApiKey: process.env.EXPLORER_API_KEY_SHARDEUM_TESTNET,
    ice: "0xb5C7882e37359572FD1cCFAA276e7Fdf70145D42",
    bridgeDomainId: -1,
    oneDollarInNative: "-1",
    weth: "0x5eB65C6feC23d4eb36bC9966aA110Fe13FBd7c7F",
  },
  qitmeer: {
    chainId: 813,
    url: "https://mainnet.meerlabs.com",
    explorer: "https://qng.qitmeer.io",
    explorerApi: "https://qng.qitmeer.io/api",
    explorerApiKey: "NoKeyRequired",
    bridgeDomainId: 14,
    oneDollarInNative: "15000000000000000000",
    weth: "0x470cBFB236860eb5257bBF78715FB5bd77119C2F",
  },
  blast: {
    chainId: 81457,
    url: "https://blast.blockpi.network/v1/rpc/public",
    explorer: "https://blastscan.io/",
    explorerApi: "https://api.blastscan.io/api",
    explorerApiKey: process.env.EXPLORER_API_KEY_BLAST,
    bridgeDomainId: 15,
    oneDollarInNative: "250000000000000",
    weth: "0x4300000000000000000000000000000000000004",
  },
  boba_eth: {
    chainId: 288,
    url: "https://mainnet.boba.network",
    explorer: "https://bobascan.com",
    explorerApi: "https://api.routescan.io/v2/network/mainnet/evm/1/etherscan/api",
    explorerApiKey: "YourApiKeyToken",
    bridgeDomainId: 16,
    oneDollarInNative: "250000000000000",
    weth: "0xDeadDeAddeAddEAddeadDEaDDEAdDeaDDeAD0000",
  },
  degen: {
    chainId: 666666666,
    url: "https://rpc.degen.tips",
    explorer: "https://explorer.degen.tips",
    explorerApi: "https://explorer.degen.tips/api",
    explorerApiKey: "NoKeyRequired",
    bridgeDomainId: 17,
    oneDollarInNative: "20000000000000000000",
    weth: "0xEb54dACB4C2ccb64F8074eceEa33b5eBb38E5387",
  },
  arbitrum: {
    chainId: 42161,
    url: "https://arbitrum.drpc.org",
    explorer: "https://arbiscan.io",
    explorerApi: "https://api.arbiscan.io/api",
    explorerApiKey: process.env.EXPLORER_API_KEY_ARBITRUM,
    bridgeDomainId: -1,
    oneDollarInNative: "340000000000000",
    weth: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
  },
  optimism: {
    chainId: 10,
    url: "https://mainnet.optimism.io",
    explorer: "https://optimistic.etherscan.io",
    explorerApi: "https://api-optimistic.etherscan.io/api",
    explorerApiKey: process.env.EXPLORER_API_KEY_OPTIMISM,
    bridgeDomainId: -1,
    oneDollarInNative: "340000000000000",
    weth: "0x4200000000000000000000000000000000000006",
  },
  linea: {
    chainId: 59144,
    url: "https://linea.decubate.com",
    explorer: "https://lineascan.build",
    explorerApi: "https://api.lineascan.build/api",
    explorerApiKey: process.env.EXPLORER_API_KEY_LINEA,
    bridgeDomainId: -1,
    oneDollarInNative: "340000000000000",
    weth: "0xe5D7C2a44FfDDf6b295A15c148167daaAf5Cf34f",
  },
  polygon: {
    chainId: 137,
    url: "https://polygon.rpc.blxrbdn.com",
    explorer: "https://polygonscan.com",
    explorerApi: "https://api.polygonscan.com/api",
    explorerApiKey: process.env.EXPLORER_API_KEY_POLYGON,
    bridgeDomainId: -1,
    oneDollarInNative: "1600000000000000000",
    weth: "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270",
  },
  fantom: {
    chainId: 250,
    url: "https://rpcapi.fantom.network",
    explorer: "https://ftmscan.com",
    explorerApi: "https://api.ftmscan.com/api",
    explorerApiKey: process.env.EXPLORER_API_KEY_FANTOM,
    bridgeDomainId: -1,
    oneDollarInNative: "1600000000000000000",
    weth: "0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83",
  },
  moonbeam: {
    chainId: 1284,
    url: "https://rpc.api.moonbeam.network",
    explorer: "https://moonbeam.moonscan.io",
    explorerApi: "https://api-moonbeam.moonscan.io/api",
    explorerApiKey: process.env.EXPLORER_API_KEY_MOONBEAM,
    bridgeDomainId: -1,
    oneDollarInNative: "3000000000000000000",
    weth: "0xAcc15dC74880C9944775448304B263D191c6077F",
  },
  mantle: {
    chainId: 5000,
    url: "https://rpc.ankr.com/mantle",
    explorer: "https://explorer.mantle.xyz",
    explorerApi: "https://explorer.mantle.xyz/api",
    explorerApiKey: "NoKeyRequired",
    bridgeDomainId: -1,
    oneDollarInNative: "900000000000000000",
    weth: "0x78c1b0C915c4FAA5FffA6CAbf0219DA63d7f4cb8",
  },
  celo: {
    chainId: 42220,
    url: "https://forno.celo.org",
    explorer: "https://celoscan.io",
    explorerApi: "https://api.celoscan.io/api",
    explorerApiKey: process.env.EXPLORER_API_KEY_CELO,
    bridgeDomainId: -1,
    oneDollarInNative: "1300000000000000000",
    weth: "0x471EcE3750Da237f93B8E339c536989b8978a438",
  },
  avalanche: {
    chainId: 43114,
    url: "https://avalanche.drpc.org",
    explorer: "https://snowtrace.io",
    explorerApi: "https://api.routescan.io/v2/network/mainnet/evm/43114/etherscan/api",
    explorerApiKey: "NoKeyRequired",
    bridgeDomainId: -1,
    oneDollarInNative: "28700000000000000",
    weth: "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7",
  },
  kroma: {
    chainId: 255,
    url: "https://1rpc.io/kroma",
    explorer: "https://kromascan.com",
    explorerApi: "https://api.kromascan.com/api",
    explorerApiKey: process.env.EXPLORER_API_KEY_KROMA,
    bridgeDomainId: -1,
    oneDollarInNative: "340000000000000",
    weth: "0x4200000000000000000000000000000000000001",
  },
  mode: {
    chainId: 34443,
    url: "https://1rpc.io/mode",
    explorer: "https://explorer.mode.network",
    explorerApi: "https://explorer.mode.network/api",
    explorerApiKey: "NoKeyRequired",
    bridgeDomainId: -1,
    oneDollarInNative: "340000000000000",
    weth: "0x4200000000000000000000000000000000000006",
  },
  moonriver: {
    chainId: 1285,
    url: "https://moonriver-rpc.dwellir.com",
    explorer: "https://moonriver.moonscan.io",
    explorerApi: "https://api-moonriver.moonscan.io/api",
    explorerApiKey: process.env.EXPLORER_API_KEY_MOONRIVER,
    bridgeDomainId: -1,
    oneDollarInNative: "73583284916763056",
    weth: "0x98878B06940aE243284CA214f92Bb71a2b032B8A",
  },
  metis : {
    chainId: 1088,
    url: "https://andromeda.metis.io/?owner=1088",
    explorer: "https://andromeda-explorer.metis.io",
    explorerApi: "https://andromeda-explorer.metis.io/api",
    explorerApiKey: "NoKeyRequired",
    bridgeDomainId: -1,
    oneDollarInNative: "14595344085236800",
    weth: "0x75cb093e4d61d2a2e65d8e0bbb01de8d89b53481",
  },
  xlayer: {
    chainId: 196,
    url: "https://xlayerrpc.okx.com",
    explorer: "https://www.oklink.com/xlayer",
    explorerApi: "https://www.oklink.com/api/v5/explorer/contract/verify-source-code-plugin/XLAYER",
    explorerApiKey: "NoKeyRequired",
    bridgeDomainId: -1,
    oneDollarInNative: "18460400000000000",
    weth: "0xe538905cf8410324e03a5a23c1c177a474d59b2b",
  },

} as const;

export default chainConfigs;
