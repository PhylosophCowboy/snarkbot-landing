# Snarkbot Landing Page

A single-page microservice featuring personality assessment chatbot with Stripe integration for the School of Snark.

## Project Overview

This is a standalone landing page that presents Antknee B. Snarky, a wise and witty personality assessment chatbot. Users can engage in a 20-minute free conversation to discover what makes them extraordinary, then subscribe to continue the experience.

## Features

- **Interactive Chat Interface**: Real-time conversation with Snarky
- **Personality Assessment**: 10 carefully crafted questions to reveal unique traits
- **20-Minute Free Trial**: Timer-based free conversation period
- **Dual Pricing Tiers**: 
  - $5/month: Snarkbot conversations
  - $20/month: Full School of Snark access
- **Stripe Integration**: Secure payment processing
- **Email Capture**: Lead generation and user management
- **Mobile Responsive**: Optimized for all devices
- **Character-Driven Design**: Featuring Snarky, Wynn, and Thump

## Characters

- **Antknee B. Snarky**: Brown bear in worn dinner jacket, wise guide and conversation leader
- **Wynnefred (Wynn)**: Cranky wolverine, Snarky's best friend and arch-nemesis
- **Pompass J. Thump**: Rabbit mayor in checkered tailcoat, enthusiastic but often ignored

## Technical Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Styling**: Custom CSS with Google Fonts (Merriweather, Open Sans)
- **Payment**: Stripe Elements integration
- **Chat Backend**: AI Tutor platform integration (planned)
- **Hosting**: Cloudflare Pages
- **Analytics**: Google Analytics (planned)

## File Structure

```
snarkbot-landing/
├── index.html              # Main landing page
├── assets/
│   ├── css/
│   │   └── styles.css      # All styling
│   ├── js/
│   │   └── app.js          # Main application logic
│   └── images/
│       ├── snark-mugshot.png    # Snarky character image
│       ├── wynnefred-final.png  # Wynn character image
│       └── thump-4.png          # Thump character image
├── README.md               # This file
└── package.json            # Dependencies (if needed)
```

## Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone https://github.com/PhylosophCowboy/snarkbot-landing.git
   cd snarkbot-landing
   ```

2. **Add character images**:
   - Place the three character images in `assets/images/`
   - Ensure filenames match: `snark-mugshot.png`, `wynnefred-final.png`, `thump-4.png`

3. **Configure Stripe**:
   - Add your Stripe publishable key to `assets/js/app.js`
   - Set up webhook endpoints for payment processing

4. **Deploy to Cloudflare Pages**:
   - Connect your GitHub repository to Cloudflare Pages
   - Set build command: `echo "Static site - no build needed"`
   - Set output directory: `/`

## Development

The application is built with vanilla JavaScript for simplicity and performance. Key components:

### Chat System
- Real-time message display
- 20-minute conversation timer
- Session persistence via localStorage
- Typing indicators and smooth animations

### Payment Integration
- Email capture before payment
- Dual pricing tier selection
- Stripe Elements for secure processing
- Success/failure handling

### Responsive Design
- Mobile-first approach
- Character images optimized for all screen sizes
- Touch-friendly interface elements

## AI Integration

The chat system is designed to integrate with the AI Tutor platform:

```javascript
// Placeholder for AI Tutor API integration
async function callAITutorAPI(message, conversationHistory) {
    const response = await fetch('/api/ai-tutor/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            message: message,
            history: conversationHistory,
            agent: 'snarkbot'
        })
    });
    return response.json();
}
```

## Configuration

### Environment Variables (for production)
- `STRIPE_PUBLISHABLE_KEY`: Your Stripe publishable key
- `AI_TUTOR_API_ENDPOINT`: AI Tutor platform endpoint
- `ANALYTICS_ID`: Google Analytics tracking ID

### Customization
- Colors and fonts can be modified in `assets/css/styles.css`
- Character dialogue can be updated in `assets/js/app.js`
- Pricing tiers can be adjusted in both HTML and JavaScript

## Performance Optimizations

- Lazy loading for images
- CSS and JS minification (for production)
- CDN delivery via Cloudflare
- Optimized font loading
- Efficient DOM manipulation

## Browser Support

- Chrome 70+
- Firefox 65+
- Safari 12+
- Edge 79+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Security Considerations

- Input sanitization for chat messages
- HTTPS enforcement
- Secure payment processing via Stripe
- Privacy policy compliance
- GDPR considerations for email collection

## Analytics & Tracking

The application tracks key metrics:
- Page load events
- Chat engagement rates
- Conversion funnel performance
- Payment success/failure rates
- User session duration

## Future Enhancements

- Voice-synced avatar for Snarky
- Advanced personality analytics
- Community features integration
- Database integration for user profiles
- A/B testing for conversion optimization

## Contributing

This is a private project for School of Snark. For development questions or issues, contact the development team.

## License

© 2024 School of Snark. All rights reserved.

---

**Note**: This landing page is designed as a standalone microservice that can generate revenue independently while serving as a funnel to the larger School of Snark ecosystem.