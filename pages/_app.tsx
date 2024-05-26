import "../styles/globals.css";
import "@interchain-ui/react/styles";

import { Box, ThemeProvider, AssetList, Button } from "@interchain-ui/react";
import { useState } from "react";
import { Modal, DepositModal } from "@/components/";
import { useAssetListStore } from "@/store";
import { AssetType } from "@/type";

function CreateCosmosApp() {
  const [isModal, setIsModal] = useState(false);
  const [isOnDeposit, setIsOnDepositModal] = useState(false);
  const assetList = useAssetListStore((state) => state.assetList);

  assetList.forEach((asset: AssetType) => {
    asset.onDeposit = () => {
      setIsOnDepositModal(true);
    };
  });

  return (
    <ThemeProvider>
      <Box padding="20px" display="flex" flexDirection="column" rowGap="15px">
        <AssetList
          needChainSpace
          list={assetList}
          titles={["Asset", "Balance"]}
        />

        <Box alignSelf="flex-end">
          <Button onClick={() => setIsModal(true)}>Add Asset</Button>
        </Box>
        <Modal
          isOpen={isModal}
          title={"Add Asset"}
          onClose={() => setIsModal(false)}
        />
        <DepositModal
          isOpen={isOnDeposit}
          onClose={() => setIsOnDepositModal(false)}
        />
      </Box>
    </ThemeProvider>
  );
}

export default CreateCosmosApp;
