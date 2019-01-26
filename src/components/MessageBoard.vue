<template>
    <div class="message-board">
        > {{ msg }}
    </div>
</template>

<script>
export default {
    props: {
        moves: {
            type: Object,
            required: true
        }
    },
    computed: {
        msg: function() {
            if (this.moves === undefined) {
                return 'Make your move'
            }
            if (!this.moves.p1 && !this.moves.p0) {
                return 'Make your move'
            } else if (!this.moves.p1) {
                return 'Waiting for striker move'
            } else {
                return 'Waiting for goalkeeper move'
            }
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
