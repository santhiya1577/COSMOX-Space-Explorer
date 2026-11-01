// COSMOX Supabase connection (publishable key is safe for browser use; RLS protects data)
const SUPABASE_URL = "https://sbfchxbhjykprpuusaur.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_HghBb8_S7vG5hpWEZ7xoPA_bIQfXmlU";
window.supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);

// Create the user's profile row after authentication, if it does not exist yet.
window.ensureExplorerProfile = async function(user) {
    const client = window.supabaseClient;
    const { data, error } = await client.from("profiles").select("user_id").eq("user_id", user.id).maybeSingle();
    if (error) throw error;
    if (!data) {
        const username = user.user_metadata?.username || (user.email || "explorer").split("@")[0];
        const { error: insertError } = await client.from("profiles").insert({ user_id: user.id, username });
        if (insertError) throw insertError;
    }
};
