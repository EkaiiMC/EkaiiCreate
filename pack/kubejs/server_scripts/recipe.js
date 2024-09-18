ServerEvents.recipes(event => {
    event.shapeless(
        Item.of('numismatics:cog', 4),
        [
            '4x minecraft:diamond'
        ]
    )

    event.shapeless(
        Item.of('minecraft:diamond', 4),
        [
            '4x numismatics:cog'
        ]
    )

    event.shapeless(
        Item.of('numismatics:cog', 1),
        [
            '4x numismatics:sprocket'
        ]
    )

    event.shapeless(
        Item.of('numismatics:sprocket', 4),
        [
            'numismatics:cog'
        ]
    )

    event.shapeless(
        Item.of('numismatics:sprocket', 1),
        [
            '2x numismatics:bevel'
        ]
    )

    event.shapeless(
        Item.of('numismatics:bevel', 2),
        [
            'numismatics:sprocket'
        ]
    )

    event.shapeless(
        Item.of('numismatics:bevel', 1),
        [
            '8x numismatics:spur'
        ]
    )

    event.shapeless(
        Item.of('numismatics:spur', 8),
        [
            'numismatics:bevel'
        ]
    )

    event.shapeless(
        Item.of('numismatics:crown', 1),
        [
            '8x numismatics:cog'
        ]
    )

    event.shapeless(
        Item.of('numismatics:cog', 8),
        [
            'numismatics:crown'
        ]
    )

    event.shapeless(
        Item.of('numismatics:sun', 1),
        [
            '8x numismatics:crown'
        ]
    )

    event.shapeless(
        Item.of('numismatics:crown', 8),
        [
            'numismatics:sun'
        ]
    )
})