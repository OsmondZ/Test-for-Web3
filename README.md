This is a Cosmos App project bootstrapped with [`create-cosmos-app`](https://github.com/cosmology-tech/create-cosmos-app).

## Getting Started

First, install the packages and run the development server:

```bash
yarn && yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

## Learn More 

## Deliverables

### UI Components

- [√] Integrate and render the asset-list component as shown in the [storybook](https://storybook.cosmology.zone/?path=/docs/asset-assetlist--docs) — which should display the asset list.
- [√] Implement an "Add Asset" button that, when clicked, opens a modal or another UI element of your choice.
- [√] The modal (or popover or other) should render the ComboBox component, allowing the user to select an asset to add. Reference for the ComboBox implementation can be found in the [Cosmology Storybook](https://storybook.cosmology.zone/?path=/story/combobox--custom-combobox-item).
- [√] The `state.selectedChain`, e.g., `osmosis` should determine which set of assets can show up in the list of assets.
- [√] Upon selecting an asset from the ComboBox, the asset list should update to include the chosen asset. Likely should have a submit button to confirm.
- [√] When the deposit button is clicked, open a modal as follows(Static component. No need to add functionalities):
![deposit](./deposit.png)
- [ ] Not required, but if that was simple for you, consider adding the following: A layout, a menu, or some organization

#### Notes

- Using `Styled Component` only. Don't use any UI Kit.
- `Theme` is optional.

### Business Logic

- [√] Add a state management library of your choice (e.g., Zustand, MobX).
- [√] Create a store that can `addAssetList`. Use `Chain` and `AssetList` types from the `@chain-registry/types`, and data from `chain-registry`.
— [√] Add a small set, 2-5 random assets from `chain-registry`. Choose a default chain, such as `"osmosis"`, and store it as something like `state.selectedChain`.
- [√] Implement a configurable data source adapter to support multiple data sources. Implement two data source providers as follows, and then config to use one of these potential data sources when starting the demo:
  - chain-registry
  - @chain-registry/client




