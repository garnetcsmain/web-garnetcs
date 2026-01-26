# Garnet CS Landing Page - Quick Start Guide

Complete guide to get your landing page live at https://garnetcs.com

## 📋 Prerequisites

- ✅ AWS account with admin access
- ✅ AWS CLI installed and configured
- ✅ Domain garnetcs.com registered (or your chosen domain)

## 🚀 Deployment Steps

### Step 1: Set Up AWS Infrastructure

#### 1. Create S3 Bucket

```bash
aws s3 mb s3://garnetcs.com --region us-east-1
aws s3 website s3://garnetcs.com --index-document index.html
```

#### 2. Configure S3 Bucket Policy

Create a bucket policy to allow public read access:

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::garnetcs.com/*"
        }
    ]
}
```

Apply the policy:

```bash
aws s3api put-bucket-policy --bucket garnetcs.com --policy file://bucket-policy.json
```

#### 3. Request SSL Certificate

```bash
aws acm request-certificate \
  --domain-name garnetcs.com \
  --subject-alternative-names www.garnetcs.com \
  --validation-method DNS \
  --region us-east-1
```

#### 4. Create CloudFront Distribution

Use the AWS Console or CLI to create a CloudFront distribution:

- **Origin Domain**: garnetcs.com.s3.us-east-1.amazonaws.com
- **Viewer Protocol Policy**: Redirect HTTP to HTTPS
- **Alternate Domain Names (CNAMEs)**: garnetcs.com, www.garnetcs.com
- **SSL Certificate**: Use the certificate from Step 3
- **Default Root Object**: index.html

### Step 2: Configure DNS

Add DNS records in your domain registrar (e.g., Porkbun):

#### For SSL Certificate Validation:

```
Type: CNAME
Name: _xxxxx.garnetcs.com
Value: _xxxxx.acm-validations.aws.
```

#### For Website:

```
Type: CNAME
Name: @
Value: xxxxx.cloudfront.net

Type: CNAME  
Name: www
Value: xxxxx.cloudfront.net
```

### Step 3: Update Configuration Files

#### Update `deploy.sh`:

```bash
# Line 27
DISTRIBUTION_ID="YOUR_ACTUAL_DISTRIBUTION_ID"
```

#### Update `aws-config.txt`:

```
DISTRIBUTION_ID=E1234567890ABC
CF_DOMAIN=d1234567890.cloudfront.net
CERT_ARN=arn:aws:acm:us-east-1:123456789012:certificate/xxxxx
```

### Step 4: Deploy to Production

```bash
./deploy.sh
```

This will:
1. Sync all files to S3
2. Set proper cache headers
3. Invalidate CloudFront cache
4. Show deployment status

### Step 5: Verify Everything Works

1. **Visit the site**: https://garnetcs.com
2. **Test language switcher**: Toggle between English/Spanish
3. **Test the contact form**: Fill it out and submit
4. **Test on mobile**: Check responsive design
5. **Check HTTPS**: Ensure SSL certificate is working

## 🧪 Testing Locally (Before Deployment)

```bash
cd /Users/fsulbaran/Dev/web-garnetcs
python3 -m http.server 8000
```

Visit: http://localhost:8000

**Note:** Contact form won't work locally without backend, but you can test everything else.

## 📊 Cost Estimate

**Monthly costs** (for <100 visits/day):

| Service | Cost |
|---------|------|
| S3 | ~$0.10 |
| CloudFront | FREE (within 50GB tier) |
| ACM | FREE |
| **Total** | **~$0.10/month** |

## 🐛 Troubleshooting

### AWS Credentials Expired

```bash
aws configure
# Enter new credentials
```

### SSL Certificate Not Validating

- Check DNS records in your domain registrar
- Wait 5-30 minutes for propagation
- Verify with: `dig _xxxxx.garnetcs.com CNAME`

### Site Not Loading

- Check CloudFront distribution is "Deployed"
- Verify DNS records point to CloudFront domain
- Clear browser cache
- Wait for DNS propagation (up to 48 hours)

### Images Not Showing

- All images are in `assets/images/` folder
- Check S3 bucket permissions
- Verify correct MIME types are set

## 📝 Post-Deployment Checklist

- [ ] Site loads at https://garnetcs.com
- [ ] Site loads at https://www.garnetcs.com
- [ ] SSL certificate is valid (no browser warnings)
- [ ] Language switcher works (EN/ES)
- [ ] All images display correctly
- [ ] Site is responsive on mobile
- [ ] Navigation links work
- [ ] Contact form is functional

## 🔄 Future Updates

To update the site:

1. Make changes to HTML/CSS/JS files
2. Test locally: `python3 -m http.server 8000`
3. Deploy: `./deploy.sh`
4. Wait 2-3 minutes for CloudFront invalidation
5. Verify changes live

---

**Last Updated:** January 2026  
**Status:** Ready for deployment ✅
