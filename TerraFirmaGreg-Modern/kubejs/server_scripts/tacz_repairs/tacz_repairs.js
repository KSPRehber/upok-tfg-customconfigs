PlayerEvents.tick(event => {
    if (event.level.clientSide) return;

    var player = event.player;
    var mainHand = player.mainHandItem;

    // 1. Check if the item belongs to the gun mods
    if (mainHand.id.startsWith('tacz:') || mainHand.id.startsWith('hamster:') || mainHand.id.startsWith('qkl:')) {

        // 2. Crack open the NBT data to find the TRUE gun ID
        var realGunId = mainHand.id; // Fallback
        if (mainHand.hasNBT() && mainHand.nbt.contains('GunId')) {
            // This extracts "tacz:ak47" instead of "tacz:modern_kinetic_gun"
            realGunId = mainHand.nbt.getString('GunId');
        }

        // 3. Check if the gun is completely broken
        if (mainHand.maxDamage > 0 && mainHand.damageValue >= mainHand.maxDamage) {

            // 4. Pass the REAL Gun ID into our function!
            var drops = getSpecificSalvage(realGunId);

            if (drops.length > 0) {
                drops.forEach(lootItem => { player.give(lootItem); });
                player.tell('§cYour weapon broke down! §fYou got back the functional components.');
            } else {
                player.give('2x gtceu:steel_plate');
                player.give('1x gtceu:steel_rod');
                player.tell('§cYour weapon broke down! §fYou got back the functional components.');
            }

            // 5. Delete the broken gun
            mainHand.count = 0;
        }
    }
});

// Your working lookup function stays exactly the same!
function getSpecificSalvage(id) {
    switch (id) {
        case 'hamster:martinihenry':
            return ['1x tfg:flintlock_mechanism', '1x gtceu:blue_steel_plate'];

        case 'hamster:coltm1851':
            return ['1x tfg:flintlock_mechanism', '1x gtceu:double_steel_plate'];

        case 'hamster:colt1873':
            return ['1x tfg:flintlock_mechanism', '2x gtceu:double_steel_plate'];

        case 'hamster:coltm1892':
            return ['1x tfg:flintlock_mechanism', '1x gtceu:steel_plate'];

        case 'qkl:fk15':
            return ['1x tfg:flintlock_mechanism', '2x gtceu:brass_ingot'];

        case 'qkl:fk15p':
            return ['1x tfg:flintlock_mechanism', '1x gtceu:wrought_iron_ingot', '1x gtceu:brass_ingot'];

        case 'hamster:sharps':
            return ['2x gtceu:blue_steel_plate'];

        case 'hamster:one_barrel':
            return ['1x gtceu:blue_steel_plate', '1x gtceu:steel_plate'];

        case 'qkl:1860':
            return ['1x tfg:flintlock_mechanism', '1x gtceu:steel_plate'];

        case 'hamster:webley':
            return ['1x tfg:flintlock_mechanism', '6x tfc:metal/ingot/black_steel'];

        case 'hamster:nagantm1895':
            return ['1x tfg:flintlock_mechanism', '4x tfc:metal/ingot/black_steel'];

        case 'hamster:lugerp08':
            return ['1x tfg:flintlock_mechanism', '3x gtceu:red_steel_rod'];

        case 'tacz:m1911':
            return ['1x tfg:flintlock_mechanism', '3x gtceu:red_steel_rod'];

        case 'hamster:makarov':
            return ['1x tfg:flintlock_mechanism', '2x tfc:metal/ingot/black_steel'];

        case 'hamster:m1887':
            return ['1x tfg:flintlock_mechanism', '4x tfc:metal/ingot/blue_steel', '4x tfc:metal/ingot/red_steel'];

        case 'hamster:mp18':
            return ['1x tfg:flintlock_mechanism', '6x tfc:metal/ingot/blue_steel', '6x tfc:metal/ingot/red_steel'];

        case 'hamster:mg1417':
            return ['1x tfg:flintlock_mechanism', '10x tfc:metal/ingot/blue_steel', '10x tfc:metal/ingot/red_steel'];

        case 'hamster:madsen':
            return ['1x tfg:flintlock_mechanism', '8x tfc:metal/ingot/blue_steel', '8x tfc:metal/ingot/red_steel'];

        case 'hamster:gew98':
            return ['1x tfg:flintlock_mechanism', '3x tfc:metal/ingot/blue_steel', '3x tfc:metal/ingot/red_steel'];

        case 'hamster:m1903':
            return ['1x tfg:flintlock_mechanism', '3x tfc:metal/ingot/blue_steel', '3x tfc:metal/ingot/red_steel'];

        case 'hamster:type99':
            return ['1x tfg:flintlock_mechanism', '3x tfc:metal/ingot/blue_steel', '3x tfc:metal/ingot/red_steel'];

        case 'hamster:smle_mk3':
            return ['1x tfg:flintlock_mechanism', '4x tfc:metal/ingot/blue_steel', '4x tfc:metal/ingot/red_steel'];

        case 'hamster:mosin9130':
            return ['1x tfg:flintlock_mechanism', '4x tfc:metal/ingot/blue_steel', '4x tfc:metal/ingot/red_steel'];

        case 'hamster:krag':
            return ['1x tfg:flintlock_mechanism', '2x tfc:metal/ingot/blue_steel', '1x tfc:metal/ingot/red_steel'];

        case 'hamster:berthier':
            return ['1x tfg:flintlock_mechanism', '2x tfc:metal/ingot/blue_steel', '2x tfc:metal/ingot/red_steel'];

        case 'hamster:win1894':
            return ['1x tfg:flintlock_mechanism', '2x tfc:metal/ingot/black_steel', '2x tfc:metal/ingot/red_steel'];

        case 'hamster:win1873':
            return ['1x tfg:flintlock_mechanism', '2x tfc:metal/ingot/black_steel', '2x tfc:metal/ingot/red_steel'];

        case 'hamster:lebel1886':
            return ['1x tfg:flintlock_mechanism', '2x tfc:metal/ingot/black_steel', '2x tfc:metal/ingot/red_steel'];

        default:
            return [];
    }
}