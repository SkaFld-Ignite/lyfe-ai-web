-- Remove the SQL trigger since we're using the UI webhook instead
drop trigger if exists trigger_notify_access_request on public.access_requests;
drop function if exists public.notify_access_request();
