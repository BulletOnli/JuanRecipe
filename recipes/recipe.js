const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '038e7e3067msh00bc5ca5671eb5fp1fbee1jsn33c3d7389be9',
		'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
	}
};

async function getData(resultNum) {
    try {
        const response = await fetch('https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes', options)
        if (!response.ok) throw new Error(response.status)
        const data = await response.json()

        const result = data.results[resultNum]
        const recipeImg = result.thumbnail_url
        const recipeName = result.name
        const description = result.description
        const ingredients = result.sections[0].components
        const instructions = result.instructions

        document.querySelector('.recipeImage').src = recipeImg
        document.querySelector('.recipeName').textContent = recipeName
        document.querySelector('.description').textContent = `- ${description}`

        create()
        function create() {
            // Ingredients
            let num = 0
            ingredients.forEach(ingredient => {
                num++
                const p = document.createElement('p')
                p.innerText = `${num}. ${ingredient.raw_text}`
                p.className = 'ingredients'
                document.querySelector('.ingredientContainer').appendChild(p)
            });

            // Instructions
            let num2 = 0
            instructions.forEach(instruction => {
                num2++
                const p = document.createElement('p')
                p.innerText = `${num2}. ${instruction.display_text}`
                p.className = 'instructions'
                document.querySelector('.instructionTitle').appendChild(p)
            })

        }

    } catch (err) {
        console.log(err)
    }
}
