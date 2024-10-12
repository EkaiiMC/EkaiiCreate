ServerEvents.recipes(event => {

    event.remove({output: 'createdeco:industrial_iron_ingot', type: 'create:compacting'})

    event.recipes.create.compacting('createdeco:industrial_iron_block', ['minecraft:iron_block']).heated()

})