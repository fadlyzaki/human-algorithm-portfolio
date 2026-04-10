import { createBrowserRouter } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import ColorPage from "./pages/foundations/ColorPage";
import TypographyPage from "./pages/foundations/TypographyPage";
import SpacingPage from "./pages/foundations/SpacingPage";
import ElevationPage from "./pages/foundations/ElevationPage";
import GridPage from "./pages/foundations/GridPage";
import ButtonsPage from "./pages/components/ButtonsPage";
import FormsPage from "./pages/components/FormsPage";
import NavigationPage from "./pages/components/NavigationPage";
import FeedbackPage from "./pages/components/FeedbackPage";
import SelectionControlsPage from "./pages/components/SelectionControlsPage";
import DataDisplayPage from "./pages/components/DataDisplayPage";
import MiscPage from "./pages/components/MiscPage";
import PatternsPage from "./pages/PatternsPage";
import AccessibilityPage from "./pages/AccessibilityPage";
import ResourcesPage from "./pages/ResourcesPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "foundations/color", Component: ColorPage },
      { path: "foundations/typography", Component: TypographyPage },
      { path: "foundations/spacing", Component: SpacingPage },
      { path: "foundations/elevation", Component: ElevationPage },
      { path: "foundations/grid", Component: GridPage },
      { path: "components/buttons", Component: ButtonsPage },
      { path: "components/forms", Component: FormsPage },
      { path: "components/navigation", Component: NavigationPage },
      { path: "components/feedback", Component: FeedbackPage },
      { path: "components/selection-controls", Component: SelectionControlsPage },
      { path: "components/data-display", Component: DataDisplayPage },
      { path: "components/misc", Component: MiscPage },
      { path: "patterns", Component: PatternsPage },
      { path: "accessibility", Component: AccessibilityPage },
      { path: "resources", Component: ResourcesPage },
    ],
  },
]);
