export type FiltersItem = {
  id: string;
  name: string;
  svg: string;
  checked: boolean;
  text: string;
}

export const CheckboxesFiltersItems: FiltersItem[] = [
  {
    id: "ac",
    name: "ac",
    text: "AC",
    svg: "wind",
    checked: false,
  },
  {
    id: "automatic",
    name: "automatic",
    text: "Automatic",
    svg: "automatic",
    checked: false,
  },
  {
    id: "kitchen",
    name: "kitchen",
    text: "Kitchen",
    svg: "kitchen",
    checked: false,
  },
  {
    id: "tv",
    name: "tv",
    text: "TV",
    svg: "tv",
    checked: false,
  },
  {
    id: "shower",
    name: "shower",
    text: "Shower/WC",
    svg: "shower",
    checked: false,
  },
];

export const RadioFiltersItems: FiltersItem[] = [
  {
    id: "panelTruck",
    name: "form",
    text: "Van",
    svg: "van",
    checked: false,
  },
  {
    id: "fullyIntegrated",
    name: "form",
    text: "Fully Integrated",
    svg: "fully_integrated",
    checked: false,
  },
  {
    id: "alcove",
    name: "form",
    text: "Alcove",
    svg: "alcove",
    checked: false,
  },
];
