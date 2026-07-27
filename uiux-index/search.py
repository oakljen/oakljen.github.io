#!/usr/bin/env python3
"""CLI search over sites.json — the uimaxing UI/UX site index.

Usage:
  search.py <query> [--category CAT]   search name/category/tags/note (case-insensitive)
  search.py --categories               list all categories with counts
  search.py --list                      print every entry
"""
import json
import sys
import argparse
import io
from pathlib import Path

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")

DATA_PATH = Path(__file__).parent / "sites.json"


def load():
    return json.loads(DATA_PATH.read_text(encoding="utf-8"))


def matches(entry, query):
    haystack = " ".join([
        entry["name"], entry["category"], entry.get("note", ""),
        " ".join(entry.get("tags", [])),
    ]).lower()
    return all(term in haystack for term in query.lower().split())


def print_entry(e):
    tags = ",".join(e.get("tags", []))
    print(f"{e['name']} [{e['category']}] — {e['url']}")
    print(f"  tags: {tags}")
    print(f"  {e.get('note', '')}")


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("query", nargs="?", help="search terms (matched against name/category/tags/note)")
    ap.add_argument("--category", help="filter to an exact category slug")
    ap.add_argument("--categories", action="store_true", help="list categories with counts")
    ap.add_argument("--list", action="store_true", help="print every entry")
    args = ap.parse_args()

    sites = load()

    if args.categories:
        counts = {}
        for e in sites:
            counts[e["category"]] = counts.get(e["category"], 0) + 1
        for cat, n in sorted(counts.items()):
            print(f"{cat:<24} {n}")
        return

    if args.list:
        for e in sites:
            print_entry(e)
        return

    if not args.query and not args.category:
        ap.print_help()
        sys.exit(1)

    results = sites
    if args.category:
        results = [e for e in results if e["category"] == args.category]
    if args.query:
        results = [e for e in results if matches(e, args.query)]

    if not results:
        print("No matches.")
        return

    for e in results:
        print_entry(e)
    print(f"\n{len(results)} match(es).")


if __name__ == "__main__":
    main()
