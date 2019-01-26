<template>
    <div class="message-board">
        > {{ msg }}
    </div>
</template>

<script>
export default {
    props: {
        msg: {
            type: String,
            default: 'Make your move'
        }
    }
}
</script>

<style>
.message-board {
    width: 75%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: white;
    font-size: 6vh;
    height: 10vh;
    border-radius: 10px;
    background-color: #195050;
    padding: 0 2%;
}
</style>
