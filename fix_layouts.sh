#!/bin/bash

# BentoDetail
sed -i '' 's/const BentoDetail = ({ project, activeContext, activeChallenge, activeProcess, activeInsights, activeMetrics, activeLearnings, InteractionComponent, activeTitle, activeTldr, activeSnapshot }) => {/const BentoDetail = ({ project, activeChallenge, activeProcess, activeMetrics, activeLearnings, InteractionComponent, activeTitle, activeTldr, activeSnapshot }) => {/g' src/components/project-layouts/BentoDetail.jsx

# BlueprintDetail
sed -i '' 's/const BlueprintDetail = ({ project, activeContext, activeChallenge, activeProcess, activeInsights, activeMetrics, activeLearnings, InteractionComponent, activeTitle, activeTldr, activeSnapshot }) => {/const BlueprintDetail = ({ project, activeContext, activeChallenge, activeProcess, activeInsights, activeMetrics, activeLearnings, InteractionComponent, activeTitle, activeTldr }) => {/g' src/components/project-layouts/BlueprintDetail.jsx

# BrutalistDetail
sed -i '' 's/const BrutalistDetail = ({ project, activeContext, activeChallenge, activeProcess, activeInsights, activeMetrics, activeLearnings, InteractionComponent, activeTitle, activeTldr, activeSnapshot }) => {/const BrutalistDetail = ({ project, activeContext, activeChallenge, activeProcess, activeInsights, activeMetrics, activeLearnings, InteractionComponent, activeTitle, activeTldr, activeSnapshot }) => {/g' src/components/project-layouts/BrutalistDetail.jsx

# CosmicPopDetail
sed -i '' 's/const CosmicPopDetail = ({ project, activeContext, activeChallenge, activeProcess, activeInsights, activeMetrics, activeLearnings, InteractionComponent, activeTitle, activeTldr, activeSnapshot }) => {/const CosmicPopDetail = ({ project, activeChallenge, activeProcess, activeInsights, activeMetrics, activeLearnings, InteractionComponent, activeTitle, activeTldr, activeSnapshot }) => {/g' src/components/project-layouts/CosmicPopDetail.jsx

# PrototypeDetail
sed -i '' 's/const PrototypeDetail = ({ project, activeContext, activeChallenge, activeProcess, activeInsights, activeMetrics, activeLearnings, InteractionComponent, showLivePreview, setShowLivePreview, t, isIndonesian, activeTitle, activeTldr, activeSnapshot }) => {/const PrototypeDetail = ({ project, activeContext, activeChallenge, activeProcess, activeInsights, activeMetrics, activeLearnings, InteractionComponent, activeTitle, activeTldr }) => {/g' src/components/project-layouts/PrototypeDetail.jsx

# SystemCoreDetail
sed -i '' 's/const SystemCoreDetail = ({ project, activeContext, activeChallenge, activeProcess, activeInsights, activeMetrics, activeLearnings, InteractionComponent, activeTitle, activeTldr, activeSnapshot }) => {/const SystemCoreDetail = ({ project, activeContext, activeChallenge, activeProcess, activeInsights, activeMetrics, activeLearnings, InteractionComponent, activeTitle, activeTldr, activeSnapshot }) => {/g' src/components/project-layouts/SystemCoreDetail.jsx
