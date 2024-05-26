import { Logo_URIs } from "@/type";

export const createCustomObjectArray = (data: any) =>
  data.map(
    ({
      name,
      symbol,
      logo_URIs,
    }: {
      name: string;
      symbol: string;
      logo_URIs: Logo_URIs;
    }) => ({
      onDeposit: () => {},
      onWithdraw: () => {},
      name,
      symbol,
      imgSrc: logo_URIs?.png || logo_URIs?.svg || logo_URIs,
      tokenAmount: "100",
      tokenAmountPrice: "100",
    })
  );
