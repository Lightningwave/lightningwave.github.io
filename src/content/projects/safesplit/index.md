---
title: SafeSplit
description: A secure file sharing and recovery system built with Go (Gin) backend and React frontend.
date: 2024-03-20
draft: false
demoURL: https://www.youtube.com/watch?v=0SLUr2ZKELU
repoURL: https://github.com/Lightningwave/safesplit
---

## Overview

<img src="/images/safesplit-logo.png" alt="SafeSplit Logo" width="200" height="auto" style="margin-bottom: 1rem;">

SafeSplit is a secure file sharing and recovery system that provides end-to-end encryption and advanced file management capabilities. Built with modern technologies, it ensures your files are protected while being easily accessible.

## Key Features

### 🔒 Security & Encryption
- **End-to-end encryption** using AES
- **Shamir's Secret Sharing** for encrypted key distribution
- **Reed-Solomon codes** for file integrity protection
- **Two-factor authentication (2FA)**
- **JWT Authentication** with secure password hashing

### 📁 File Management
- **Secure file sharing** with advanced access controls
- **File splitting** with Reed-Solomon error correction
- **Zstd Compression** for efficient storage
- **Distributed storage** via Amazon S3 API
- **Mobile compatibility** for cross-platform access

### 💳 Business Features
- **Payment integration** with PayPal Braintree
- **User management** and access controls
- **Session management** with JWT tokens

## Technical Stack

### Backend
- **Go 1.16+** - High-performance server language
- **Gin Web Framework** - Fast HTTP web framework
- **GORM** - Object-relational mapping
- **MySQL** - Reliable database storage
- **JWT Authentication** - Secure session management

### Frontend
- **React** - Modern UI framework
- **Tailwind CSS** - Utility-first styling

## Architecture

### Backend (Go/Gin)
- RESTful API design
- Microservices architecture
- Secure file processing pipeline
- Database abstraction layer

### Frontend (React)
- Component-based architecture
- Responsive design
- State management with hooks
- Modern UI/UX patterns

## Security Features

- **Complete Privacy** - End-to-end encryption ensures data security
- **Key Distribution** - Shamir's Secret Sharing for secure key management
- **File Integrity** - Reed-Solomon codes prevent data corruption
- **Authentication** - Multi-factor authentication system
- **Session Security** - JWT-based secure session management 