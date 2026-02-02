# Access Request Edge Function

Handles new access request submissions by:
1. Sending an email notification via Resend
2. Creating a contact in Twenty CRM

## Setup

### 1. Set Environment Secrets

In your Supabase Dashboard, go to **Project Settings > Edge Functions** and add these secrets:

```
RESEND_API_KEY=re_xxxxxxxxxxxx
TWENTY_API_KEY=xxxxxxxxxxxx
NOTIFICATION_EMAIL=hello@lyfeco.ai
```

### 2. Deploy the Edge Function

```bash
# Login to Supabase CLI
npx supabase login

# Link your project (if not already linked)
npx supabase link --project-ref YOUR_PROJECT_REF

# Deploy the function
npx supabase functions deploy on-access-request
```

### 3. Set Up the Database Webhook

**Option A: Use Supabase Dashboard (Recommended)**

1. Go to **Database > Webhooks** in Supabase Dashboard
2. Click **Create a new webhook**
3. Configure:
   - **Name**: `on-access-request-created`
   - **Table**: `access_requests`
   - **Events**: `INSERT`
   - **Type**: `Supabase Edge Functions`
   - **Edge Function**: `on-access-request`
4. Click **Create webhook**

**Option B: Use the Migration**

If you prefer the trigger-based approach:

```bash
# Push the migration
npx supabase db push
```

Note: The migration approach requires additional configuration in Supabase Vault for the service role key.

## Testing

You can test the function directly:

```bash
curl -X POST 'https://YOUR_PROJECT_REF.supabase.co/functions/v1/on-access-request' \
  -H 'Authorization: Bearer YOUR_ANON_KEY' \
  -H 'Content-Type: application/json' \
  -d '{
    "type": "INSERT",
    "table": "access_requests",
    "schema": "public",
    "record": {
      "id": "test-123",
      "name": "Test User",
      "email": "test@example.com",
      "role": "provider",
      "practice_name": "Test Practice",
      "practice_size": "2-5",
      "created_at": "2025-02-01T00:00:00Z"
    },
    "old_record": null
  }'
```

## Twenty CRM API

The function uses Twenty's REST API. You may need to adjust the endpoint and payload based on your Twenty instance:

- **Self-hosted**: `https://your-twenty-instance.com/rest/people`
- **Cloud**: `https://api.twenty.com/rest/people`

Check your Twenty API documentation for the exact schema of the `people` object.

## Troubleshooting

View function logs in Supabase Dashboard > Edge Functions > on-access-request > Logs

Common issues:
- **401 Unauthorized**: Check your API keys are set correctly
- **CORS errors**: Edge Functions handle CORS automatically for webhooks
- **Timeout**: Twenty API may be slow; consider increasing timeout or making it fire-and-forget
