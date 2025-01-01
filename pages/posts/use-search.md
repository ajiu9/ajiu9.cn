---
title: '在页面上实现当前搜索查询，支持快捷键搜索'
lang: zh
date: 2024-06-14T00:00:00Z
type: note
---

先看效果：
![image](/images/20240702165015.gif)

实现思路：1.加载完所有数据后，处理数据，得到源数据。2.在搜索框中输入关键字，触发搜索事件，根据关键字过滤源数据，得到搜索结果。

### 代码实现

search 文件
```vue
// search.vue
<template>
	<div class="search-wrapper">
		<el-input
			v-model.trim="keyword"
			class="border-bottom"
			placeholder="请输入参数"
			clearable
			@focus="onInputFocus"
			@blur="onInputBlur"
		>
			<span slot="append"> {{ currentNumber }}/{{ filterCount }} </span>
		</el-input>
		<el-divider direction="vertical"/>
		<i
			class="el-icon-arrow-up pointer ml-1"
			:class="filterCount && currentNumber !== 1 ? '' : 'disabled'"
			@click="onSearchPrev"
		/>
		<i
			class="el-icon-arrow-down pointer ml-2"
			:class="filterCount && currentNumber !== filterCount ? '' : 'disabled'"
			@click="onSearchNext"
		/>
	</div>
</template>

<script>
import { useSearch } from './index'

export default {
	name: 'SearchFocus',
	props: {
		allFields: {
			type: [Array, Function],
			default: () => []
		},
		fieldsBefore: {
			type: Function,
			default: () => new Promise(resolve => resolve())
		},
		onChange: {
			type: Function,
			default: () => {}
		}
	},
	setup(props) {
		const {
			keyword,
			filterCount,
			currentNumber,
			onSearchNext,
			onSearchPrev,
			onInputFocus,
			onInputBlur
		} = useSearch({
			allFields: props.allFields,
			fieldsBefore: props.fieldsBefore,
			onChange: props.onChange
		})
		return {
			keyword,
			filterCount,
			currentNumber,
			onSearchNext,
			onSearchPrev,
			onInputFocus,
			onInputBlur
		}
	}
}
</script>

<style lang="less" scoped>
.search-wrapper {
	display: flex;
	line-height: 32px;
	align-items: center;
	.disabled {
		color: #c0c4cc;
		cursor: not-allowed;
	}
	.ml-1 {
		margin-left: 10px;
	}
	.ml-2 {
		margin-left: 20px;
	}
}
</style>

<style lang="less">
.heighlight {
	.el-form-item__label span {
		background: yellow;
	}
}
</style>

```

until 文件
```js
// until.js
export function getAllData(data) {
	const ret = []

	data.forEach(item => {
		const { field, el } = item
		ret.push({
			el,
			field,
			label: getFieldName(el),
			prop: el.prop
		})
	})
	return ret
}

function getFieldName(formItemVNode) {
	// 按照el-form-item的label的规则
	// 优先展示slot:label的文本，如果没有再展示label属性的值
	let name = ''
	if (formItemVNode.$slots?.label) {
		const label = formItemVNode.$slots.label[0]
		name = label.elm.innerText
	}
	return name || formItemVNode.label
}
```

