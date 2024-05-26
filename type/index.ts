import { AssetList } from "@chain-registry/types";

export interface ChainOptionType {
  iconUrl: string;
  label: string;
  value: string;
}

export type Logo_URIs = { png: string; svg: string };
type Asset = AssetList["assets"][number];

export type AssetType = Pick<Asset, "name" | "symbol"> & {
  imgSrc: string;
  onDeposit?: () => void;
  onWithdraw?: () => void;
  tokenAmount: string;
  tokenAmountPrice: string;
};

export interface TemplateType {
  name: string;
  symbol: string;
  imgSrc: string;
}

export interface AssetListStoreType {
  assetList: AssetType[];
  addAssetList: (newList: TemplateType) => void;
}
