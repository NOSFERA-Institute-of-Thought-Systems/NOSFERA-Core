# NŌSFERA Cognitive OS - Core Implementation

This repository contains the core C++, WebAssembly, and React/Three.js source code for the NŌSFERA cognitive operating system. This is the practical, engineered embodiment of the theories developed in the *Principia Automatica* research program.

![NOSFERA Screenshot](link-to-a-cool-screenshot.png) <!-- You'll add this later -->

## Core Technologies

*   **Backend:** C++17, CMake
*   **Web Engine:** Emscripten (for WebAssembly compilation)
*   **Frontend:** React, Vite, Three.js (for 3D rendering), GLSL (for shaders)
*   **Database:** IndexedDB (via `dexie.js`) for local-first storage

## System Architecture

The system is composed of two primary components that communicate via a defined WebAssembly bridge:

1.  **`libCognito` (C++ Backend):** A high-performance engine responsible for all heavy computation, including semantic embedding analysis, Hamiltonian construction, and eigendecomposition. This is compiled to `libCognito.wasm`.
2.  **`nosfera-client` (React Frontend):** The user-facing application that handles all rendering, user interaction, and data visualization. It calls functions exposed by the WASM module and visualizes the results.

---

## Getting Started

### Prerequisites

Ensure you have the following installed on your macOS system:
*   Homebrew (`/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`)
*   Node.js (`brew install node`)
*   CMake (`brew install cmake`)
*   Emscripten (`brew install emscripten`)
*   A C++ compiler like Clang (usually installed with Xcode Command Line Tools)

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Archon-Initiative/NOSFERA-Core.git
    cd NOSFERA-Core
    ```

2.  **Build the C++ Backend (libCognito to WASM):**
    ```bash
    # (Instructions for your CMake build process will go here)
    # Example:
    mkdir build
    cd build
    emcmake cmake ..
    make
    ```

3.  **Install Frontend Dependencies:**
    ```bash
    cd ../nosfera-client 
    npm install
    ```

4.  **Run the Development Server:**
    ```bash
    npm run dev
    ```
    The application should now be running at `http://localhost:5173`.

---

## Project Structure
.
├── libCognito/ # C++ source for the core engine
├── nosfera-client/ # React/Vite/Three.js frontend source
├── build/ # Compiled WASM output (ignored by git)
└── ...
