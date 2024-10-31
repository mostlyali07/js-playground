import { supabase } from './supabaseClient';

export async function getTodos() {
    const { data, error } = await supabase
        .from('todos')
        .select('*')
        .order('id', { ascending: true });
    if (error) throw error;
    return data;
}

export async function addTodo(title: string) {
    const { data, error } = await supabase.from('todos').insert([{ title, is_complete: false }])
    if (error) throw error;
    return data;
}

export async function updateTodo(id: number, is_complete: boolean) {
    const { data, error } = await supabase.from('todos').update({ is_complete }).eq("id", id)
    if (error) throw error;
    return data;
}

export async function deleteTodo(id: number) {
    const { data, error } = await supabase
        .from('todos')
        .delete()
        .eq('id', id);
    if (error) throw error;
    return data;
}
