# NSCET Web Project Guidelines

## Typography System
This project has an official, centralized typography system. 
**Whenever any developer creates a new Page, Component, Card, Section, Modal, Dialog, Form, Table, or Feature, they MUST automatically use the centralized typography variables.**

No new `font-family` declarations should be introduced anywhere in the project.

### Usage Guide
- `var(--font-heading)`: For Main Hero Headings (H1) -> Requires `font-weight: 800`
- `var(--font-section)`: For Section Headings (H2) -> Requires `font-weight: 700`
- `var(--font-subtopic)`: For Sub Topics (H3, H4, Card Titles, Labels, Chips, Badges) -> Requires `font-weight: 700`
- `var(--font-body)`: For everything else -> Requires `font-weight: 400` (Body), `500` (Buttons/Links/Navbar), `600` (Table Headers)

*Do NOT modify the Home Hero component, it maintains its own legacy identity.*
