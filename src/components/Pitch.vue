<template>
    <div class="main-pitch">
        <div class="real-pitch" :class="{'animated': animation.active}">
            <div class="box">
            </div>
            <div class="goal"></div>
            <div class="ball" :data-animation="animation.ball"></div>
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
    background-color: green;
    height: 100vh;
    display: flex;
    margin: 0 auto;
}

.real-pitch {
    border: 1vh solid #fff;
    margin: 6% 6% 2%;
    width: 100%;
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
}

.goal {
    position: relative;
    top: -38vh;
    border: 1vh solid black;
    border-bottom: none;
    width: 20%;
    height: 10vh;
    left: 50%;
    transform: translateX(-50%);
}

.ball {
    background: white;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 50%;
    transition: all 2s ease;
    transform: translateX(0) translateY(40vh);
    z-index: 10;
}

.animated .ball {
    transition-delay: 0.3s;
    transform: translateX(0) translateY(0vh);
}

.animated .ball[data-animation='-1'] {
    transform: translateX(-7vw) translateY(1vh);
}

.animated .ball[data-animation='1'] {
    transform: translateX(7vw) translateY(1vh);
}

.striker {
    background: blue;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 50%;
    transition: all 0.4s ease;
    transform: translateX(0) translateY(45vh);
}

.animated .striker {
    transform: translateX(0) translateY(40vh);
}

.goalkeeper {
    background: red;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 50%;
    transition: all 2s ease;
    transform: translateX(0) translateY(1vh);
}

.animated .goalkeeper {
    transition-delay: 0.5s;
    transform: translateX(0) translateY(0vh);
}

.animated .goalkeeper[data-animation='-1'] {
    transform: translateX(-7vw) translateY(1vh);
}

.animated .goalkeeper[data-animation='1'] {
    transform: translateX(7vw) translateY(1vh);
}

</style>

