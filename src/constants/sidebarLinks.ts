import {
  ActivityIcon,
  HomeLineIcon,
  LayoutAlt02Icon,
  MarkerPin04Icon,
  PieChartIcon,
  Thermometer03Icon,
  Users01Icon
} from "../shared/lib/utils/iconsImporter";

export type SidebarLink = (typeof SIDEBAR_LINKS)[number];

export const SIDEBAR_LINKS = [
  {
    linkKey: "home",
    title: "Главная",
    href: "/",
    icon: HomeLineIcon
  },
  {
    linkKey: "devices",
    title: "Метеоустройства",
    href: "/devices",
    icon: MarkerPin04Icon
  },
  {
    linkKey: "monitoring",
    title: "Мониторинг",
    href: "/monitoring",
    icon: ActivityIcon
  },
  {
    linkKey: "reports",
    title: "Отчёты",
    href: "/reports",
    icon: PieChartIcon
  },
  {
    linkKey: "metrics",
    title: "Метрики",
    href: "/metrics",
    icon: Thermometer03Icon
  },
  {
    linkKey: "news",
    title: "Новости и док-ты",
    href: "/news",
    icon: LayoutAlt02Icon
  },
  {
    linkKey: "users",
    title: "Учётные записи",
    href: "/users",
    icon: Users01Icon,
    adminOnly: true
  }
] as const;
