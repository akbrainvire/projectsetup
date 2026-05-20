# UP DCS (Next.js)

Single-package Next.js 16 + TypeScript App Router app. Shared infrastructure lives under `src/` (there is no separate `lib-utils` package and no `@repo/*` workspace imports).

## Requirements

- Node.js 20.9+

## Commands

| Command | Purpose |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run start` | Production server |
| `npm run lint` | ESLint |
| `npm run typecheck` | `tsc --noEmit` |

Copy `.env.example` to `.env.local` and set variables as needed.

## Environment variables

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_API_BASE_URL` | API origin for `ApiCaller` in `src/utility/agent.ts`. Example: `https://api.example.com/` |
| `NEXT_PUBLIC_APP_URL` | Optional app URL; read with `process.env.NEXT_PUBLIC_APP_URL` where needed |
| `SECRET_KEY` | AES secret for `cookieAgent` (`src/utility/cookies.ts`). Defaults to a placeholder when unset (not for production) |

## Typography (dual-font system)

Fonts load via **Google Fonts `@import`** in `src/styles/globals.css` (not `next/font`). Import that file once from `src/app/layout.tsx` so families are available before styled-components render.

| Role | Family | Weights | Use |
| --- | --- | --- | --- |
| **Primary (UI)** | Noto Sans + **Noto Sans Arabic** | 300, 400, 500, 700 | Body, forms, labels, nav, tables, Ant Design controls |
| **Secondary (display)** | Noto Serif + **Noto Serif Arabic** | 400, 500, 700 | Headings, hero titles, title bars, section titles |

English and Arabic share the same visual system: Latin glyphs use Noto Sans / Noto Serif; Arabic script uses the matching **Arabic** cuts in the same stack so RTL (`ar`) and LTR (`en`) look consistent without swapping families per locale.

**Tokens:** `src/styles/fonts.ts` exports `NotoSansFont` and `NotoSerifFont` (each has `className`, `style.fontFamily`, `variable`).

```tsx
import { NotoSansFont, NotoSerifFont } from "@/styles/fonts";

// UI / body (styled-components)
font-family: ${NotoSansFont.style.fontFamily};

// Headings / display
font-family: ${NotoSerifFont.style.fontFamily};

// Or utility classes from globals.css
className={NotoSansFont.className}
className={NotoSerifFont.className}
```

**Rules:** Do not hardcode `"Noto Sans"` in components—import from `@/styles/fonts`. Ant Design `ConfigProvider` uses `NotoSansFont.style.fontFamily` via `ANTD_THEME_CONFIG` in `utility/strings.ts`. Global `h1`–`h6` and `.ant-typography` headings use Noto Serif via `globals.css`.

## Folder map (`src/`)

**Global styles:** `src/styles/globals.css` — font `@import`, `:root` CSS variables, utility classes, resets (imported from `app/layout.tsx`).

| Path | Role |
| --- | --- |
| `app/` | App Router: `layout.tsx`, `page.tsx`, `providers.tsx`, `api/hello/route.ts`; **`env.d.ts`** augments `NodeJS.ProcessEnv` |
| `assets/` | Static assets (images, SVGs in `svg.tsx`) |
| `styles/` | **`globals.css`**, **`fonts.ts`** (Noto Sans / Noto Serif tokens) |
| `components/` | Shared UI (`components/common/`) and **page shells** (`components/layouts/`: **`PageShell`**, `DetailsLayout`, `ListingLayout`) |
| `hooks/` | Shared hooks (`useForm`, `form.utils`; avoid tiny state wrappers unless they earn their file) |
| `locales/` | `en`, `ar` `common.json` + `resources.ts`; `i18n.client.ts` re-exports root `i18n` |
| `redux/` | `store.ts` (`RootState`, `AppDispatch`, `AppThunk`), `slices/auth`, `slices/common` |
| `utils/` | Pure helpers |
| `utility/` | `agent.ts`, **`strings.ts`** (language codes, routes, i18n keys, colors, Ant Design theme config, storage/cookie keys), **`api-endpoints.ts`**, `cookies.ts`, `notify.ts`, `tokens.ts`, `index.ts`; **`axios.d.ts`** augments axios config (`_retry`) |
| `api/` | Thin domain modules that call `requests` from `utility/agent.ts` and **`API_END_POINTS`** from `utility/api-endpoints.ts` (e.g. `api/auth`) |
| `providers/` | `AntdProvider`, `StyledComponentsProvider` (uses **`STYLED_COMPONENTS_THEME`** from `utility/strings.ts`) |
| `i18n.ts` | i18next init, **`SUPPORTED_LANGUAGES`**, **`DEFAULT_LANGUAGE`**, namespaces, **`syncLanguageFromStorage`**, default export instance |
| `modules/exg/` | Demo: listing (`/exg`) and detail (`/exg/[id]`) using `ListingLayout` and `DetailsLayout` |

