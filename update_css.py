import os
import re

css_files = [
    r"Frontend\src\pages\AboutUs\Overview\Overview.css",
    r"Frontend\src\pages\AboutUs\Actstatutes\Actstatutes.css",
    r"Frontend\src\pages\AboutUs\Developmentplan\Developmentplan.css",
    r"Frontend\src\pages\AboutUs\AnnualReports\AnnualReports.css",
    r"Frontend\src\pages\AboutUs\Affiliation\Affiliation.css"
]

premium_vars = """
:root {
  --premium-card-bg: linear-gradient(135deg, #f0f7ff 0%, #e6f0fa 100%) !important;
  --premium-card-border: 1px solid rgba(59, 130, 246, 0.15) !important;
}
"""

# We only want to target cards, not the page backgrounds. 
# So we skip replacements for these specific lines.
# We will just replace any background: rgba(255, 255, 255, X) 
# and background: white/ #fff inside CSS rules EXCEPT page sections.

page_classes = ['overview-page', 'act-statutes-page', 'dev-plan-page', 'affiliation-page', 'annual-reports-page', 'journey-section']

def is_page_class(block_text):
    for cls in page_classes:
        if f".{cls}" in block_text:
            return True
    return False

for filepath in css_files:
    if not os.path.exists(filepath):
        continue
        
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
        
    # Inject variables if not present
    if '--premium-card-bg' not in content:
        content = premium_vars + content

    # Simple approach: Find all CSS blocks {}
    # If the block does NOT contain a page class, replace background: white / rgba(...) with var(--premium-card-bg)
    # and add border: var(--premium-card-border) if not already present.
    
    def replace_block(match):
        block = match.group(0)
        if is_page_class(block):
            return block
            
        # We only replace if it looks like a card/box (padding, border-radius, box-shadow, etc.)
        # Or just replace all white backgrounds that are not main pages.
        # But wait, there are `.sidebar-nav`, `.timeline-dot`, etc. 
        # The user wants "boxes" to be blue.
        
        # Regex to find white backgrounds
        bg_pattern = r"(background:\s*)(white|#ffffff|#fff|rgba\(255,\s*255,\s*255,\s*[0-9.]+\))([^;]*;)"
        
        if re.search(bg_pattern, block):
            # Replace background
            new_block = re.sub(bg_pattern, r"\1var(--premium-card-bg)\3", block)
            # Add border if we changed background
            if "border:" not in new_block and "border-top:" not in new_block and "border-left:" not in new_block:
                # Insert border before the closing brace
                new_block = new_block.rstrip('}') + "  border: var(--premium-card-border);\n}"
            elif "border: 1px solid" in new_block or "border: 1px solid rgba(255, 255, 255" in new_block:
                new_block = re.sub(r"border:\s*[^;]+;", "border: var(--premium-card-border);", new_block)
            return new_block
            
        return block

    # Match CSS blocks like: .class-name { ... }
    # Using a robust regex to find anything between { and }
    new_content = re.sub(r"[^{}]+{[^{}]+}", replace_block, content)
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)
        
print("CSS updated successfully.")
