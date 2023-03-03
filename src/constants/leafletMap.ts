// map geojson osmId to District name
import {
  FitBoundsOptions,
  LatLngBoundsExpression,
  LatLngExpression
} from "leaflet";

export const tomskDistrictMap = {
  333018: "Каргасокский район",
  1314035: "Парабельский район",
  274192: "Верхнекетский район",
  333020: "Александровский район",
  1311340: "Бакчарский район",
  1311339: "Колпашевский район",
  270287: "Первомайский район",
  274189: "Тегульдетский район",
  274205: "Томский район",
  1311343: "Молчановский район",
  1311342: "Чаинский район",
  274203: "Асиновский район",
  274193: "Зырянский район",
  1311345: "Кривошеинский район",
  1311351: "Шегарский район",
  1311352: "Кожевниковский район",
  2168100: "Кедровый район",
  1891607: "Стрежевой район"
} as const;

export const reverseTomskDistrictMap = {
  "Каргасокский район": 333018,
  "Парабельский район": 1314035,
  "Верхнекетский район": 274192,
  "Александровский район": 333020,
  "Бакчарский район": 1311340,
  "Колпашевский район": 1311339,
  "Первомайский район": 270287,
  "Тегульдетский район": 274189,
  "Томский район": 274205,
  "Молчановский район": 1311343,
  "Чаинский район": 1311342,
  "Асиновский район": 274203,
  "Зырянский район": 274193,
  "Кривошеинский район": 1311345,
  "Шегарский район": 1311351,
  "Кожевниковский район": 1311352,
  "Кедровый район": 2168100,
  "Стрежевой район": 1891607
} as const;

export const DISTRICTS = Object.values(tomskDistrictMap);

export const DEFAULT_DISTRICT_COLOR = "#3f84cc";

export const TOMSK_REGION_BOUNDS: LatLngBoundsExpression = [
  [55.328288078276415, 70.96982940138915], // Southwest coordinates
  [62.28343008350373, 95.38138784886502] // Northeast coordinates
];

export const DEFAULT_CENTER: LatLngExpression = {
  lng: 84.66064453125001,
  lat: 56.791853873960605
};

export const DEFAULT_ZOOM: number = 6;

export const MAX_BOUNDS: LatLngBoundsExpression = [
  [-68.65655498475736, -102.65625000000001], // Southwest coordinates
  [84.60784045604665, 189.49218750000003] // Northeast coordinates
];

export const DEFAULT_DEVICE_PADDING: Pick<
  FitBoundsOptions,
  "paddingTopLeft" | "paddingBottomRight"
> = {
  paddingTopLeft: [200, 250],
  paddingBottomRight: [200, 200]
};

export const DEFAULT_PADDING_BOUNDS: Pick<
  FitBoundsOptions,
  "paddingTopLeft" | "paddingBottomRight"
> = {
  paddingTopLeft: [0, 100]
};

export const RIGHT_PADDING_BOUNDS: Pick<
  FitBoundsOptions,
  "paddingTopLeft" | "paddingBottomRight"
> = {
  ...DEFAULT_PADDING_BOUNDS,
  paddingBottomRight: [400, 0]
};
