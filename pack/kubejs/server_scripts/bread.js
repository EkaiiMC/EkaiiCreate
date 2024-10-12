ServerEvents.tags('item', event => {

    event.add('forge:bread_slices', 'createfood:bread_slice')

})

ServerEvents.recipes(event => {

    event.replaceInput(
        { input : 'createfood:bread_slice' },
        'createfood:bread_slice',
        { tag: 'forge:bread_slices' }
    )

})

