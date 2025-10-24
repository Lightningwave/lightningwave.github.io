---
title: HashLab
description: A client-side cryptographic toolkit built with React and Rust/WebAssembly. All operations run locally in your browser - no data ever leaves your device.
date: 2024-12-01
draft: false
demoURL: https://lightningwave.github.io/hashlab
repoURL: https://github.com/Lightningwave/hashlab
---

## Overview

<img src="/images/hashlab.png" alt="HashLab Logo" width="200" height="auto" style="margin-bottom: 1rem;">

HashLab is a comprehensive client-side cryptographic toolkit that provides encryption, hashing, encoding/decoding, and steganography capabilities. Built with React and Rust/WebAssembly, all operations run locally in your browser ensuring complete privacy - no data ever leaves your device.

## Key Features

### 🔐 Encryption
- **AES** (128/192/256-bit) - CBC, ECB, CTR modes
- **DES/3DES** - CBC, ECB, CTR modes (legacy, educational only)
- **ChaCha20** - Modern stream cipher
- **RC4** - Legacy stream cipher (insecure, educational only)
- All encryption uses PBKDF2 key derivation with automatic IV/nonce handling

### 🔒 Hashing
- **MD5** (legacy)
- **SHA-1** (legacy)
- **SHA-2** (SHA-256, SHA-512)
- **SHA-3** (SHA3-256)
- **Keccak-256**
- **BLAKE2b** (512-bit)
- **BLAKE3**

### 🔄 Encoding/Decoding
- **Base64** encode/decode
- **Hex** encode/decode
- **URL** encode/decode
- **ASCII ↔ Hex** converter

### 🖼️ Steganography
- **Image Steganography** - Hide encrypted messages in PNG images
- **LSB Technique** - Uses Least Significant Bit steganography
- **AES-256-GCM Encryption** - Messages encrypted before hiding
- **Drag & Drop Interface**
- **Invisible Modifications** - Output looks identical to original

## Technical Stack

### Frontend
- React + Vite
- Custom lightweight router using History API
- Inline styles, no frameworks
- MVC Pattern architecture

### Backend
- Rust compiled to WebAssembly
- Pure Rust implementations of crypto algorithms
- No external crypto libraries (except standard crates)

## Security Features

- **Complete Privacy** - All operations run locally in browser
- **PBKDF2 Key Derivation** - Secure key generation from passphrases
- **Automatic IV/Nonce Handling** - Proper cryptographic practices
- **AES-256-GCM Encryption** - For steganography messages
- **Educational Focus** - Designed for learning cryptography concepts

## Architecture

### Frontend (MVC Pattern)
- **Views**: React components (pages, widgets)
- **Controllers**: Custom hooks (state management, business logic)
- **Models**: Services that interface with WASM

### Backend (Rust/WASM)
- Pure Rust implementations of crypto algorithms
- Compiled to WebAssembly for browser execution
- Modular design with separate modules for crypto, hash, encoding, and steganography

## Project Structure

```
hashlab/
├── frontend/                # React application
│   ├── src/
│   │   ├── views/          # UI components (pages, widgets)
│   │   ├── controllers/    # React hooks (business logic)
│   │   ├── models/         # Services (WASM interface)
│   │   └── router/         # Custom client-side router
│   └── package.json
│
├── rust-wasm/              # Rust crypto implementations
│   ├── src/
│   │   ├── crypto/        # Encryption algorithms
│   │   ├── hash/          # Hashing algorithms
│   │   ├── encoding/      # Encoding/decoding
│   │   └── steganography/ # Image steganography
│   └── Cargo.toml
│
└── pkg/                    # Compiled WASM output
```

## Security Notes

⚠️ **Educational Purpose**: This project is designed for learning cryptography concepts. While it uses standard algorithms correctly:

- Not audited by security professionals
- Use production-grade libraries for real applications
- Some algorithms (MD5, SHA-1, DES, RC4) are legacy/insecure
- Always use modern algorithms (AES-256, SHA-256+, ChaCha20) in production

✅ **Privacy**: All operations run in your browser. No data is sent to any server.

## Technologies Used

- **Frontend**: React, Vite, JavaScript
- **Backend**: Rust, WebAssembly
- **Crypto Libraries**: aes, sha2, sha3, blake2, blake3, des, chacha20, pbkdf2, aes-gcm, image
- **Build Tools**: wasm-pack, npm
