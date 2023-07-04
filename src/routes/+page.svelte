<script>
    let todos = []

    async function getTodo() {
        let num = todos.length + 1;

        const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${num}`)
        let todo = await res.json();

        todos = [...todos,
            {
                "name": todo.title,
                "is_done": todo.completed
            }
        ];
    }
</script>

<h1>Todos</h1>
{#each todos as todo }
    <div>
        <label for="is_done">{todo.name}</label>
        <input name="is_done" type="checkbox" bind:checked={todo.is_done} /> 
    </div> 
{/each}
<button on:click={getTodo}>Get More</button>
