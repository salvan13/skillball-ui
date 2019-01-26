<template>
    <div class="scoreboard">
        <ul class="score-box">
            <li class="score-data turn">ROUND {{ turn }}</li>
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
    max-width: 25%;
    height: 20vh;
    border: 2px solid white;
}
.score-box {
    padding: 20px;
    list-style: none;
    color: white;
    width: 20vh;
    font-size: 2vh;
}
.score-data {
    margin: 5px 0;
    display: flex;
    justify-content: space-between;
    width: 100%;
}
.turn {
    justify-content: center;
}
.score-striker {
    color: blue;
    font-weight: bold;
    background-color: white;
    text-align: left;

}
.score-goalkeeper {
    color: red;
    font-weight: bold;
    background-color: white;
    text-align: left;
}
</style>


