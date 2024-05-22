import "../styles/globals.css";
import "@interchain-ui/react/styles";

import type { AppProps } from "next/app";
import {
  Box,
  ThemeProvider,
  useColorModeValue,
  useTheme,
  AssetList,
  Button,
} from "@interchain-ui/react";
import styled from "@emotion/styled";
import { useState } from "react";
import Modal from "@/components/modal";
import { list } from "@/mock";

function CreateCosmosApp() {
  const { themeClass } = useTheme();
  const [isModal, setIsModal] = useState(false);
  console.log(isModal);
  return (
    <ThemeProvider>
      <Box
        className={themeClass}
        minHeight="100dvh"
        backgroundColor={useColorModeValue("$white", "$background")}
      >
        <AssetList needChainSpace list={list} titles={["Asset", "Balance"]} />
        <Button onClick={() => setIsModal(true)}>Add Asset</Button>
        <Modal
          isOpen={isModal}
          title={"Add Asset"}
          onClose={() => setIsModal(false)}
        />
      </Box>
    </ThemeProvider>
  );
}

export default CreateCosmosApp;
