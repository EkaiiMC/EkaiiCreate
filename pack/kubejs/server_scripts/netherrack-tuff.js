ServerEvents.recipes(event => {

    event.recipes.create.compacting('minecraft:netherrack', ['minecraft:coal', 'minecraft:cobblestone', Fluid.lava(250)])
    event.recipes.create.compacting('minecraft:netherrack', ['minecraft:charcoal', 'minecraft:cobblestone', Fluid.lava(250)])

    event.recipes.create.mixing('minecraft:tuff', ['minecraft:blackstone', Fluid.lava(250)])

})