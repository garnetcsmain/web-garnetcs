#!/bin/bash

# Update CloudFront Distribution with Custom Domain and SSL Certificate
# Run this AFTER SSL certificate is validated (status: ISSUED)

DISTRIBUTION_ID="E2VL43N95HPDEF"
CERT_ARN="arn:aws:acm:us-east-1:590447489888:certificate/98e26643-ddb7-40f6-bfe8-a9b7754b951c"

echo "Fetching current CloudFront configuration..."
aws cloudfront get-distribution-config --id $DISTRIBUTION_ID --output json > cf-config-backup.json

# Extract ETag
ETAG=$(jq -r '.ETag' cf-config-backup.json)

# Update configuration with custom domain and SSL
jq '.DistributionConfig | 
    .Aliases.Quantity = 2 | 
    .Aliases.Items = ["garnetcs.com", "www.garnetcs.com"] |
    .ViewerCertificate = {
        "ACMCertificateArn": "'$CERT_ARN'",
        "SSLSupportMethod": "sni-only",
        "MinimumProtocolVersion": "TLSv1.2_2021",
        "Certificate": "'$CERT_ARN'",
        "CertificateSource": "acm"
    }' cf-config-backup.json > cf-config-updated.json

echo "Updating CloudFront distribution..."
aws cloudfront update-distribution \
    --id $DISTRIBUTION_ID \
    --distribution-config file://cf-config-updated.json \
    --if-match $ETAG

echo "✅ CloudFront updated! Distribution is deploying (takes 5-15 minutes)..."
echo "Once deployed, add the website DNS records in OpenSRS."
