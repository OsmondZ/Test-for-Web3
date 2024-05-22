import { useMockData } from "@/hooks";
import { Avatar, Box, Combobox, Skeleton } from "@interchain-ui/react";
import Image from "next/image";
import React from "react";

const ChainOption = ({ iconUrl, label, value }: any) => (
  <div>
    <Image
    width={100}
    height={100}
      src={iconUrl}
      alt={label}
      style={{ width: "20px", marginRight: "8px" }}
    />
    {label}
  </div>
);
export default function MyComboBox() {
  const { isReady, comboboxAssets } = useMockData();
  const [selectedKey, setSelectedKey] = React.useState<React.Key>();
  const options = React.useMemo(
    () =>
      comboboxAssets.map((i) => ({
        iconUrl: i.iconUrl,
        label: i.tokenName,
        value: i.tokenName,
      })),
    [comboboxAssets, isReady]
  );
  if (!isReady) {
    return <div>Loading data...</div>;
  }
  const avatarUrl =
    options.find((i: any) => i.value === selectedKey)?.iconUrl ?? undefined;
  return (
    <Box display="flex" flexDirection="column" gap="$6">
      <Combobox
        label="Favorite Chain"
        size="md"
        openOnFocus
        onSelectionChange={(item) => {
          setSelectedKey(item ?? null);
        }}
        inputAddonStart={
          selectedKey && avatarUrl ? (
            <Avatar
              name={selectedKey as string}
              getInitials={(name) => name[0]}
              size="sm"
              src={avatarUrl}
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
        {options.map((option: any) => (
          <Combobox.Item key={option.value} textValue={option.value}>
            <ChainOption
              iconUrl={option.iconUrl}
              label={option.label}
              value={option.value}
            />
          </Combobox.Item>
        ))}
      </Combobox>
    </Box>
  );
}
