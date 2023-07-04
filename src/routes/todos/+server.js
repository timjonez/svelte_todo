import { json } from '@sveltejs/kit';

export function GET() {
    console.log('--------> ')
    let todo = {
        "name": "A new one",
        "is_done": false,
    }
    return json(todo)
}
