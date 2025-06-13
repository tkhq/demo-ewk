# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `pnpm run dev` - Start development server on port 3000
- `pnpm run build` - Build the application for production  
- `pnpm run start` - Start production server
- `pnpm run lint` - Run ESLint to check code quality
- `pnpm run typecheck` - Run TypeScript type checking with `tsc --noEmit`

## Project Architecture

This is a Next.js 14+ demo application showcasing Turnkey's Embedded Wallet Kit (@turnkey/sdk-react). The app demonstrates various authentication methods and wallet management features.

### Core Structure

**Authentication Flow:**
- Landing page (`src/app/page.tsx`) - Configurable auth component with drag-and-drop ordering
- Dashboard (`src/app/dashboard/page.tsx`) - User wallet management and account operations
- Uses client-side routing with `useRouter` from `next/navigation`

**Key Dependencies:**
- `@turnkey/sdk-react` - Main SDK for embedded wallet functionality
- `@turnkey/sdk-browser` & `@turnkey/sdk-server` - Core Turnkey SDKs
- `@turnkey/wallet-stamper` - Ethereum wallet integration
- Material-UI (`@mui/material`) - UI components
- `@hello-pangea/dnd` - Drag and drop for auth method ordering
- `ethers` & `@solana/web3.js` - Blockchain interactions

**Environment Requirements:**
- Node.js v18+
- Next.js v13+ (uses app directory structure)
- Environment variables in `.env.local` for Turnkey configuration:
  - `TURNKEY_API_PUBLIC_KEY` & `TURNKEY_API_PRIVATE_KEY`
  - `NEXT_PUBLIC_BASE_URL`, `NEXT_PUBLIC_ORGANIZATION_ID`
  - OAuth client IDs for Google, Apple, Facebook
  - Import/export iframe URLs

### Authentication Architecture

The app supports multiple authentication methods:
- Email/SMS OTP via Turnkey server functions
- Passkey authentication using WebAuthn
- OAuth providers (Google, Apple, Facebook) with custom OIDC flows
- Wallet import/export functionality

**State Management:**
- Uses `useTurnkey()` hook for session management
- IndexedDB client for local storage of user data and keys
- Session validation checks user token against public key

**OIDC Implementation:**
- Custom OAuth flows in `src/app/utils/oidc.ts`
- Popup-based authentication windows
- PKCE flow for Facebook, implicit flow for Google/Apple
- Nonce generation using SHA256 of user's public key

### Development Notes

**OAuth Testing:**
- Local development requires ngrok for OAuth redirect URIs
- Start ngrok with `ngrok http 3000` and update environment variables

**TypeScript Configuration:**
- Strict mode enabled with path aliases (`@/*` → `./src/*`)
- Uses React 18 types with Next.js plugin

**Styling:**
- CSS modules for component-specific styles
- Global styles in `src/app/index.css`
- Material-UI theming via `TurnkeyThemeProvider`

Run `pnpm run typecheck` and `pnpm run lint` before committing changes.