index 文件
```js
// index.js
import { computed, getCurrentInstance, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { addClass, removeClass } from 'tool'
import { getAllData } from './util'

/**
 *
 * @param {function} fieldsBefore 获取所有查询字段前的函数，需要返回Promise
 * @param {function, Array} allFields 获取所有查询字段的函数或数组
 * @param {function} onChange 查询事件
 * @returns
 */

function useSearch({ fieldsBefore, allFields = [], onChange } = {}) {
	const { proxy } = getCurrentInstance()
	const allFieldsList = ref([])

	const current = ref(-1)
	const currentNumber = computed(() => {
		if (current.value === -1) return 0
		return current.value + 1
	})

	const inputElIsFocus = ref(false)
	const onInputFocus = () => (inputElIsFocus.value = true)
	const onInputBlur = () => (inputElIsFocus.value = false)

	// 缓存前一个元素
	const prevEl = ref(null)

	const filterFieldsData = ref([])
	const filterCount = computed(() => filterFieldsData.value.length)

	const changeEvent = () => {
		if (onChange && typeof onChange === 'function') {
			const currentField =
				filterCount.value > 0 ? filterFieldsData.value[current.value].field : null
			onChange({ currentField })
		}

		if (prevEl.value) {
			removeClass(prevEl.value, 'heighlight')
		}

		if (!filterCount.value) return

		const el = filterFieldsData.value[current.value].el.$el
		addClass(el, 'heighlight')
		prevEl.value = el
		proxy.$nextTick(() => {
			el.scrollIntoView()
		})
	}

	const keyword = ref('')
	watch(keyword, val => {
		proxy.$delay.register(
			'paramtersFilter',
			() => {
				if (!val) {
					filterFieldsData.value = []
				} else {
					filterFieldsData.value = allFieldsList.value.filter(item => {
						return item.label.includes(val)
					})
				}
				if (filterCount.value === 0) {
					current.value = -1
				} else {
					current.value = 0
				}
				changeEvent()
			},
			800
		)
	})

	const onSearchNext = () => {
		if (!filterCount.value) return
		if (current.value === filterCount.value - 1) current.value = 0
		else current.value = current.value + 1

		changeEvent()
	}
	const onSearchPrev = () => {
		if (!filterCount.value) return
		if (current.value === 0) current.value = filterCount.value - 1
		else current.value = current.value - 1

		changeEvent()
	}

	onMounted(async () => {
		console.log('fieldsBefore', fieldsBefore.toString())
		if (fieldsBefore && typeof fieldsBefore === 'function') await fieldsBefore()
		if (allFields && typeof allFields === 'function') {
			allFieldsList.value = allFields()
		} else {
			allFieldsList.value = allFields
		}

		console.log('allFieldsList', allFieldsList.value)
		// Bind keyEvent
		proxy.$keyMap.bind(['enter'], () => {
			if (!inputElIsFocus.value) return
			proxy.$delay.register(
				'onSearchNextText',
				() => {
					if (filterCount.value === 0) return
					onSearchNext()
				},
				500
			)
		})
		proxy.$keyMap.bind(['shift+enter'], () => {
			if (!inputElIsFocus.value) return
			proxy.$delay.register(
				'onSearchPrevText',
				() => {
					if (filterCount.value === 0) return
					onSearchPrev()
				},
				500
			)
		})
	})

	onBeforeUnmount(() => {
		proxy.$keyMap.unbind(['enter', 'shift+enter'])
	})
	return {
		keyword,
		filterCount,
		currentNumber,
		onSearchNext,
		onSearchPrev,
		onInputFocus,
		onInputBlur
	}
}

export { useSearch, getAllData, useSearch as default }

```

### 使用：
```vue
<template>
<SearchFocus
			slot="btn-group"
			:all-fields="allFields"
			:fields-before="fieldsBefore"
			:on-change="onChangeEvent"
		/>
</template>

<script>

import { getAllData } from '@/hooks/useSearch'

export default {
	components: {
		SearchFocus,
	},

	setup() {
		const { proxy } = getCurrentInstance()

		const fieldsBefore = async () => {
			await until(permissionLoaded).toBe(true)
			await until(allMounted).toBe(true)
		}
		const allFields = () => {
			const data = []
			formWrapper.value.forEach(item => {
				item.formRef?.fields.forEach(el => {
					data.push({
						field: item.field,
						el
					})
				})
			})
			return getAllData(data)
		}
		const onChangeEvent = data => {
			activeName.value = data.currentField || INIT_ACTIVE_NAME
		}

		return {
			fieldsBefore,
			allFields,
			onChangeEvent
		}
	}
}
</script>

<style lang="less" scoped>
.tabs-wrapper {
	height: 100%;
	overflow-y: scroll;
	::v-deep .el-tabs__content {
		height: 100%;
		overflow-y: auto;
	}
}
</style>

<style lang="less">
.w-1 {
	width: 100px;
}
.w-4 {
	width: 400px;
}
.ml-2 {
	margin-left: 20px;
}
.ml-4 {
	margin-left: 40px;
}
.textarea.el-textarea .el-textarea__inner {
	padding-right: 60px;
}
.textarea.el-input .el-input__inner {
	padding-right: 60px;
}
.center .el-input__inner {
	text-align: center;
}
.parameter-tip {
	&.el-tooltip__popper {
		border: 1px solid #e1e9ea;
		background-color: #f6ffaf;
		color: #333;
		line-height: 24px;
		.popper__arrow::after {
			border-right-color: #f6ffaf;
		}
		.popper__arrow {
			border-right-color: #e1e9ea;
		}
	}
}
</style>

```
