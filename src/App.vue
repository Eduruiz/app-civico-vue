<template>
    <!DOCTYPE html>
    <html lang="pt">
        <head>
            <meta charset="UTF-8">
            <title>Teste App Civico</title>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        </head>
        <body>
            <div id="app">
                <Goals/>
            </div>
        </body>
    </html>
</template>

<script>
import Goals from './components/Goals'

export default {
  name: 'App',
  components: {
    Goals
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Poppins:300,400,500|Roboto+Mono:500,700");

*, *:before, *:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --color-main: #4d4841;
    --color-secondary: #4d4841;
    --color-black: #000;
}

body {
    font-family: 'Poppins', sans-serif;
    line-height: 1.4;
    font-size: 18px;
    color: rgba(0, 0, 0, .84);
}
</style>
