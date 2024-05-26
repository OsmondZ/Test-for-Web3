/* eslint-disable @next/next/no-img-element */
import { comboBoxAssets } from "@/mock";
import { useAssetListStore } from "@/store";
import { ChainOptionType, TemplateType } from "@/type";
import { Avatar, Box, Button, Combobox, Skeleton } from "@interchain-ui/react";
import React, { Key, useState } from "react";

const ChainOption = ({ iconUrl, label, value }: ChainOptionType) => (
  <div style={{ display: "flex", alignItems: "center" }}>
    <img
      src={iconUrl}
      alt={label}
      style={{
        width: "30px",
        marginRight: "8px",
      }}
    />
    {value}
  </div>
);
export default function MyComboBox({ onClose }: { onClose: () => void }) {
  const [selectedKey, setSelectedKey] = useState<Key>();
  const addAssetList = useAssetListStore((state) => state.addAssetList);

  const options =
    comboBoxAssets?.map(({ name, logo_URIs, symbol }) => ({
      iconUrl: (logo_URIs?.png || logo_URIs?.svg)!,
      label: symbol,
      value: name,
    })) || [];

  const { iconUrl = "", label = "" } =
    options.find((i) => i.value === selectedKey) || {};

  const handleSubmit = () => {
    addAssetList({
      imgSrc: iconUrl,
      symbol: label,
      name: selectedKey as string,
    });
    onClose();
  };
  return (
    <Box display="flex" flexDirection="column" rowGap="$11">
      <Combobox
        label="Favorite Chain (only chainName = Osmosis)"
        size="md"
        openOnFocus
        onSelectionChange={(item) => {
          setSelectedKey(item ?? null);
        }}
        inputAddonStart={
          selectedKey && iconUrl ? (
            <Avatar
              name={selectedKey as string}
              getInitials={(name) => name[0]}
              size="sm"
              src={iconUrl}
              fallbackMode="bg"
              attributes={{
                paddingX: "$4",
              }}
            />
          ) : selectedKey ? (
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              px="$4"
            >
              <Skeleton width="24px" height="24px" borderRadius="$full" />
            </Box>
          ) : null
        }
        styleProps={{
          width: "350px",
        }}
      >
        {options.map(({ iconUrl, label, value }) => (
          <Combobox.Item key={value} textValue={value}>
            <ChainOption iconUrl={iconUrl} label={label} value={value} />
          </Combobox.Item>
        ))}
      </Combobox>
      <Button onClick={handleSubmit}>Submit</Button>
    </Box>
  );
}
