/*
  # Create purchases table for RSI Stability Pro EA sales

  1. New Tables
    - `purchases`
      - `id` (uuid, primary key) - Unique purchase identifier
      - `email` (text, not null) - Customer email address
      - `stripe_payment_id` (text, unique) - Stripe payment/checkout session ID
      - `amount` (integer, not null) - Purchase amount in cents
      - `currency` (text, not null) - Currency code (USD)
      - `status` (text, not null) - Payment status (pending, completed, failed)
      - `files_sent` (boolean, default false) - Whether EA files were sent via email
      - `created_at` (timestamptz, default now()) - Purchase timestamp
      - `updated_at` (timestamptz, default now()) - Last update timestamp

  2. Security
    - Enable RLS on `purchases` table
    - Add policy for service role access (for edge functions)
    
  3. Notes
    - Table tracks all EA purchases and file delivery status
    - Used by payment webhook and email delivery system
    - No public access - only accessible via service role for admin functions
*/

CREATE TABLE IF NOT EXISTS purchases (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL,
  stripe_payment_id text UNIQUE,
  amount integer NOT NULL DEFAULT 4900,
  currency text NOT NULL DEFAULT 'usd',
  status text NOT NULL DEFAULT 'pending',
  files_sent boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE purchases ENABLE ROW LEVEL SECURITY;

CREATE INDEX IF NOT EXISTS idx_purchases_email ON purchases(email);
CREATE INDEX IF NOT EXISTS idx_purchases_stripe_id ON purchases(stripe_payment_id);
CREATE INDEX IF NOT EXISTS idx_purchases_status ON purchases(status);
