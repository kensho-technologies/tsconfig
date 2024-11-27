interface Item {
  name: string
  type: 'fruit' | 'vegetable'
}

const produce: Item[] = [
  {name: 'apple', type: 'fruit'},
  {name: 'banana', type: 'fruit'},
  {name: 'carrot', type: 'vegetable'},
]

const result = Map.groupBy(produce, (item) => item.type)

console.log(result.get('fruit'))
