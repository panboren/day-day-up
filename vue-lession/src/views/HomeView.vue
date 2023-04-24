<script setup>
let data = ref(1)
const add = () => {
	data.value++
}
</script>

<template>
	<div class="box" @click="add">
		{{ data }}
	</div>
</template>
<style lang="scss" scoped>
.box {
	width: 500px;
	height: 500px;
	background: url('./image/1.jpeg') no-repeat;
	background-size: 100% 100%;
}
</style>
