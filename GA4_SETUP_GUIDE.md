# Google Analytics 4 Setup Guide for N30 Digital Solutions

## ✅ Implemented Features

### 1. **LocalBusiness Schema** (SEO Enhancement)
- Added to `app/layout.tsx`
- Includes complete business details:
  - Address: Butibam Resource Centre, Lae, Morobe Province, PNG
  - Phone: +675 7968 9919
  - Email: n30digitalsolutions@proton.me
  - Service types: Web Design, Web Development, Mobile App Development
  - Opening hours: Mo-Fr 08:00-17:00
  - Price range: $$ (moderate pricing)
- **Benefits**: Improves local search visibility, helps Google understand your business

### 2. **GA4 Conversion Tracking**
- Tracking ID: `G-HJMXXMF7TY`
- Implemented events:
  - **page_view** - Tracks all page visits automatically
  - **contact_form_submission** - Triggered when contact form is submitted
  - **whatsapp_engagement** - Triggered when WhatsApp link is clicked

### 3. **Structured Tracking Function**
- Added `window.trackConversion()` function for easy event tracking across the site
- Usage: `window.trackConversion('event_name')`

## 📊 Next Steps in Google Analytics Console

### Step 1: Create Custom Events (5 minutes)
1. Go to [Google Analytics 4 Console](https://analytics.google.com)
2. Select property: **G-HJMXXMF7TY**
3. Go to **Admin** → **Events** → **Create Event**
4. Create these custom events:
   - **contact_form_submission** (conversion ✓)
   - **whatsapp_engagement** (conversion ✓)

### Step 2: Set Up Conversion Goals
1. Go to **Admin** → **Conversions**
2. Mark as conversion for:
   - contact_form_submission
   - whatsapp_engagement
   - lead_generated (optional, for tracking from contact form)

### Step 3: Create Conversion Tracking Dashboard
1. Go to **Dashboards** → **Create Blank Dashboard**
2. Add widgets:
   - **Conversions by event** (pie chart)
   - **Conversion rate** (scorecard)
   - **Contact Form Submissions** (time series)
   - **WhatsApp Engagement Clicks** (time series)

### Step 4: Monitor Real-Time Data
1. Go to **Real time** report
2. Verify events fire when:
   - Pages load
   - Contact form submitted
   - WhatsApp link clicked

## 🔗 LocalBusiness Schema Benefits

The LocalBusiness schema helps with:
1. **Google Search Results**: Shows business info in search results
2. **Google Maps**: Improves local search visibility
3. **Rich Snippets**: Displays address, phone, hours in search results
4. **Voice Search**: Helps with voice search queries for "digital agency near Lae"

## 📱 Tracking What Matters

### Current Events Being Tracked:
- **Page Views**: Every page visit (all pages)
- **Contact Form Submission**: When visitor submits contact form
- **WhatsApp Engagement**: When visitor clicks WhatsApp link

### Recommended Additional Events to Track:
1. **case_study_view** - When someone reads case study (add to blog page)
2. **services_page_view** - When services page is visited
3. **cta_button_click** - When call-to-action buttons are clicked
4. **social_share** - When someone shares content

## 📈 Key Metrics to Monitor

1. **Conversion Rate**: contact_form_submissions / total_users
2. **WhatsApp Engagement Rate**: whatsapp clicks / page_views
3. **Form Completion Rate**: form submissions that succeed
4. **Traffic Sources**: Where visitors are coming from
5. **Top Pages**: Which pages get most traffic
6. **User Journey**: How users navigate before conversion

## 🚀 Quick Launch Checklist

- ✅ LocalBusiness schema added to layout.tsx
- ✅ GA4 conversion function implemented
- ✅ contact_form_submission event triggered
- ✅ whatsapp_engagement event triggered
- ⏳ Create custom events in GA4 console
- ⏳ Set up conversion goals
- ⏳ Create monitoring dashboard
- ⏳ Monitor real-time data for 24-48 hours

## 💡 Tips for Success

1. **Wait 24-48 hours** for data to populate in GA4
2. **Test events** using Real-time report before full launch
3. **Set conversion attribution** window (default 30 days is good)
4. **Monitor daily** for first week to ensure tracking works
5. **Create automated alerts** for:
   - Zero conversion events in 24 hours
   - Traffic spike/drops
   - Unusual bounce rates

## 🔐 Privacy & Data

- All tracking complies with privacy regulations
- No personal data beyond email field is tracked
- Data stored securely in Google Analytics
- You own all your data
- Can be exported for reports

## ❓ Troubleshooting

**Events not showing in GA4?**
1. Check Real-time report first (data appears here immediately)
2. Verify Tracking ID is correct: G-HJMXXMF7TY
3. Check browser console for JavaScript errors
4. Clear browser cache and retry
5. Wait up to 24 hours for full data processing

**Form submissions tracked but WhatsApp not showing?**
1. Ensure onClick handler is properly attached to WhatsApp link
2. Check that tracking function is defined in layout.tsx
3. Test in Real-time report

## 📞 Support

For questions about GA4 setup:
- [Google Analytics Help Center](https://support.google.com/analytics)
- [GA4 Events Documentation](https://support.google.com/analytics/answer/10629990)
- [Schema.org LocalBusiness Reference](https://schema.org/LocalBusiness)

---

**Last Updated**: December 12, 2025
**Status**: Ready for GA4 Console Configuration
