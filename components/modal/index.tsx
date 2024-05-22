import { BasicModal, Combobox } from "@interchain-ui/react";
import React from "react";
import MyComboBox from "../combobox";

export default function Modal({
  isOpen,
  title,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
  title: string;
}) {
  return (
    <BasicModal isOpen={isOpen} title={title} onClose={onClose}>
      <MyComboBox />
    </BasicModal>
  );
}
