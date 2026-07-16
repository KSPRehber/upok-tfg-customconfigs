ServerEvents.recipes(event => {

    //flintlock rifle

    event.shaped(
        Item.of('tacz:modern_kinetic_gun').withNBT({
            GunCurrentAmmoCount: 0,
            GunFireMode: "SEMI",
            GunId: "qkl:fk15",
            HasBulletInBarrel: 1
        }),
        [
            'ADC',
            'TFE',
            'GBC'
        ],
        {
            A: '#forge:tools/files',
            B: '#tfg:hardwood',
            C: '#forge:ingots/brass',
            D: 'tfg:flintlock_mechanism',
            E: 'firmaciv:cannon_barrel',
            F: 'kerman:light_iron_gunpack',
            G: 'gtceu:wrought_iron_spring',
            T: '#forge:tools/saws'
            
        }
    );

    //flintlock pistol

    event.shaped(
        Item.of('tacz:modern_kinetic_gun').withNBT({
            GunCurrentAmmoCount: 0,
            GunFireMode: "SEMI",
            GunId: "qkl:fk15p",
            HasBulletInBarrel: 1
        }),
        [
            'ADC',
            'TFE',
            'GBC'
        ],
        {
            A: '#forge:tools/files',
            B: '#tfg:hardwood',
            C: '#forge:ingots/brass',
            D: 'tfg:flintlock_mechanism',
            E: 'gtceu:wrought_iron_ingot',
            F: 'gtceu:wrought_iron_ingot',
            G: 'gtceu:wrought_iron_spring',
            T: '#forge:tools/saws'

        }
    );

    //colt 1892 new army

    event.shaped(
        Item.of('tacz:modern_kinetic_gun').withNBT({
            GunCurrentAmmoCount: 0,
            GunFireMode: "SEMI",
            GunId: "hamster:coltm1892",
            HasBulletInBarrel: 1
        }),
        [
            'ABC',
            'DEF',
            'GHU'
        ],
        {
            A: '#forge:tools/saws',
            B: 'tfg:flintlock_mechanism',
            C: 'gtceu:steel_ring',
            D: 'kerman:light_black_steel_gunpack',
            E: 'gtceu:steel_plate',
            F: 'firmaciv:cannon_barrel',
            G: '#forge:tools/files',
            H: '#tfg:hardwood',
            U: 'gtceu:steel_spring'

        }
    );

    //colt 1852 conversion

    event.shaped(
        Item.of('tacz:modern_kinetic_gun').withNBT({
            GunCurrentAmmoCount: 0,
            GunFireMode: "SEMI",
            GunId: "hamster:coltm1851",
            HasBulletInBarrel: 1
        }),
        [
            'ABC',
            'DEF',
            'GHU'
        ],
        {
            A: '#forge:tools/saws',
            B: 'tfg:flintlock_mechanism',
            C: 'gtceu:steel_ring',
            D: 'gtceu:double_steel_plate',
            E: 'kerman:light_steel_gunpack',
            F: 'firmaciv:cannon_barrel',
            G: '#forge:tools/files',
            H: 'minecraft:stick',
            U: 'gtceu:steel_spring'

        }
    );

    //1873 peacemaker

    event.shaped(
        Item.of('tacz:modern_kinetic_gun').withNBT({
            GunCurrentAmmoCount: 0,
            GunFireMode: "SEMI",
            GunId: "hamster:colt1873",
            HasBulletInBarrel: 1
        }),
        [
            'ABC',
            'DEF',
            'GHH'
        ],
        {
            A: '#forge:tools/saws',
            B: 'tfg:flintlock_mechanism',
            C: 'gtceu:steel_ring',
            D: 'kerman:light_iron_gunpack',
            E: 'kerman:light_steel_gunpack',
            F: 'firmaciv:cannon_barrel',
            G: '#forge:tools/files',
            H: 'gtceu:double_steel_plate'

        }
    );

    //martini henry

    event.shaped(
        Item.of('tacz:modern_kinetic_gun').withNBT({
            GunCurrentAmmoCount: 0,
            GunFireMode: "SEMI",
            GunId: "hamster:martinihenry",
            HasBulletInBarrel: 1
        }),
        [
            'ABC',
            'DEE',
            'GHF'
        ],
        {
            A: '#forge:tools/saws',
            B: 'tfg:flintlock_mechanism',
            C: 'gtceu:steel_ring',
            D: 'kerman:heavy_steel_gunpack',
            E: 'gtceu:blue_steel_plate',
            G: '#forge:tools/files',
            H: '#tfg:hardwood',
            F: 'gtceu:steel_spring'

        }
    );

    //sharpshooter rifle

    event.shaped(
        Item.of('tacz:modern_kinetic_gun').withNBT({
            GunCurrentAmmoCount: 0,
            GunFireMode: "SEMI",
            GunId: "hamster:sharps",
            HasBulletInBarrel: 1
        }),
        [
            'ABC',
            'DEE',
            'GHF'
        ],
        {
            A: '#forge:tools/saws',
            B: 'kerman:light_steel_gunpack',
            C: 'gtceu:steel_ring',
            D: 'kerman:heavy_steel_gunpack',
            E: 'gtceu:blue_steel_plate',
            G: '#forge:tools/files',
            H: '#tfg:hardwood',
            F: 'gtceu:steel_spring'

        }
    );

    //henry model 1860

    event.shaped(
        Item.of('tacz:modern_kinetic_gun').withNBT({
            GunCurrentAmmoCount: 0,
            GunFireMode: "SEMI",
            GunId: "qkl:1860",
            HasBulletInBarrel: 1
        }),
        [
            'ABC',
            'DEZ',
            'GFF'
        ],
        {
            A: '#forge:tools/saws',
            B: 'tfg:flintlock_mechanism',
            C: 'gtceu:steel_ring',
            D: 'kerman:medium_steel_gunpack',
            E: 'kerman:light_black_steel_gunpack',
            Z: 'gtceu:steel_plate',
            G: '#forge:tools/files',
            F: '#tfg:hardwood'

        }
    );

    //hammer shotgun

    event.shaped(
        Item.of('tacz:modern_kinetic_gun').withNBT({
            GunCurrentAmmoCount: 0,
            GunFireMode: "SEMI",
            GunId: "hamster:one_barrel",
            HasBulletInBarrel: 1
        }),
        [
            'ABC',
            'DEZ',
            'GFH'
        ],
        {
            A: '#forge:tools/saws',
            B: 'tfg:flintlock_mechanism',
            C: 'gtceu:steel_ring',
            D: 'kerman:heavy_steel_gunpack',
            E: 'gtceu:blue_steel_plate',
            Z: 'gtceu:steel_plate',
            G: '#forge:tools/files',
            F: '#tfg:hardwood',
            H: 'gtceu:steel_spring'

        }
    );

    //springfield 1873

    event.shaped(
        Item.of('tacz:modern_kinetic_gun').withNBT({
            GunCurrentAmmoCount: 0,
            GunFireMode: "SEMI",
            GunId: "tacz:springfield1873",
            HasBulletInBarrel: 1
        }),
        [
            'ABC',
            'DEE',
            'GHF'
        ],
        {
            A: '#forge:tools/saws',
            B: 'tfg:flintlock_mechanism',
            C: 'gtceu:steel_ring',
            D: 'kerman:heavy_steel_gunpack',
            E: 'gtceu:red_steel_plate',
            G: '#forge:tools/files',
            H: '#tfg:hardwood',
            F: 'gtceu:steel_spring'

        }
    );

    //makarov

    event.recipes.gtceu.assembler('tfg_tacz:makarov')
        .itemInputs('1x gtceu:steel_small_fluid_pipe', '5x #forge:ingots/black_steel', '#forge:rods/red_steel',
            '8x gtceu:treated_wood_planks', '4x #forge:screws/black_steel', 'tfg:flintlock_mechanism')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs(Item.of('tacz:modern_kinetic_gun',
            '{GunCurrentAmmoCount:0,GunFireMode:"SEMI",GunId:"hamster:makarov",HasBulletInBarrel:1b}'))
        .circuit(1)
        .EUt(GTValues.VA[GTValues.LV])
        .duration(120)

        //m1911

    event.recipes.gtceu.assembler('tfg_tacz:1911')
        .itemInputs('4x gtceu:steel_small_fluid_pipe', '14x #forge:ingots/black_steel', '3x #forge:rods/red_steel',
            '16x gtceu:treated_wood_planks', '10x #forge:screws/black_steel', 'tfg:flintlock_mechanism')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs(Item.of('tacz:modern_kinetic_gun',
            '{GunCurrentAmmoCount:0,GunFireMode:"SEMI",GunId:"tacz:m1911",HasBulletInBarrel:1b}'))
        .circuit(5)
        .EUt(GTValues.VA[GTValues.LV])
        .duration(120)

        //webley MK VI

    event.recipes.gtceu.assembler('tfg_tacz:webley')
        .itemInputs('4x gtceu:steel_small_fluid_pipe', '16x #forge:ingots/black_steel', '3x #forge:rods/red_steel',
            '24x gtceu:treated_wood_planks', '12x #forge:screws/black_steel', 'tfg:flintlock_mechanism')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 288))
        .itemOutputs(Item.of('tacz:modern_kinetic_gun',
            '{GunCurrentAmmoCount:0,GunFireMode:"SEMI",GunId:"hamster:webley",HasBulletInBarrel:1b}'))
        .circuit(3)
        .EUt(GTValues.VA[GTValues.LV])
        .duration(120)

        //nagant 1895

    event.recipes.gtceu.assembler('tfg_tacz:nagant')
        .itemInputs('3x gtceu:steel_small_fluid_pipe', '14x #forge:ingots/black_steel', '2x #forge:rods/red_steel',
            '16x gtceu:treated_wood_planks', '10x #forge:screws/black_steel', 'tfg:flintlock_mechanism')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 288))
        .itemOutputs(Item.of('tacz:modern_kinetic_gun',
            '{GunCurrentAmmoCount:0,GunFireMode:"SEMI",GunId:"hamster:nagantm1895",HasBulletInBarrel:1b}'))
        .circuit(4)
        .EUt(GTValues.VA[GTValues.LV])
        .duration(120)

        //luger

    event.recipes.gtceu.assembler('tfg_tacz:luger')
        .itemInputs('3x gtceu:steel_small_fluid_pipe', '7x #forge:ingots/black_steel', '3x #forge:rods/red_steel',
            '16x gtceu:treated_wood_planks', '10x #forge:screws/black_steel', 'tfg:flintlock_mechanism', '4x gtceu:steel_plate', 'gtceu:black_steel_ring')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs(Item.of('tacz:modern_kinetic_gun',
            '{GunCurrentAmmoCount:0,GunFireMode:"SEMI",GunId:"hamster:lugerp08",HasBulletInBarrel:1b}'))
        .circuit(1)
        .EUt(GTValues.VA[GTValues.LV])
        .duration(120)

    //gew98

    event.recipes.gtceu.assembler('tfg_tacz:gew98')
        .itemInputs('10x tfc:metal/ingot/red_steel', '10x tfc:metal/ingot/blue_steel', 'tfg:flintlock_mechanism',
            '8x gtceu:blue_steel_spring', '10x tfc:metal/ingot/black_steel', 'firmaciv:cannon_barrel', '8x gtceu:steel_plate', '32x gtceu:treated_wood_planks')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 1000))
        .itemOutputs(Item.of('tacz:modern_kinetic_gun',
            '{GunCurrentAmmoCount:0,GunFireMode:"SEMI",GunId:"hamster:gew98",HasBulletInBarrel:1b}'))
        .circuit(1)
        .EUt(GTValues.VA[GTValues.LV])
        .duration(240)

    //type 99

    event.recipes.gtceu.assembler('tfg_tacz:type99')
        .itemInputs('10x tfc:metal/ingot/red_steel', '10x tfc:metal/ingot/blue_steel', 'tfg:flintlock_mechanism',
            '8x gtceu:blue_steel_spring', '10x tfc:metal/ingot/black_steel', 'firmaciv:cannon_barrel', '8x gtceu:steel_plate', '32x gtceu:treated_wood_planks')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 1000))
        .itemOutputs(Item.of('tacz:modern_kinetic_gun',
            '{GunCurrentAmmoCount:0,GunFireMode:"SEMI",GunId:"hamster:type99",HasBulletInBarrel:1b}'))
        .circuit(9)
        .EUt(GTValues.VA[GTValues.LV])
        .duration(240)

    //sprinfield 1903

    event.recipes.gtceu.assembler('tfg_tacz:springfield1903')
        .itemInputs('10x tfc:metal/ingot/red_steel', '10x tfc:metal/ingot/blue_steel', 'tfg:flintlock_mechanism',
            '8x gtceu:blue_steel_spring', '10x tfc:metal/ingot/black_steel', 'firmaciv:cannon_barrel', '8x gtceu:steel_plate', '32x gtceu:treated_wood_planks')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 1000))
        .itemOutputs(Item.of('tacz:modern_kinetic_gun',
            '{GunCurrentAmmoCount:0,GunFireMode:"SEMI",GunId:"hamster:m1903",HasBulletInBarrel:1b}'))
        .circuit(3)
        .EUt(GTValues.VA[GTValues.LV])
        .duration(240)

    //mosin nagant

    event.recipes.gtceu.assembler('tfg_tacz:mosin')
        .itemInputs('15x tfc:metal/ingot/red_steel', '15x tfc:metal/ingot/blue_steel', 'tfg:flintlock_mechanism',
            '8x gtceu:blue_steel_spring', '12x tfc:metal/ingot/black_steel', 'firmaciv:cannon_barrel', '10x gtceu:steel_plate', '32x gtceu:treated_wood_planks')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 1000))
        .itemOutputs(Item.of('tacz:modern_kinetic_gun',
            '{GunCurrentAmmoCount:0,GunFireMode:"SEMI",GunId:"hamster:mosin9130",HasBulletInBarrel:1b}'))
        .circuit(4)
        .EUt(GTValues.VA[GTValues.LV])
        .duration(240)

    //lee enfield

    event.recipes.gtceu.assembler('tfg_tacz:lee')
        .itemInputs('16x tfc:metal/ingot/red_steel', '16x tfc:metal/ingot/blue_steel', 'tfg:flintlock_mechanism',
            '12x gtceu:blue_steel_spring', '14x tfc:metal/ingot/black_steel', 'firmaciv:cannon_barrel', '14x gtceu:steel_plate', '32x gtceu:treated_wood_planks')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 1000))
        .itemOutputs(Item.of('tacz:modern_kinetic_gun',
            '{GunCurrentAmmoCount:0,GunFireMode:"SEMI",GunId:"hamster:smle_mk3",HasBulletInBarrel:1b}'))
        .circuit(5)
        .EUt(GTValues.VA[GTValues.LV])
        .duration(240)

    //lebel

    event.recipes.gtceu.assembler('tfg_tacz:lebel')
        .itemInputs('8x tfc:metal/ingot/red_steel', '8x tfc:metal/ingot/blue_steel', 'tfg:flintlock_mechanism',
            '6x gtceu:blue_steel_spring', '8x tfc:metal/ingot/black_steel', 'firmaciv:cannon_barrel', '6x gtceu:steel_plate', '32x gtceu:treated_wood_planks')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 1000))
        .itemOutputs(Item.of('tacz:modern_kinetic_gun',
            '{GunCurrentAmmoCount:0,GunFireMode:"SEMI",GunId:"hamster:lebel1886",HasBulletInBarrel:1b}'))
        .circuit(10)
        .EUt(GTValues.VA[GTValues.LV])
        .duration(200)

    //lever action 1873

    event.recipes.gtceu.assembler('tfg_tacz:winn73')
        .itemInputs('8x tfc:metal/ingot/red_steel', 'tfg:flintlock_mechanism',
            '6x gtceu:blue_steel_spring', '8x tfc:metal/ingot/black_steel', 'firmaciv:cannon_barrel', '8x gtceu:steel_plate', '28x gtceu:treated_wood_planks')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 1000))
        .itemOutputs(Item.of('tacz:modern_kinetic_gun',
            '{GunCurrentAmmoCount:0,GunFireMode:"SEMI",GunId:"hamster:win1873",HasBulletInBarrel:1b}'))
        .circuit(1)
        .EUt(GTValues.VA[GTValues.LV])
        .duration(180)

        //lever action 1894

    event.recipes.gtceu.assembler('tfg_tacz:win1894')
        .itemInputs('8x tfc:metal/ingot/red_steel', 'tfg:flintlock_mechanism',
            '8x gtceu:blue_steel_spring', '8x tfc:metal/ingot/black_steel', 'firmaciv:cannon_barrel', '8x gtceu:steel_plate', '28x gtceu:treated_wood_planks')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 1000))
        .itemOutputs(Item.of('tacz:modern_kinetic_gun',
            '{GunCurrentAmmoCount:0,GunFireMode:"SEMI",GunId:"hamster:win1894",HasBulletInBarrel:1b}'))
        .circuit(2)
        .EUt(GTValues.VA[GTValues.LV])
        .duration(180)

    //krag rifle

    event.recipes.gtceu.assembler('tfg_tacz:krag')
        .itemInputs('4x tfc:metal/ingot/red_steel', '6x tfc:metal/ingot/blue_steel', 'tfg:flintlock_mechanism',
            '6x gtceu:blue_steel_spring', '8x tfc:metal/ingot/black_steel', 'firmaciv:cannon_barrel', '6x gtceu:steel_plate', '32x gtceu:treated_wood_planks')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 1000))
        .itemOutputs(Item.of('tacz:modern_kinetic_gun',
            '{GunCurrentAmmoCount:0,GunFireMode:"SEMI",GunId:"hamster:krag",HasBulletInBarrel:1b}'))
        .circuit(7)
        .EUt(GTValues.VA[GTValues.LV])
        .duration(200)

    //madsen

    event.recipes.gtceu.assembler('tfg_tacz:madsenn1')
        .itemInputs('24x tfc:metal/ingot/red_steel', '24x tfc:metal/ingot/blue_steel', 'tfg:flintlock_mechanism',
            '12x gtceu:blue_steel_spring', '24x tfc:metal/ingot/black_steel', 'firmaciv:cannon_barrel', '12x gtceu:steel_plate', '32x gtceu:treated_wood_planks')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 3000))
        .itemOutputs(Item.of('tacz:modern_kinetic_gun',
            '{GunCurrentAmmoCount:0,GunFireMode:"SEMI",GunId:"hamster:madsen",HasBulletInBarrel:1b}'))
        .circuit(8)
        .EUt(GTValues.VA[GTValues.LV])
        .duration(240)

    //mg1417

    event.recipes.gtceu.assembler('tfg_tacz:mg14177')
        .itemInputs('32x tfc:metal/ingot/red_steel', '32x tfc:metal/ingot/blue_steel', 'tfg:flintlock_mechanism',
            '32x gtceu:blue_steel_spring', '28x tfc:metal/ingot/black_steel', 'firmaciv:cannon_barrel', '16x gtceu:steel_plate', '32x gtceu:treated_wood_planks')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 5000))
        .itemOutputs(Item.of('tacz:modern_kinetic_gun',
            '{GunCurrentAmmoCount:0,GunFireMode:"SEMI",GunId:"hamster:mg1417",HasBulletInBarrel:1b}'))
        .circuit(2)
        .EUt(GTValues.VA[GTValues.LV])
        .duration(240)

    //mp18

    event.recipes.gtceu.assembler('tfg_tacz:mp188')
        .itemInputs('16x tfc:metal/ingot/red_steel', '16x tfc:metal/ingot/blue_steel', 'tfg:flintlock_mechanism',
            '12x gtceu:blue_steel_spring', '16x tfc:metal/ingot/black_steel', 'firmaciv:cannon_barrel', '16x gtceu:steel_plate', '16x gtceu:bronze_plate')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 2000))
        .itemOutputs(Item.of('tacz:modern_kinetic_gun',
            '{GunCurrentAmmoCount:0,GunFireMode:"SEMI",GunId:"hamster:mp18",HasBulletInBarrel:1b}'))
        .circuit(1)
        .EUt(GTValues.VA[GTValues.LV])
        .duration(240)

    //1887 lever action shotgun

    event.recipes.gtceu.assembler('tfg_tacz:18877a')
        .itemInputs('10x tfc:metal/ingot/red_steel', '10x tfc:metal/ingot/blue_steel', 'tfg:flintlock_mechanism',
            '8x gtceu:blue_steel_spring', '10x tfc:metal/ingot/black_steel', 'firmaciv:cannon_barrel', '8x gtceu:steel_plate', '12x gtceu:cobalt_brass_ingot')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 1000))
        .itemOutputs(Item.of('tacz:modern_kinetic_gun',
            '{GunCurrentAmmoCount:0,GunFireMode:"SEMI",GunId:"hamster:m1887",HasBulletInBarrel:1b}'))
        .circuit(1)
        .EUt(GTValues.VA[GTValues.LV])
        .duration(200)


    //DB2

    event.recipes.gtceu.assembler('tfg_tacz:db22')
        .itemInputs('7x tfc:metal/ingot/red_steel', '7x tfc:metal/ingot/blue_steel', 'tfg:flintlock_mechanism',
            '4x gtceu:blue_steel_spring', '5x tfc:metal/ingot/black_steel', 'firmaciv:cannon_barrel', '6x gtceu:steel_plate', '8x gtceu:cobalt_brass_ingot')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 500))
        .itemOutputs(Item.of('tacz:modern_kinetic_gun',
            '{GunCurrentAmmoCount:0,GunFireMode:"SEMI",GunId:"tacz:db_short",HasBulletInBarrel:1b}'))
        .circuit(1)
        .EUt(GTValues.VA[GTValues.LV])
        .duration(140)

    //DB4

    event.recipes.gtceu.assembler('tfg_tacz:db44')
        .itemInputs('8x tfc:metal/ingot/red_steel', '8x tfc:metal/ingot/blue_steel', 'tfg:flintlock_mechanism',
            '4x gtceu:blue_steel_spring', '8x tfc:metal/ingot/black_steel', 'firmaciv:cannon_barrel', '12x gtceu:steel_plate', '10x gtceu:cobalt_brass_ingot')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 500))
        .itemOutputs(Item.of('tacz:modern_kinetic_gun',
            '{GunCurrentAmmoCount:0,GunFireMode:"SEMI",GunId:"tacz:db_long",HasBulletInBarrel:1b}'))
        .circuit(1)
        .EUt(GTValues.VA[GTValues.LV])
        .duration(140)

        //berthier

    event.recipes.gtceu.assembler('tfg_tacz:bertyy')
        .itemInputs('6x tfc:metal/ingot/red_steel', '6x tfc:metal/ingot/blue_steel', 'tfg:flintlock_mechanism',
            '6x gtceu:blue_steel_spring', '12x tfc:metal/ingot/black_steel', 'firmaciv:cannon_barrel', '6x gtceu:steel_plate', '32x gtceu:treated_wood_planks')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 500))
        .itemOutputs(Item.of('tacz:modern_kinetic_gun',
            '{GunCurrentAmmoCount:0,GunFireMode:"SEMI",GunId:"hamster:berthier",HasBulletInBarrel:1b}'))
        .circuit(6)
        .EUt(GTValues.VA[GTValues.LV])
        .duration(200)


});