## Layout components

### `PageShell`

Single wrapper for most pages: **viewport** (muted canvas), **header** (pill bar with **UP-DCS**, links from `LAYOUT_NAV_LINKS`, **language** `Select`, **Contact**), **body** (`PageShellBody` — flex slot for page content), **footer** (i18n `layout.footer`, or pass `footer` to override; `null` clears the slot).

Use **`PageShell`** on the home route and inside **`ListingLayout`** / **`DetailsLayout`** so chrome stays consistent.

```tsx
import { PageShell } from "@/components/layouts/PageShell";

<PageShell>
  <YourMainContent />
</PageShell>
```

### `DetailsLayout`

Wraps content in **`PageShell`**, then an optional **title bar** (navy strip), and a **card-style** main area. Optional **`footer`** is forwarded to **`PageShell`** (omit for default line; pass `null` for an empty footer slot).

```tsx
import { DetailsLayout } from "@/components/layouts/DetailsLayout";

<DetailsLayout titleBar={<span>Masters / Item</span>}>
  <YourDetailBody />
</DetailsLayout>
```

Live route: **`/exg/[id]`** (`src/modules/exg/ExgDetailView.tsx`).

### `ListingLayout`

Built on **`PageShell`**. Optional **`titleBar`**, **toolbar** row (`filters`, `search`, `toolbarActions`), optional **`header`**, then **children** in a raised white **surface**. Optional **`footer`** is passed through to **`PageShell`**.

```tsx
import { ListingLayout } from "@/components/layouts/ListingLayout";

<ListingLayout
  titleBar={<span>Masters / List</span>}
  search={<Input.Search placeholder="Search…" />}
  toolbarActions={<Space><Button type="primary">Reset</Button></Space>}
  header={<Typography.Title level={4}>Title</Typography.Title>}
>
  <Table columns={columns} dataSource={rows} rowKey="id" />
</ListingLayout>
```

Live route: **`/exg`** (`src/modules/exg/ExgListView.tsx`).

Shared layout tokens live in **`src/components/layouts/sharedShell.ts`**. Global chrome is **`src/components/layouts/PageShell/`** (`index.tsx`, `styles.ts`). Shared language options for the header `Select` live in **`src/hooks/useLanguageSelectOptions.ts`**.

## HTTP client (`src/utility/agent.ts`)

One module exports **`API_BASE_URL`**, the authenticated **`ApiCaller`** `axios` instance (Bearer token, `language` and `timeZone` headers, 401 handling with redirect), and **`requests`** (`get`, `post`, `put`, `delete`, `deleteCustom`). Domain modules under **`src/api/`** should import **`requests`** (or **`ApiCaller`** only if you need raw access).

If you later need a second, minimal axios instance without auth interceptors, add it here or in a small sibling file rather than scattering clients.

## Redux

- Store: `src/redux/store.ts` — `auth` and `common` slices; import **`RootState`** / **`AppDispatch`** where you call `useSelector` / `useDispatch` (e.g. `useSelector((state: RootState) => …)`).  
- `AppThunk` type alias is exported from `store.ts`.

## i18n

- Module: `src/i18n.ts` — default export is the i18next instance; also exports **`SUPPORTED_LANGUAGES`**, **`SupportedLanguage`**, **`DEFAULT_LANGUAGE`**, **`I18N_NAMESPACES`**, **`DEFAULT_NAMESPACE`**, and **`syncLanguageFromStorage`**.  
- Namespaces: `common`; languages: `en`, `ar` via **`LANGUAGE_KEYS`** in `utility/strings.ts`.  
- Fallback language: English (`LANGUAGE_KEYS.ENGLISH`). After hydration, `syncLanguageFromStorage()` applies `localStorage` (`app.locale`) so Arabic users switch to `ar` without SSR/client text mismatch.

## App providers

`src/app/providers.tsx` (`'use client'`) composes, in order: `CookiesProvider`, Redux `Provider`, `I18nextProvider`, document `lang`/`dir` sync, `AntdRegistry`, styled-components SSR registry (`StyledComponentsProvider`), Ant Design `ConfigProvider` (`AntdProvider`), and `react-toastify` `ToastContainer`.

## `next.config.js`

- `transpilePackages` lists `antd`, `rc-util`, `@ant-design/icons`, `@ant-design/cssinjs`, `rc-picker`, `rc-pagination`.  
- `reactStrictMode` is **true**. Set to `false` only if you need legacy double-invoke behavior.

## ESLint

`src/hooks/useForm.tsx` is temporarily excluded in `eslint.config.mjs` because strict React Compiler / `react-hooks` rules flag patterns inside that legacy hook. Remove the ignore entry after refactoring that file.

## RTL

Arabic (`ar`) sets `dir="rtl"` on `<html>` via the client provider sync. Ant Design `ConfigProvider` uses the same RTL flag so components such as `Table` mirror correctly.
