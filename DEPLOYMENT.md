# FORME - Deployment Guide

## Prerequisites

1. **Vercel Account**
   - Sign up at https://vercel.com
   - Install Vercel CLI: `npm i -g vercel`

2. **Environment Variables**
   - Resend API Key (optional for MVP)
   - Site URL

---

## Quick Deploy to Vercel

### Option 1: GitHub Integration (Recommended)

1. Push code to GitHub repository
2. Go to https://vercel.com/new
3. Import your repository
4. Configure environment variables:
   ```
   NEXT_PUBLIC_SITE_URL=https://forme.studio (or your domain)
   RESEND_API_KEY=re_xxxxx (optional)
   ```
5. Click Deploy

### Option 2: CLI Deploy

```bash
# Login to Vercel
vercel login

# Deploy (first time)
vercel

# Deploy to production
vercel --prod
```

---

## Environment Variables Setup

### Required for Production
```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

### Optional (Email functionality)
```env
RESEND_API_KEY=re_xxxxx
```

**Note:** Contact form works without Resend in development (logs to console)

---

## Post-Deployment Steps

### 1. Verify Deployment
- [ ] Homepage loads correctly
- [ ] All routes accessible
- [ ] Images load (once added)
- [ ] Contact form submits
- [ ] Navigation works
- [ ] No console errors

### 2. Configure Domain (Optional)
1. Go to Project Settings > Domains
2. Add your custom domain
3. Update DNS records as instructed
4. Update `NEXT_PUBLIC_SITE_URL` environment variable

### 3. Set Up Email (Optional)
1. Sign up for Resend: https://resend.com
2. Verify your domain (or use resend.dev for testing)
3. Generate API key
4. Add to environment variables
5. Update `from` and `to` email addresses in `/app/api/contact/route.ts`

### 4. Performance Checks
- [ ] Run Lighthouse audit
- [ ] Check Core Web Vitals
- [ ] Test on real devices
- [ ] Verify analytics (if configured)

---

## Continuous Deployment

Vercel automatically deploys when you push to:
- **main/master branch** → Production
- **Other branches** → Preview deployments

---

## Troubleshooting

### Build Fails
- Check build logs in Vercel dashboard
- Verify all dependencies in package.json
- Test build locally: `npm run build`

### Environment Variables Not Working
- Prefix client-side vars with `NEXT_PUBLIC_`
- Redeploy after adding new variables
- Check variable names for typos

### Contact Form Not Working
- Verify Resend API key is set
- Check API route is deployed: `/api/contact`
- Look at function logs in Vercel dashboard

---

## Pre-Launch Checklist

- [ ] All pages render correctly
- [ ] Images optimized and added
- [ ] SEO metadata complete
- [ ] Contact form tested
- [ ] Social links updated
- [ ] Footer email correct
- [ ] No placeholder content
- [ ] Analytics configured (optional)
- [ ] Lighthouse score 90+
- [ ] Tested on mobile devices
- [ ] Custom domain configured (optional)

---

## Maintenance

### Update Content
1. Edit files locally
2. Commit and push to GitHub
3. Vercel automatically deploys

### Monitor Performance
- Vercel Analytics (built-in)
- Lighthouse CI
- Real User Monitoring

### Backup
- Code is in Git repository
- Vercel keeps deployment history

---

## Cost

**Vercel Hobby Plan (Free)**
- Unlimited deployments
- Automatic HTTPS
- Edge network
- Perfect for portfolio projects

**Resend Free Tier**
- 100 emails/day
- 3,000 emails/month
- Sufficient for contact form

---

## Support Resources

- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- Resend Docs: https://resend.com/docs
- Project Issues: GitHub repository issues

---

**Ready to deploy?**

```bash
npm run build    # Test locally first
vercel --prod    # Deploy to production
```
