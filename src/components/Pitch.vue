<template>
    <div class="main-pitch">
        <div class="instructions">
            <div class="instruction">
                Single click: shoot left
            </div>
            <div class="instruction">Hold button: shot at the center</div>
            <div class="instruction">Double click: shoot right</div>
        </div>
        <div class="real-pitch" :class="{'animated': animation.active}">
            <div class="box">
            </div>
            <div class="goal"></div>
            <div class="ball" :data-animation="animation.ball" :data-goal="animation.goal"></div>
            <div class="striker"></div>
            <div class="goalkeeper" :data-animation="animation.goalkeeper"></div>
        </div>
    </div>
</template>

<script>

export default {
    props: {
        animation: {
            required: true,
            type: Object
        }
    }
}
</script>

<style>
.main-pitch {
    background-color: #2b862b;
    height: 100vh;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
}
.instructions {
    font-size: 26px;
    display: flex;
    justify-content: space-evenly;
    padding: 0 5%;
    font-weight: bold;
    color: white;
}

.real-pitch {
    border: 1vh solid #fff;
    margin: 6% 6% 2%;
    height: 50vh;
    position: relative;
}

.box {
    position: relative;
    top: -1vh;
    border: 1vh solid #fff;
    margin: 0 auto;
    min-width: 40%;
    max-width: 40%;
    min-height: 25vh;
    z-index: 2;
}

.goal {
    position: relative;
    top: -38.5vh;
    border: 1vh solid black;
    border-bottom: none;
    width: 20%;
    height: 10vh;
    left: 50%;
    transform: translateX(-50%);
    background-color: #fff;
    background-size: 2vmin 2vmin;
    background-image: linear-gradient(to right, rgba(0, 0, 0, .2) 1vmin, transparent 1vmin), linear-gradient(to bottom, rgba(0, 0, 0, .2) 1vmin, transparent 1vmin);
}

.ball {
    background: white;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 50%;
    transition: all 0.2s ease;
    transform: translateX(0) translateY(40vh);
    z-index: 100;
    border: 1px solid black;
}

.animated .ball {
    transition: all 2s ease;
    transition-delay: 0.3s;
    transform: translateX(1vw) translateY(0vh);
}

.animated .ball[data-animation='left'] {
    transform: translateX(-7vw) translateY(1vh);
}

.animated .ball[data-animation='right'] {
    transform: translateX(7vw) translateY(1vh);
}

.animated .ball[data-animation='left'][data-goal='1'] {
    transform: translateX(-7vw) translateY(-7vh);
}

.animated .ball[data-animation='right'][data-goal='1'] {
    transform: translateX(7vw) translateY(-7vh);
}

.animated .ball[data-animation='center'][data-goal='1'] {
    transform: translateX(0) translateY(-7vh);
}

.striker {
    background-image: url('../assets/fw.svg');
    background-size: contain;
    width: 45px;
    height: 45px;
    position: absolute;
    top: 0;
    left: 50%;
    transition: all 0.4s ease;
    transform: translateX(0) translateY(45vh);
}

.animated .striker {
    transform: translateX(-1vh) translateY(36vh);
}

.goalkeeper {
    background-image: url('../assets/gk.svg');
    background-size: contain;
    width: 45px;
    height: 45px;
    position: absolute;
    top: 0;
    left: 50%;
    transition: all 2s ease;
    transform: translateX(0) translateY(-4vh);
    z-index: 10;
}

.animated .goalkeeper {
    transition-delay: 0.5s;
    transform: translateX(0) translateY(-2vh);
}

.animated .goalkeeper[data-animation='left'] {
    transform: translateX(-8vw) translateY(0vh) rotate(-90deg);
}

.animated .goalkeeper[data-animation='right'] {
    transform: translateX(6vw) translateY(-1vh) rotate(90deg);
}

</style>

