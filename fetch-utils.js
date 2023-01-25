// Enter Supabase Information
const SUPABASE_URL = 'https://usheruhymluidrfdhheu.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVzaGVydWh5bWx1aWRyZmRoaGV1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQyNTc1MDksImV4cCI6MTk4OTgzMzUwOX0.QjjqpyfcTdEDXQrrL5etMEt5BZFjp0GeTudUiqwVKV8';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export function getUser() {
    return client.auth.session() && client.auth.session().user;
}

export async function signupUser(email, password) {
    const response = await client.auth.signUp({ email, password });

    return response.user;
}

export async function signInUser(email, password) {
    const response = await client.auth.signIn({ email, password });

    return response.user;
}

export async function checkAuth() {
    const user = await getUser();

    if (!user) location.replace('../');
}

export async function redirectIfLoggedIn() {
    if (await getUser()) {
        location.replace('./other-page');
    }
}

export async function logout() {
    await client.auth.signOut();

    return (window.location.href = '../');
}
