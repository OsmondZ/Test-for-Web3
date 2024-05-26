import { assets } from "chain-registry";

export const comboBoxAssets= assets.find(({ chain_name }) => chain_name === "osmosis")?.assets;
