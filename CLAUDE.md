## Image & Asset Handling
- Filenames in git are case-sensitive on Linux/production but not on Windows/macOS. When images work locally but fail in production, check for case mismatches in git-tracked filenames first.
- When updating SVG logos/favicons, always verify the viewBox attribute matches the actual content bounds before regenerating PNG variants.

## Styling Iteration Preferences
- When the user asks to make text 'bigger' or 'bolder', make a substantial jump (e.g., 1.5x–2x) rather than incremental tweaks—they prefer decisive changes.
- For hero/headline layouts, preserve the user's specified line count when adjusting font size; do not collapse or expand lines unless asked.
