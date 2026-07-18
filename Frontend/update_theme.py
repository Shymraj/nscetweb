import re

file_path = 'src/pages/Alumini/Alumni.css'
with open(file_path, 'r', encoding='utf-8') as f:
    css = f.read()

# Swap Tailwind blues to the College's Native Custom Variables
css = css.replace('#3b82f6', 'var(--primary-accent)') # Light Blue -> Gold
css = css.replace('#1e40af', 'var(--secondary-accent)') # Dark Blue -> Navy
css = css.replace('#1e3a8a', 'var(--secondary-accent)') # Navy Blue
css = css.replace('#93c5fd', 'var(--primary-accent)') # Soft blue highlights -> Gold

# Replace RGB values for rgba boxes (59, 130, 246 is the old blue) -> rgb(201, 168, 76) is Gold
css = css.replace('rgba(59, 130, 246', 'rgba(201, 168, 76') 
css = css.replace('rgba(30, 64, 175', 'rgba(30, 58, 138') # Darker transparent blue just in case

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(css)
