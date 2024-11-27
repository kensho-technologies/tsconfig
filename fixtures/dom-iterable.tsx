const formData = new FormData()
formData.set('name', 'Aliza')

for (const [key, value] of formData) {
  console.log(key, value)
}
