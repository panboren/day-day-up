<template>
	<el-table :data="tableData" style="width: 100%" @rowClick="rowClick">
		<el-table-column fixed prop="date" label="Date" width="150" />
		<el-table-column prop="name" label="Name" width="120" />
		<el-table-column prop="state" label="State" width="120" />
		<el-table-column prop="city" label="City" width="120" />
		<el-table-column prop="address" label="Address" width="600" />
		<el-table-column prop="zip" label="Zip" width="120" />
		<el-table-column fixed="right" label="Operations" width="120">
			<template #default="scope">
				<div @click.stop>
					<el-checkbox @click.stop.prevent="select(scope.row,5)" v-model="scope.row.isShow" size="large" />
				</div>
			</template>
		</el-table-column>
	</el-table>
</template>

<script setup>
const select=(data,type)=>{
	console.log(type);
	rowClick(data)
}
const rowClick = (data)=>{
	console.log(data);
	data.isShow= !data.isShow
}
const tableData = [
	{
		date: '2016-05-03',
		name: 'Tom',
		state: 'California',
		city: 'Los Angeles',
		address: 'No. 189, Grove St, Los Angeles',
		zip: 'CA 90036',
		tag: 'Home',
		isShow: true
	},
	{
		isShow: true,
		date: '2016-05-02',
		name: 'Tom',
		state: 'California',
		city: 'Los Angeles',
		address: 'No. 189, Grove St, Los Angeles',
		zip: 'CA 90036',
		tag: 'Office',
	},
]
</script>
