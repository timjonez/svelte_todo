<script>
    let todos = [
        {
            "name": "Do this",
            "is_done": false
        },
        {
            "name": "and that",
            "is_done": false
        }
    ]
    console.log('--------', todos)
</script>

<h1>Todos</h1>
{#each todos as todo }
    <div>
        <label for="is_done">{todo.name}</label>
        <input name="is_done" type="checkbox" bind:checked={todo.is_done} /> 
    </div> 
{/each}
