# Mercy Gordon site — session state

**Live:** https://mercy-gordon.vercel.app
**Built:** 2026-05-22 (Will + Claude, at Kevin's ask)
**Critic score:** 9.1/10 (4 iteration rounds)

## Stack
Next.js 16.2.6 App Router · React 19 · TypeScript · Custom CSS (no Tailwind) · Fraunces + Inter fonts.

## Open items
1. **Contact email `mercy@crazylove.org` is a PLACEHOLDER.** Will needs to verify or replace before sharing site.
2. No custom domain yet — `mercy-gordon.vercel.app`.
3. Awaiting Mercy/Kevin review.

## Real catalog (do not invent additions)
| Song | Released | Spotify track | YouTube lyric video | Apple album |
|---|---|---|---|---|
| Beautiful Insanity | May 3, 2021 | `5ZY2nMbFBaivR82aVZFCm8` | `xw6_eTe-FWo` | `1565853874` |
| Have Mercy On Me | June 29, 2023 | artist page | (no lyric video) | `1695001926` |
| Come Yeshua (feat. Joshua Aaron) | Sept 2023 | artist page | `tSxyVsz4TJw` | `1705870884` |

Spotify artist: `5Z5rOvYETVfca2rqXq4aa4` · Apple artist: `1565847831` · YouTube Topic: `UCK7PkM2NhsAgRwwIcUpG1eQ`

## Mercy's framing (her own words)
"LOL — as little as possible? Link to Spotify, maybe the lyric videos CL released for 2 of the songs."

This is the editorial north star. If iterating, lean toward fewer elements not more.

## Aesthetic locks (NOT Tentmakers)
- Palette: ink #0e0a08, linen #f3ece1, rose #d9b4a3, ember #c98a5f. No gold. No IvyOra.
- Fonts: Fraunces (variable axes used) + Inter only.
- Every section has a real photo background. No plain blocks.
- Single scroll. No nav menu.
- Italic display tic was deliberately broken in v4 — 3 distinct display treatments. Don't reintroduce uniform italic.

## Photo assets (all in `/public/`)
- `mercy-portrait.jpg` — hero inset + About photo
- `cover-beautiful-insanity.jpg` — hero full-bleed plate
- `cover-come-yeshua.jpg` — Listen section bg
- `cover-have-mercy-on-me.jpg` — About + Outro section bg
- `beautiful-insanity-still.jpg` — Lyric A section bg
- `come-yeshua-still.jpg` — Lyric B section bg + Songs atmospheric

To refresh covers: `curl -s "https://itunes.apple.com/lookup?id=<album_id>"` → use `artworkUrl100`, swap `100x100` for `1200x1200bb`.

## Why no Francis Chan mention
Will's explicit instruction. Site identifies Mercy as "a worship leader in the California Bay Area" — true, sufficient, hers. Do not add the family connection to copy ever.

## Iteration history
- R1 7.3 — photo-heaviness failed, 4/8 sections plain, italic tic 6x, dead CSS, fabricated copy
- R2 8.7 — all sections photo-backed, local assets, real covers, motion guard, balanced quotes
- R3 8.9 — portrait inset added, dynamic year, release months, "Three songs." tightened
- R4 9.1 PASS — italic monoculture broken (3 distinct display treatments), bio tightened

## Deploy
```
npm run build   # verify
git add -A && git commit -m "..."
git push
vercel --yes --prod
```

## Critic prompt (for future iterations)
Spawn a `general-purpose` agent with rubric: Reverence 25% · Photo-heavy 20% · Typography 15% · Music industry 10% · Copy 10% · IA 10% · Technical 10%. Pass bar 9.0. Brutal scoring, no inflation.
