<template>
    <div class="scoreboard">
        <ul class="score-box">
            <li class="score-data">TURNO {{ turn }}</li>
            <li class="score-data score-goalkeeper">
                <div class="title">GOALKEEPER</div>
                <div class="value">{{ score.goalkeeper }}</div>
            </li>
            <li class="score-data score-striker">
                <div class="title">STRIKER</div>
                <div class="value">{{ score.striker }}</div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        turn: {
            required: true,
            type: Number
        },
        score: {
            required: true,
            type: Object
        }
    }
}
</script>

<style>
.scoreboard {
    display: flex;
    justify-content: flex-end;
    margin: 0 8%;
}
.score-box {
    border: 2px solid white;
    padding: 20px;
    list-style: none;
    text-align: left;
    color: white;
    width: 30vh;
}
.score-data {
    margin: 5px 0;
    display: flex;
    justify-content: space-between;
    width: 100%;
}
.score-striker {
    color: blue;
    font-weight: bold;
    background-color: white;
}
.score-goalkeeper {
    color: red;
    font-weight: bold;
    background-color: white;
}
.title {
    justify-items: flex-start;
}
.value {
    justify-items: flex-end;
}
</style>


