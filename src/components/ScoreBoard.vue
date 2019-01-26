<template>
    <div class="scoreboard">
        <ul class="score-box">
            <li class="score-data turn">ROUND {{ turn }}</li>
            <li class="score-data score-goalkeeper" :class="{'active': goalkeeperChanged}">
                <div class="title">GOALKEEPER</div>
                <div class="value">{{ score.goalkeeper }}</div>
            </li>
            <li class="score-data score-striker" :class="{'active': strikerChanged}">
                <div class="title">STRIKER</div>
                <div class="value">{{ score.striker }}</div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data: () => {
        return {
            strikerChanged: false,
            goalkeeperChanged: false,
        }
    },
    props: {
        turn: {
            required: true,
            type: Number
        },
        score: {
            required: true,
            type: Object
        }
    },
    watch: {
        'score.striker': function(newVal, oldVal) {
            this.strikerChanged = true;
            setTimeout(() => {
                this.strikerChanged = false;
            }, 2000);
        },
        'score.goalkeeper': function(newVal, oldVal) {
            this.goalkeeperChanged = true;
            setTimeout(() => {
                this.goalkeeperChanged = false;
            }, 2000);
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
    z-index: 200;
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

.score-data.active {
    transition: all 0.5s ease;
    transform: scale(4) rotate(10deg) translateX(-5vw) translateY(5vw);
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


