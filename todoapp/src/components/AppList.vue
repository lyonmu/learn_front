<template>
<ul class="todo-main">
		<AppItem
			v-for="todoObj in todos"
			:key="todoObj.id"
			:todo="todoObj"
		/>
	</ul>
</template>

<script>
import  AppItem from "./AppItem"
export default {
    name:"AppList",
    props:['todos'],
    components:{
        AppItem
    }
};
</script>

<style scoped>
/*main*/
	.todo-main {
		margin-left: 0px;
		border: 1px solid #ddd;
		border-radius: 2px;
		padding: 0px;
	}

	.todo-empty {
		height: 40px;
		line-height: 40px;
		border: 1px solid #ddd;
		border-radius: 2px;
		padding-left: 5px;
		margin-top: 10px;
	}
</style>
