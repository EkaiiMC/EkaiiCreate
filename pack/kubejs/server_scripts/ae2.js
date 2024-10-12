ServerEvents.recipes(event => {

    event.recipes.create.mixing(['ae2:calculation_processor_press', 'ae2:engineering_processor_press', 'ae2:logic_processor_press', 'ae2:silicon_press'], ['minecraft:nether_star', '2x silentgear:tyrian_steel_block', '2x minecraft:netherite_block']).superheated();

    event.shaped('8x ae2:certus_quartz_crystal', [
        'BCB',
        ' A ',
        'BCB'
    ], {
        A: 'minecraft:nether_star',
        B: 'minecraft:diamond_block',
        C: 'minecraft:netherite_block'
    })

    event.recipes.create.haunting('ae2:sky_dust', 'minecraft:redstone')
})