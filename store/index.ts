import { AssetListStoreType } from "@/type";
import { createCustomObjectArray } from "@/utils";
import { assets } from "chain-registry";
import { create } from "zustand";

const assetLists = createCustomObjectArray(
  assets.find(({ chain_name }) => chain_name === "kava")?.assets
);

export const useAssetListStore = create<AssetListStoreType>((set) => ({
  assetList: assetLists,

  addAssetList: ({ imgSrc, symbol, name }) => {
    const newList = createCustomObjectArray([
      { logo_URIs: imgSrc, name, symbol },
    ]);
    return set((state) => ({ assetList: [...state.assetList, ...newList] }));
  },
}));
