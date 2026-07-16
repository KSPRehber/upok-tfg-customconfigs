ServerEvents.recipes(event => {

    event.shaped(
        {
            item: 'tacz:ammo',
            count: 4,
            nbt: { AmmoId: "qkl:16mm" }
        },
        [
            'ABC',
            'CEC',
            'GCJ'
        ],
        {
            A: '#forge:tools/mallets',
            B: 'tfc:unrefined_paper',
            C: 'minecraft:gunpowder',
            E: 'gtceu:lead_ingot',
            G: '#forge:tools/saws',
            J: '#forge:tools/files'
        }
    ).id('kubejs:tacz_16_5mm_craft')



    event.shaped(
        {
            item: 'tacz:ammo',
            count: 4,
            nbt: { AmmoId: "tacz:357mag" }
        },
        [
            'ABA',
            ' E ',
            'CAD'
        ],
        {
            A: 'tfg:small_bullet_casing',
            B: '#forge:tools/mallets',
            C: '#forge:tools/files',
            D: '#forge:tools/saws',
            E: 'minecraft:gunpowder',
        }
    ).id('kubejs:tacz:357magnum')



    event.shaped(
        {
            item: 'tacz:ammo',
            count: 4,
            nbt: { AmmoId: "hamster:compact_ammo" }
        },
        [
            ' B ',
            'FE ',
            'CAD'
        ],
        {
            A: 'tfg:small_bullet_casing',
            B: '#forge:tools/mallets',
            C: '#forge:tools/files',
            D: '#forge:tools/saws',
            E: 'minecraft:gunpowder',
            F: 'gtceu:lead_nugget',
        }
    ).id('kubejs:tacz:short')


    event.shaped(
        {
            item: 'tacz:ammo',
            count: 4,
            nbt: { AmmoId: "tacz:45_70" }
        },
        [
            ' B ',
            'FEF',
            'CAD'
        ],
        {
            A: 'tfg:small_bullet_casing',
            B: '#forge:tools/mallets',
            C: '#forge:tools/files',
            D: '#forge:tools/saws',
            E: 'minecraft:gunpowder',
            F: 'gtceu:lead_nugget',
        }
    ).id('kubejs:tacz:45-70')



    event.shaped(
        {
            item: 'tacz:ammo',
            count: 4,
            nbt: { AmmoId: "hamster:medium_ammo" }
        },
        [
            'ABA',
            'EFE',
            'CAD'
        ],
        {
            A: 'tfg:small_bullet_casing',
            B: '#forge:tools/mallets',
            C: '#forge:tools/files',
            D: '#forge:tools/saws',
            E: 'minecraft:gunpowder',
            F: 'gtceu:lead_nugget',
        }
    ).id('kubejs:tacz:medium')



    event.shaped(
        {
            item: 'tacz:ammo',
            count: 4,
            nbt: { AmmoId: "hamster:long_ammo" }
        },
        [
            'EBE',
            'EAE',
            'CFD'
        ],
        {
            A: 'tfg:large_bullet_casing',
            B: '#forge:tools/mallets',
            C: '#forge:tools/files',
            D: '#forge:tools/saws',
            E: 'minecraft:gunpowder',
            F: 'gtceu:lead_nugget',
        }
    ).id('kubejs:tacz:long')



    event.shaped(
        {
            item: 'tacz:ammo',
            count: 2,
            nbt: { AmmoId: "tacz:12g" }
        },
        [
            'EBE',
            'EAE',
            'CFD'
        ],
        {
            A: 'tfg:shell_bullet_casing',
            B: '#forge:tools/mallets',
            C: '#forge:tools/files',
            D: '#forge:tools/saws',
            E: 'minecraft:gunpowder',
            F: 'gtceu:lead_nugget',
        }
    ).id('kubejs:tacz:shells')



    event.shaped(
        'tfg:small_bullet_casing', [
        '   ',
        'AB ',
        '   '
    ],
        {
            A: '#forge:tools/saws',
            B: 'create:brass_ingot',
        }
    );



    event.shaped(
        'tfg:large_bullet_casing', [
        ' B ',
        'AB ',
        ' B '
    ],
        {
            A: '#forge:tools/saws',
            B: 'create:brass_ingot',
        }
    );

    //shell casing

    event.shaped(
        'tfg:shell_bullet_casing', [
        ' B ',
        'AB ',
        '   '
    ],
        {
            A: '#forge:tools/saws',
            B: 'create:brass_ingot',
        }
    );

 


    //short ammo

    event.recipes.gtceu.assembler('tfg_tacz:short_ammo')
        .itemInputs(['minecraft:gunpowder', 'gtceu:lead_nugget']) 
        .inputFluids(Fluid.of('gtceu:brass', 144))        
        .itemOutputs(
            {
                item: 'tacz:ammo',
                count: 6,
                nbt: { AmmoId: "hamster:compact_ammo" }
            },
    )                    
        .EUt(GTValues.VA[GTValues.LV])
        .circuit(1)
        .duration(12);

        //medium ammo

    event.recipes.gtceu.assembler('tfg_tacz:medium_ammoo')
        .itemInputs(['2x minecraft:gunpowder', 'gtceu:lead_nugget'])
        .inputFluids(Fluid.of('gtceu:brass', 432))
        .itemOutputs(
            {
                item: 'tacz:ammo',
                count: 6,
                nbt: { AmmoId: "hamster:medium_ammo" }
            },
        )
        .EUt(GTValues.VA[GTValues.LV])
        .circuit(2)
        .duration(12);

        //long ammo

    event.recipes.gtceu.assembler('tfg_tacz:long_ammo')
        .itemInputs(['4x minecraft:gunpowder', 'gtceu:lead_nugget'])
        .inputFluids(Fluid.of('gtceu:brass', 432))
        .itemOutputs(
            {
                item: 'tacz:ammo',
                count: 6,
                nbt: { AmmoId: "hamster:long_ammo" }
            },
        )
        .EUt(GTValues.VA[GTValues.LV])
        .duration(12);

        //.45acp

    event.recipes.gtceu.assembler('tfg_tacz:45acp')
        .itemInputs(['1x minecraft:gunpowder', 'gtceu:lead_nugget'])
        .inputFluids(Fluid.of('gtceu:brass', 144))
        .itemOutputs(
            {
                item: 'tacz:ammo',
                count: 6,
                nbt: { AmmoId: "tacz:45acp" }
            },
        )
        .EUt(GTValues.VA[GTValues.LV])
        .circuit(2)
        .duration(12);













})