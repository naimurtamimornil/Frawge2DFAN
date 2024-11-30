# Frawge2DFAN
that's an anime fan page, since I don't have any money, I'm using github
# Arnil's Anime Universe

## Project Overview
A personal anime fan website showcasing reviews, news, and community engagement.

## Setup and Deployment

### Prerequisites
- GitHub Account
- Git installed on your computer

### Local Development
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/ArnilAnimeFanPage.git
   cd ArnilAnimeFanPage
   ```

### Deployment to GitHub Pages
1. Ensure all files are committed:
   ```bash
   git add .
   git commit -m "Initial website setup"
   ```

2. Push to GitHub:
   ```bash
   git push -u origin main
   ```

3. In your GitHub repository settings:
   - Go to "Pages" section
   - Select "main" branch
   - Save

### Customization Steps
1. **Images**: 
   - Replace placeholder images in the `script.js` array
   - Add your anime wallpapers to a `/wallpapers` directory

2. **Dynamic Content**:
   - Replace mock RSS feed with actual Anime News Network RSS
   - Integrate YouTube and Twitter APIs using their developer documentation

3. **Personal Reviews**:
   - Edit review content in `index.html`
   - Add more review cards as needed

## API Integration Guide
- YouTube: Use YouTube Data API v3
- Twitter: Use Twitter API v2
- RSS: Use RSS feed libraries or APIs

## Troubleshooting
- Ensure all API keys are kept secret
- Check browser console for any integration errors

## Contributing
Feel free to fork and customize! Pull requests welcome.

## License
MIT License
