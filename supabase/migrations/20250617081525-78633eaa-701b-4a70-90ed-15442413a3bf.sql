
-- Create a table to store contact form submissions
CREATE TABLE public.contact_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  check_in_date DATE,
  check_out_date DATE,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security (allow public access for contact form)
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert contact submissions
CREATE POLICY "Anyone can submit contact form" 
  ON public.contact_submissions 
  FOR INSERT 
  WITH CHECK (true);

-- Create policy to prevent public reading of submissions (only for admin access later)
CREATE POLICY "No public read access to contact submissions" 
  ON public.contact_submissions 
  FOR SELECT 
  USING (false);
