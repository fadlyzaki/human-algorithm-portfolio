import React, { useState } from "react";
import { motion } from "framer-motion";
import StickyNote from "../StickyNote";

const RandomStickyNotes = ({ t }) => {
  const [positions] = useState(() =>
    Array.from({ length: 4 }, (_, i) => {
      const zoneHeight = 100 / 4;
      const zoneStart = i * zoneHeight;

      return {
        top: `${zoneStart + Math.random() * (zoneHeight - 10) + 5}%`,
        left: `${Math.random() * 70 + 5}%`,
        rotate: Math.random() * 20 - 10,
      };
    }),
  );

  const notes = [
    { text: t("home.sticky_note"), color: "text-[var(--accent-blue)]" },
    { text: t("home.sticky_note_2"), color: "text-[var(--accent-amber)]" },
    { text: t("home.sticky_note_3"), color: "text-[var(--accent-green)]" },
    { text: t("home.sticky_note_4"), color: "text-[var(--accent-purple)]" },
  ].map((note, i) => ({ ...note, ...positions[i], id: i }));

  if (notes.length === 0) return null;

  return (
    <div className="absolute inset-0 pointer-events-none z-30">
      {notes.map((note) => (
        <motion.div
          key={note.id}
          drag
          dragMomentum={false}
          initial={{ opacity: 0, scale: 0.8, rotate: note.rotate }}
          animate={{ opacity: 1, scale: 1, rotate: note.rotate }}
          whileHover={{ scale: 1.05, zIndex: 40 }}
          whileDrag={{ scale: 1.1, zIndex: 50 }}
          style={{
            position: "absolute",
            top: note.top,
            left: note.left,
            pointerEvents: "auto",
            cursor: "grab",
          }}
          className="max-w-[200px] md:max-w-[250px]"
        >
          <StickyNote
            text={note.text}
            color={note.color}
            className="mt-0 shadow-2xl !max-w-none"
            rotate="" // Handled by motion.div
          />
        </motion.div>
      ))}
    </div>
  );
};

export default RandomStickyNotes;
