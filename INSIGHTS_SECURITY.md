# Insights Page Security Configuration

The insights page (`/insights`) has been secured with password protection and excluded from public analytics tracking.

## Security Features

### 1. Password Protection
- **Component**: `components/password-protected.tsx`
- **Default Password**: `blockfest2025` (configurable via env)
- **Session Storage**: Authentication persists during browser session
- **Auto-logout**: Manual logout button available

### 2. Analytics Exclusion
- **Umami Tracking**: Page marked with `data-umami-ignore="true"`
- **API Routes**: Private headers added to `/api/insights/*`
- **SEO**: `robots: "noindex, nofollow, noarchive, nosnippet"`

### 3. Search Engine Exclusion
- **robots.txt**: `/insights/` and `/analytics/` disallowed
- **Meta Tags**: Full SEO exclusion
- **Cache Headers**: Private caching only

## Configuration

### Environment Variable
```bash
# .env.local or .env.production
NEXT_PUBLIC_INSIGHTS_PASSWORD=your-secure-password-here
```

### Default Fallback
If no environment variable is set, defaults to `blockfest2025`

## Usage

1. **Access**: Navigate to `/insights`
2. **Authentication**: Enter password when prompted
3. **Session**: Remains authenticated until logout or browser close
4. **Logout**: Click logout button in top-right corner

## Security Notes

- Password is stored in client-side environment (not server-secure)
- Suitable for basic access control, not sensitive data protection
- For production: Use server-side authentication for higher security
- Session storage clears on logout or browser close

## Files Modified

- `app/insights/page.tsx` - Added password protection wrapper
- `components/password-protected.tsx` - New password protection component
- `app/api/insights/dashboard/route.ts` - Added private headers
- `public/robots.txt` - Added insights exclusion
- `.env.example` - Added password configuration

## Testing

- Visit `/insights` to test password protection
- Check browser dev tools for `data-umami-ignore` attribute
- Verify session persistence across page refreshes
- Test logout functionality
