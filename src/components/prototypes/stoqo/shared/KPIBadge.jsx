import React from "react";
import { THEME } from "../../../../constants/stoqoTheme";

const KPIBadge = () => (
  <span
    className="text-[10px] px-2 py-0.5 rounded-full font-bold ml-2 text-yellow-800"
    style={{ backgroundColor: THEME.colors.kpiYellow }}
  >
    KPI
  </span>
);

export default KPIBadge;
