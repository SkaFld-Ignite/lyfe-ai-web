/*-----------------------------------------------------------------
  ACCESS REQUESTS TABLE
  -----------------------------------------------------------------
  Stores access requests from providers and patients interested in
  the Lyfe AI platform before general availability.
 -----------------------------------------------------------------*/

/* 1 - ACCESS REQUESTS TABLE ----------------------------------*/
create table access_requests (
  id            uuid primary key default gen_random_uuid(),
  name          text not null,
  email         text not null,
  role          text not null check (role in ('provider', 'patient')),
  practice_name text,
  practice_size text,
  created_at    timestamptz not null default now()
);

/* 2 - ROW-LEVEL SECURITY ------------------------------------*/
alter table access_requests enable row level security;

-- Allow anonymous users to insert access requests (public form submissions)
create policy access_requests_anon_insert
  on access_requests
  for insert
  to anon
  with check (true);

/*-----------------------------------------------------------------
  END OF MIGRATION
 -----------------------------------------------------------------*/
