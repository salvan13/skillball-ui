<template>
    <div class="main-pitch">
        <div class="real-pitch">
            <div class="box">
            </div>
            <div class="goal"></div>
        </div>
    </div>
</template>

<style>
.main-pitch {
    background-color: green;
    height: 100vh;
    display: flex;
    margin: auto;
    padding: 2%;
}

.real-pitch {
    border: 1vh solid #fff;
    margin: 12% 6% 2%;
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
</style>

