import React from "react";
import { BookOpen } from "lucide-react";
import Container from "./Container";
import SkeletonLine from "../ui/SkeletonLine";

const SKELETON_ITEMS = [1, 2, 3, 4];

const InteractiveWorkbookCard = ({ expanded, showChrome }) => (
  <Container
    expanded={expanded}
    showChrome={showChrome}
    figIndex="4.0"
    schematicType="PEDAGOGICAL_STRUCTURE"
  >
    <div className="w-full h-full p-10 grid grid-cols-2 gap-4">
      {SKELETON_ITEMS.map((i) => {
        const isEven = i % 2 === 0;
        return (
        <div
          key={i}
          className={`p-4 bg-white dark:bg-white/5 border ${isEven ? "border-[var(--brand)]/30 shadow-md" : "border-slate-100 dark:border-white/10"} rounded-xl flex flex-col gap-3 group/item`}
        >
          <div className="flex justify-between items-center">
            <BookOpen
              size={14}
              className={isEven ? "text-[var(--brand)]" : "text-slate-200"}
            />
            <div
              className={`w-3 h-3 rounded-full ${isEven ? "bg-[var(--brand)]" : "bg-slate-100"}`}
            ></div>
          </div>
          <SkeletonLine width="80%" opacity={0.1} />
        </div>
      )})}
    </div>
  </Container>
);

export default InteractiveWorkbookCard;
