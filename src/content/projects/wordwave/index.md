---
title: WordWave
description: Gesture-driven, music-backed vocabulary explorer built with React, Three.js, Magenta, and computer vision.
date: 2025-12-11
draft: false
demoURL: https://word-wave-five.vercel.app
repoURL: https://github.com/jiayi33c/WordWave
---

## Overview

<img src="/images/wordwave.png" alt="WordWave demo" width="200" height="auto" style="margin-bottom: 1rem;">

WordWave (built during the Cursor hackathon) is an interactive learning experience where kids grab floating words with hand gestures and hear them sung back in real time. A 3D world rendered with Three.js reacts to gestures, music, and Elevenlab AI voice assistant.

## Key Features

- **Gesture control**: MediaPipe Hands + webcam to detect pinches/OK signs for selecting and triggering playback.
- **3D visuals**: Three.js with @react-three/fiber/drei renders sky scenes, word clouds, and props.
- **Music generation**: tone.js transport with @magenta/music melodies aligned to beats and syllables.
- **Voice + AI agent**: ElevenLabs TTS and Conversational AI for “Hey Lulu” explanations in kid-friendly language.
- **Semantics on tap**: Color-coded synonyms/opposites to explore vocabulary and emotions.

## Tech Stack

- **Frontend**: React + Vite, Three.js, @react-three/fiber, @react-three/drei.
- **Audio/AI**: tone.js, @magenta/music, ElevenLabs TTS/Conversational AI.
- **CV/Gestures**: MediaPipe Hands via react-webcam.
- **Backend/Infra**: Convex functions to keep keys server-side; deployed on Vercel.

## Created By

- Van Nguyen: https://github.com/Lightningwave
- Chen Jiayi: https://github.com/jiayi33c

## Try It Out

- Live demo: https://word-wave-five.vercel.app

