import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://dtitblwkydcpjmietkhe.supabase.co/";
const supabaseKey = "sb_publishable_B4pM0q7aMlRYXvwKrx272Q_FP2w77ly";
export const supabase = createClient(supabaseUrl, supabaseKey);
