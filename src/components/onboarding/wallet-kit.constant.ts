import {
	FREIGHTER_ID,
	StellarWalletsKit,
	WalletNetwork,
	allowAllModules,
} from "@creit.tech/stellar-wallets-kit";

export const kit: StellarWalletsKit = new StellarWalletsKit({
	network: WalletNetwork.TESTNET,
	selectedWalletId: FREIGHTER_ID,
	modules: allowAllModules(),
});