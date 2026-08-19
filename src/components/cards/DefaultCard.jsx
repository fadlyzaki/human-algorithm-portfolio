import React from "react";
import Container from "./Container";
import AiryDiagram from "../AiryDiagram";
import OptimizedImage from "../OptimizedImage";

const DefaultCard = ({ type, expanded, image, showChrome, backgroundOnly, isId }) => (
  <Container
    expanded={expanded}
    showChrome={showChrome}
    backgroundOnly={backgroundOnly}
    schematicType={isId ? "DIAGRAM_SISTEM" : "SYSTEM_DIAGRAM"}
  >
    {image && image.startsWith("airy:") ? (
      <div className="w-full h-full p-8 flex items-center justify-center">
        <AiryDiagram type={image.split(":")[1]} />
      </div>
    ) : image ? (
      <OptimizedImage src={image} alt={type} className="w-full h-full object-cover" />
    ) : (
      <div className="w-full h-full flex items-center justify-center">
        <AiryDiagram type="default" />
      </div>
    )}
  </Container>
);

export default DefaultCard;
