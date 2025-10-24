---
title: SafeSplit
description: A secure file sharing and recovery system built with Go (Gin) backend and React frontend.
date: 2024-03-20
draft: false
demoURL: https://www.youtube.com/watch?v=0SLUr2ZKELU
repoURL: https://github.com/Lightningwave/safesplit
---

## Overview
![Safesplit Logo](/images/safesplit.png)
SafeSplit is a secure file sharing and recovery system that provides end-to-end encryption and advanced file management capabilities. Built with modern technologies, it ensures your files are protected while being easily accessible.

## Key Features

- 🔒 Secure file sharing with end-to-end encryption
- 📱 Mobile compatibility
- 🔑 JWT Authentication with password hashing
- 🔐 AES Encryption for files
- 🧩 Shamir secret sharing for encrypted key
- 📦 Reed-Solomon code for file splitting
- 🗜️ Zstd Compression
- ☁️ Distributed storage via Amazon S3 API
- 🔍 Two-factor authentication (2FA)
- 💳 Payment integration with PayPal Braintree

## Technical Stack

### Backend
- Go 1.16+
- Gin Web Framework
- GORM
- MySQL
- JWT Authentication

### Frontend
- React
- Tailwind CSS

## Security Features

- End-to-end encryption using AES
- Secure key distribution with Shamir's Secret Sharing
- File integrity protection with Reed-Solomon codes
- Two-factor authentication
- Secure password hashing
- JWT-based session management 