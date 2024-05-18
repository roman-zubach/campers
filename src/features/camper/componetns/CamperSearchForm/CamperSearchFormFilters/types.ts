export type FiltersItem = {
  id: string;
  name: string;
  svg: string;
  checked: boolean;
}

export const CheckboxesFiltersItems: FiltersItem[] = [
  {
    id: "ac",
    name: "AC",
    svg: "wind",
    checked: false,
  },
  {
    id: "automatic",
    name: "Automatic",
    svg: "automatic",
    checked: false,
  },
  {
    id: "kitchen",
    name: "Kitchen",
    svg: "kitchen",
    checked: false,
  },
  {
    id: "tv",
    name: "TV",
    svg: "tv",
    checked: false,
  },
  {
    id: "shower",
    name: "Shower/WC",
    svg: "shower",
    checked: false,
  },
];

export const RadioFiltersItems: FiltersItem[] = [
  {
    id: "van",
    name: "Van",
    svg: "van",
    checked: false,
  },
  {
    id: "fully_integrated",
    name: "Fully Integrated",
    svg: "fully_integrated",
    checked: false,
  },
  {
    id: "alcove",
    name: "Alcove",
    svg: "alcove",
    checked: false,
  },
];
