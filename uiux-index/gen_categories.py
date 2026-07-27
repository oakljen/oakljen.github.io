#!/usr/bin/env python3
"""Regenerate categories/*.md from sites.json (sites.json is the source of truth — edit that, then rerun this)."""
import json
import sys
import io
from pathlib import Path

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")

ROOT = Path(__file__).parent
sites = json.loads((ROOT / "sites.json").read_text(encoding="utf-8"))

by_cat = {}
for e in sites:
    by_cat.setdefault(e["category"], []).append(e)

cat_dir = ROOT / "categories"
cat_dir.mkdir(exist_ok=True)
for f in cat_dir.glob("*.md"):
    f.unlink()

index_lines = ["# Categories\n"]
for cat in sorted(by_cat):
    entries = sorted(by_cat[cat], key=lambda e: e["name"].lower())
    lines = [f"# {cat}\n"]
    for e in entries:
        tags = ", ".join(e.get("tags", []))
        lines.append(f"### [{e['name']}]({e['url']})")
        lines.append(f"- tags: {tags}")
        lines.append(f"- {e.get('note', '')}")
        lines.append("")
    (cat_dir / f"{cat}.md").write_text("\n".join(lines), encoding="utf-8")
    index_lines.append(f"- [{cat}](categories/{cat}.md) — {len(entries)} sites")

(ROOT / "categories" / "README.md").unlink(missing_ok=True)
(ROOT / "CATEGORIES.md").write_text("\n".join(index_lines) + "\n", encoding="utf-8")

print(f"{len(sites)} sites across {len(by_cat)} categories -> categories/*.md + CATEGORIES.md")
