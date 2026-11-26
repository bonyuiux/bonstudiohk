# Using design-system-ops

[design-system-ops](https://github.com/murphytrueman/design-system-ops) is a pack of 36 Claude Code skills for running a design system: audits, documentation and governance. It's installed **in this project** at `.claude/skills/design-system-ops` (copied from upstream commit `f167898`), so any Claude Code session opened in this folder can use it.

## Install it on your Mac too (all projects)

```bash
git clone https://github.com/murphytrueman/design-system-ops.git ~/.claude/skills/design-system-ops
```

Then in Claude Code run `/reload-plugins`. Check with `claude plugin list`: you should see `design-system-ops@skills-dir` loaded. The first time you open this project, accept Claude Code's "trust this folder" prompt, or the project copy won't load.

## How to use it

You don't call it with code. You ask Claude in plain words, and the matching skill loads. Or type `/design-system-ops:` to see the four bigger "agent" commands.

### Useful for Bon Studio (a small site with one stylesheet)

| You want to… | Say |
|---|---|
| Check the tokens (colours, sizes, spacing) are well named and not duplicated | "Audit my tokens in src/app/globals.css" |
| Find places in the code that skip the tokens (a raw hex, a one-off margin) | "Check token compliance in src/" |
| Get a plain-English page documenting the tokens | "Document my tokens" |
| Check naming is consistent (`t-display`, `--block`, `gal__item`…) | "Run a naming audit" |
| Make sure future AI edits follow the system | "Write agent instructions for this design system" (updates `AGENTS.md`) |
| Check a component is accessible | "Run an accessibility check on HeroCarousel" |
| Overall check-up | `/design-system-ops:full-diagnostic` |

### Probably not needed yet

Adoption reports, deprecation plans, stakeholder briefs, release governance and Figma variable audits are made for teams running a shared system across many products. They're there if Bon Studio grows into that.

## Tips

- Say which files to look at ("…in src/app/globals.css"). It's faster and more precise.
- Each skill writes a report with findings ranked by severity. Ask Claude to "fix the high ones" afterwards.
- Optional: copy `.claude/skills/design-system-ops/ds-ops-config.example.yml` to `.ds-ops-config.yml` at the project root to set defaults (token file paths, severity). Not needed to start.
- Check the install any time: `bash .claude/skills/design-system-ops/verify-install.sh`
