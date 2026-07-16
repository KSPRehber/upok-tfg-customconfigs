"use strict";

// =========================================================================
// CRITICAL PASSTHROUGH FUNCTIONS
// Fixed: Changed to standard functions to fix syntax errors and allow cross-file access
// =========================================================================

function ammoIndexLogic(event) {
	return event.setJson(event.getStdJson());
}

function attachmentIndexLogic(event) {
	return event.setJson(event.getStdJson());
}

function gunIndexLogic(event) {
	return event.setJson(event.getStdJson());
}

function attachmentDataLogic(event) {
	return event.setJson(event.getStdJson());
}

// =========================================================================
// YOUR CUSTOM GUN STATS BALANCING
// =========================================================================

function gunDataLogic(event) {
	const id = event.getId().toString();
	const json = JSON.parse(event.getStdJson());

	// Global 150% headshot multiplier bonus across all weapons
	if (json.bullet && json.bullet.extra_damage) {
		json.bullet.extra_damage.head_shot_multiplier = 1.5;
	}

	switch (id) {
		case "hamster:coltm1851_data":

			// B. DAMAGE & PENETRATION PROFILE
			json.bullet.damage = 10;
			json.bullet.extra_damage.armor_ignore = 0.10;

			// Damage Falloff Array [Distance in Blocks, Resulting Damage Value]
			json.bullet.extra_damage.damage_adjust = [
				{"distance": 10, "damage": 10},
				{"distance": 25, "damage": 8},
				{"distance": 50, "damage": 6},
				{"distance": "infinite", "damage": 4}
			];

			// C. INACCURACY / BULLET BLOOM
			json.inaccuracy = {
				"stand": 4.0,
				"move": 7.0,
				"sneak": 3.0,
				"lie": 2.0,
				"aim": 0.25
			};
			break;

		case "hamster:colt1873_data":

			// B. DAMAGE & PENETRATION PROFILE
			json.bullet.damage = 12;
			json.bullet.extra_damage.armor_ignore = 0.15;

			// Damage Falloff Array [Distance in Blocks, Resulting Damage Value]
			json.bullet.extra_damage.damage_adjust = [
				{"distance": 10, "damage": 12},
				{"distance": 25, "damage": 10},
				{"distance": 50, "damage": 8},
				{"distance": "infinite", "damage": 6}
			];

			// C. INACCURACY / BULLET BLOOM
			json.inaccuracy = {
				"stand": 3.8,
				"move": 6.8,
				"sneak": 2.8,
				"lie": 1.8,
				"aim": 0.15
			};
			break;

		case "hamster:coltm1892_data":

			// B. DAMAGE & PENETRATION PROFILE
			json.bullet.damage = 10;
			json.bullet.extra_damage.armor_ignore = 0.09;

			// Damage Falloff Array [Distance in Blocks, Resulting Damage Value]
			json.bullet.extra_damage.damage_adjust = [
				{"distance": 10, "damage": 10},
				{"distance": 25, "damage": 8},
				{"distance": 50, "damage": 6},
				{"distance": "infinite", "damage": 4}
			];

			// C. INACCURACY / BULLET BLOOM
			json.inaccuracy = {
				"stand": 3.8,
				"move": 6.5,
				"sneak": 2.8,
				"lie": 1.8,
				"aim": 0.15
			};
			// D. RECOIL PROFILE
			json.recoil = {
				"pitch": [
					{ "time": 0, "value": [0.0, 0.0] },    // Lighter, more manageable kick
					{ "time": 0.1, "value": [2.0, 2.5] },
					{ "time": 0.2, "value": [4.0, 5.0] },
					{ "time": 0.4, "value": [-2.0, -2.0] },
					{ "time": 0.6, "value": [0, 0] }
				],
				"yaw": [
					{ "time": 0, "value": [0.0, 0.0] },
					{ "time": 0.1, "value": [-0.4, 0.4] },
					{ "time": 0.3, "value": [-0.8, 0.8] },
					{ "time": 0.5, "value": [0, 0] }
				]
			};
			break;
		case "qkl:fk15p_data":

			// B. DAMAGE & PENETRATION PROFILE
			json.bullet.damage = 14;
			json.bullet.extra_damage.armor_ignore = 0.02;

			// Damage Falloff Array [Distance in Blocks, Resulting Damage Value]
			json.bullet.extra_damage.damage_adjust = [
				{"distance": 10, "damage": 14},
				{"distance": 25, "damage": 10},
				{"distance": 50, "damage": 6},
				{"distance": "infinite", "damage": 2}
			];

			// C. INACCURACY / BULLET BLOOM
			json.inaccuracy = {
				"stand": 4.5,
				"move": 7.5,
				"sneak": 3.5,
				"lie": 2.5,
				"aim": 1.0
			};
			break;
		case "qkl:fk15_data":

			// B. DAMAGE & PENETRATION PROFILE
			json.bullet.damage = 21;
			json.bullet.extra_damage.armor_ignore = 0.04;

			// Damage Falloff Array [Distance in Blocks, Resulting Damage Value]
			json.bullet.extra_damage.damage_adjust = [
				{"distance": 10, "damage": 21},
				{"distance": 25, "damage": 16},
				{"distance": 50, "damage": 8},
				{"distance": "infinite", "damage": 4}
			];

			// C. INACCURACY / BULLET BLOOM
			json.inaccuracy = {
				"stand": 4.0,
				"move": 7.0,
				"sneak": 3.0,
				"lie": 2.0,
				"aim": 0.5
			};
			break;
		case "hamster:sharps_data":

			// B. DAMAGE & PENETRATION PROFILE
			json.bullet.damage = 22;
			json.bullet.extra_damage.armor_ignore = 0.35;

			// Damage Falloff Array [Distance in Blocks, Resulting Damage Value]
			json.bullet.extra_damage.damage_adjust = [
				{"distance": 10, "damage": 22},
				{"distance": 25, "damage": 20},
				{"distance": 50, "damage": 15},
				{"distance": "infinite", "damage": 10}
			];

			// C. INACCURACY / BULLET BLOOM
			json.inaccuracy = {
				"stand": 2.8,
				"move": 5.8,
				"sneak": 1.8,
				"lie": 0.8,
				"aim": 0.08
			};
			break;
		case "hamster:martinihenry_data":

			// B. DAMAGE & PENETRATION PROFILE
			json.bullet.damage = 20;
			json.bullet.extra_damage.armor_ignore = 0.30;

			// Damage Falloff Array [Distance in Blocks, Resulting Damage Value]
			json.bullet.extra_damage.damage_adjust = [
				{"distance": 10, "damage": 20},
				{"distance": 25, "damage": 17},
				{"distance": 50, "damage": 12},
				{"distance": "infinite", "damage": 8}
			];

			// C. INACCURACY / BULLET BLOOM
			json.inaccuracy = {
				"stand": 3.0,
				"move": 6.0,
				"sneak": 2.0,
				"lie": 1.0,
				"aim": 0.1
			};
			break;
		case "hamster:one_barrel_data":

			// B. DAMAGE & PENETRATION PROFILE
			json.bullet.damage = 30;
			json.bullet.extra_damage.armor_ignore = 0.10;

			// Damage Falloff Array [Distance in Blocks, Resulting Damage Value]
			json.bullet.extra_damage.damage_adjust = [
				{"distance": 10, "damage": 30},
				{"distance": 25, "damage": 20},
				{"distance": 50, "damage": 10},
				{"distance": "infinite", "damage": 5}
			];

			// C. INACCURACY / BULLET BLOOM
			json.inaccuracy = {
				"stand": 3.2,
				"move": 6.2,
				"sneak": 2.2,
				"lie": 1.2,
				"aim": 0.2
			};
			break;
		case "qkl:1860_data":

			// B. DAMAGE & PENETRATION PROFILE
			json.bullet.damage = 14;
			json.bullet.extra_damage.armor_ignore = 0.12;

			// Damage Falloff Array [Distance in Blocks, Resulting Damage Value]
			json.bullet.extra_damage.damage_adjust = [
				{"distance": 10, "damage": 14},
				{"distance": 25, "damage": 10},
				{"distance": 50, "damage": 6},
				{"distance": "infinite", "damage": 2}
			];

			// C. INACCURACY / BULLET BLOOM
			json.inaccuracy = {
				"stand": 3.2,
				"move": 6.2,
				"sneak": 2.2,
				"lie": 1.2,
				"aim": 0.15
			};
			break;

		case "tacz:m1911_data":

			// B. DAMAGE & PENETRATION PROFILE
			json.bullet.damage = 10;
			json.bullet.extra_damage.armor_ignore = 0.08;

			// Damage Falloff Array [Distance in Blocks, Resulting Damage Value]
			json.bullet.extra_damage.damage_adjust = [
				{"distance": 10, "damage": 10},
				{"distance": 25, "damage": 8},
				{"distance": 50, "damage": 6},
				{"distance": "infinite", "damage": 4}
			];

			// C. INACCURACY / BULLET BLOOM
			json.inaccuracy = {
				"stand": 3.0,
				"move": 6.0,
				"sneak": 2.0,
				"lie": 1.0,
				"aim": 0.2
			};

			// D. RECOIL PROFILE
			json.recoil = {
				"pitch": [
					{ "time": 0, "value": [0.0, 0.0] },    // Lighter, more manageable kick
					{ "time": 0.1, "value": [1.8, 2.3] },
					{ "time": 0.2, "value": [3.8, 4.8] },
					{ "time": 0.4, "value": [-1.8, -1.8] },
					{ "time": 0.6, "value": [0, 0] }
				],
				"yaw": [
					{ "time": 0, "value": [0.0, 0.0] },
					{ "time": 0.1, "value": [-0.3, 0.3] },
					{ "time": 0.3, "value": [-0.6, 0.6] },
					{ "time": 0.5, "value": [0, 0] }
				]
			};
			break;

		case "hamster:makarov_data":

			// B. DAMAGE & PENETRATION PROFILE
			json.bullet.damage = 8;
			json.bullet.extra_damage.armor_ignore = 0.06;

			// Damage Falloff Array [Distance in Blocks, Resulting Damage Value]
			json.bullet.extra_damage.damage_adjust = [
				{"distance": 10, "damage": 8},
				{"distance": 25, "damage": 6},
				{"distance": 50, "damage": 3},
				{"distance": "infinite", "damage": 2}
			];

			// C. INACCURACY / BULLET BLOOM
			json.inaccuracy = {
				"stand": 3.2,
				"move": 6.2,
				"sneak": 2.2,
				"lie": 1.2,
				"aim": 0.25
			};
			break;

		case "hamster:lugerp08_data":

			// B. DAMAGE & PENETRATION PROFILE
			json.bullet.damage = 8;
			json.bullet.extra_damage.armor_ignore = 0.07;

			// Damage Falloff Array [Distance in Blocks, Resulting Damage Value]
			json.bullet.extra_damage.damage_adjust = [
				{"distance": 10, "damage": 8},
				{"distance": 25, "damage": 6},
				{"distance": 50, "damage": 5},
				{"distance": "infinite", "damage": 3}
			];

			// C. INACCURACY / BULLET BLOOM
			json.inaccuracy = {
				"stand": 3.0,
				"move": 6.0,
				"sneak": 2.0,
				"lie": 1.0,
				"aim": 0.22
			};
			break;

		case "hamster:webley_data":

			// B. DAMAGE & PENETRATION PROFILE
			json.bullet.damage = 12;
			json.bullet.extra_damage.armor_ignore = 0.15;

			// Damage Falloff Array [Distance in Blocks, Resulting Damage Value]
			json.bullet.extra_damage.damage_adjust = [
				{"distance": 10, "damage": 12},
				{"distance": 25, "damage": 10},
				{"distance": 50, "damage": 8},
				{"distance": "infinite", "damage": 6}
			];

			// C. INACCURACY / BULLET BLOOM
			json.inaccuracy = {
				"stand": 3.5,
				"move": 6.5,
				"sneak": 2.5,
				"lie": 1.5,
				"aim": 0.16
			};
			break;

		case "hamster:nagantm1895_data":

			// B. DAMAGE & PENETRATION PROFILE
			json.bullet.damage = 10;
			json.bullet.extra_damage.armor_ignore = 0.08;

			// Damage Falloff Array [Distance in Blocks, Resulting Damage Value]
			json.bullet.extra_damage.damage_adjust = [
				{"distance": 10, "damage": 10},
				{"distance": 25, "damage": 8},
				{"distance": 50, "damage": 6},
				{"distance": "infinite", "damage": 4}
			];

			// C. INACCURACY / BULLET BLOOM
			json.inaccuracy = {
				"stand": 3.4,
				"move": 6.4,
				"sneak": 2.4,
				"lie": 1.4,
				"aim": 0.12
			};
			break;

		case "hamster:mp18_data":

			// B. DAMAGE & PENETRATION PROFILE
			json.bullet.damage = 8;
			json.bullet.extra_damage.armor_ignore = 0.1;

			// Damage Falloff Array [Distance in Blocks, Resulting Damage Value]
			json.bullet.extra_damage.damage_adjust = [
				{"distance": 10, "damage": 8},
				{"distance": 25, "damage": 7},
				{"distance": 50, "damage": 4},
				{"distance": "infinite", "damage": 2}
			];

			// C. INACCURACY / BULLET BLOOM
			json.inaccuracy = {
				"stand": 3.6,
				"move": 6.6,
				"sneak": 2.6,
				"lie": 1.6,
				"aim": 0.15
			};
			break;

		case "tacz:db_long_data":

			// B. DAMAGE & PENETRATION PROFILE
			json.bullet.damage = 30;
			json.bullet.extra_damage.armor_ignore = 0.1;

			// Damage Falloff Array [Distance in Blocks, Resulting Damage Value]
			json.bullet.extra_damage.damage_adjust = [
				{"distance": 10, "damage": 30},
				{"distance": 25, "damage": 20},
				{"distance": 50, "damage": 10},
				{"distance": "infinite", "damage": 5}
			];

			// C. INACCURACY / BULLET BLOOM
			json.inaccuracy = {
				"stand": 3.0,
				"move": 6.0,
				"sneak": 2.0,
				"lie": 1.0,
				"aim": 0.15
			};
			break;

		case "tacz:db_short_data":

			// B. DAMAGE & PENETRATION PROFILE
			json.bullet.damage = 30;
			json.bullet.extra_damage.armor_ignore = 0.05;

			// Damage Falloff Array [Distance in Blocks, Resulting Damage Value]
			json.bullet.extra_damage.damage_adjust = [
				{"distance": 10, "damage": 30},
				{"distance": 25, "damage": 15},
				{"distance": 50, "damage": 7},
				{"distance": "infinite", "damage": 2}
			];

			// C. INACCURACY / BULLET BLOOM
			json.inaccuracy = {
				"stand": 3.2,
				"move": 6.2,
				"sneak": 2.2,
				"lie": 1.2,
				"aim": 0.2
			};
			break;

		case "hamster:m1887_data":

			// B. DAMAGE & PENETRATION PROFILE
			json.bullet.damage = 30;
			json.bullet.extra_damage.armor_ignore = 0.1;

			// Damage Falloff Array [Distance in Blocks, Resulting Damage Value]
			json.bullet.extra_damage.damage_adjust = [
				{"distance": 10, "damage": 30},
				{"distance": 25, "damage": 20},
				{"distance": 50, "damage": 10},
				{"distance": "infinite", "damage": 5}
			];

			// C. INACCURACY / BULLET BLOOM
			json.inaccuracy = {
				"stand": 3.0,
				"move": 6.0,
				"sneak": 2.0,
				"lie": 1.0,
				"aim": 0.25
			};
			break;

		case "tacz:springfield1873_data":

			// B. DAMAGE & PENETRATION PROFILE
			json.bullet.damage = 20;
			json.bullet.extra_damage.armor_ignore = 0.3;

			// Damage Falloff Array [Distance in Blocks, Resulting Damage Value]
			json.bullet.extra_damage.damage_adjust = [
				{"distance": 10, "damage": 20},
				{"distance": 25, "damage": 17},
				{"distance": 50, "damage": 12},
				{"distance": "infinite", "damage": 8}
			];

			// C. INACCURACY / BULLET BLOOM
			json.inaccuracy = {
				"stand": 3.0,
				"move": 6.0,
				"sneak": 2.0,
				"lie": 1.0,
				"aim": 0.2
			};
			break;

		case "hamster:mg1417_data":

			// B. DAMAGE & PENETRATION PROFILE
			json.bullet.damage = 20;
			json.bullet.extra_damage.armor_ignore = 0.3;

			// Damage Falloff Array [Distance in Blocks, Resulting Damage Value]
			json.bullet.extra_damage.damage_adjust = [
				{"distance": 10, "damage": 20},
				{"distance": 25, "damage": 17},
				{"distance": 50, "damage": 12},
				{"distance": "infinite", "damage": 8}
			];

			// C. INACCURACY / BULLET BLOOM
			json.inaccuracy = {
				"stand": 3.8,
				"move": 7.2,
				"sneak": 2.8,
				"lie": 1.5,
				"aim": 0.25
			};
			break;

		case "hamster:madsen_data":

			// B. DAMAGE & PENETRATION PROFILE
			json.bullet.damage = 20;
			json.bullet.extra_damage.armor_ignore = 0.3;

			// Damage Falloff Array [Distance in Blocks, Resulting Damage Value]
			json.bullet.extra_damage.damage_adjust = [
				{"distance": 10, "damage": 20},
				{"distance": 25, "damage": 17},
				{"distance": 50, "damage": 12},
				{"distance": "infinite", "damage": 8}
			];

			// C. INACCURACY / BULLET BLOOM
			json.inaccuracy = {
				"stand": 3.7,
				"move": 7.0,
				"sneak": 2.7,
				"lie": 1.4,
				"aim": 0.23
			};
			break;

		case "hamster:gew98_data":

			// B. DAMAGE & PENETRATION PROFILE
			json.bullet.damage = 25;
			json.bullet.extra_damage.armor_ignore = 0.5;

			// Damage Falloff Array [Distance in Blocks, Resulting Damage Value]
			json.bullet.extra_damage.damage_adjust = [
				{"distance": 10, "damage": 25},
				{"distance": 25, "damage": 22},
				{"distance": 50, "damage": 16},
				{"distance": "infinite", "damage": 8}
			];

			// C. INACCURACY / BULLET BLOOM
			json.inaccuracy = {
				"stand": 2.8,
				"move": 5.8,
				"sneak": 1.8,
				"lie": 0.8,
				"aim": 0.1
			};
			break;

		case "hamster:m1903_data":

			// B. DAMAGE & PENETRATION PROFILE
			json.bullet.damage = 25;
			json.bullet.extra_damage.armor_ignore = 0.5;

			// Damage Falloff Array [Distance in Blocks, Resulting Damage Value]
			json.bullet.extra_damage.damage_adjust = [
				{"distance": 10, "damage": 25},
				{"distance": 25, "damage": 23},
				{"distance": 50, "damage": 18},
				{"distance": "infinite", "damage": 9}
			];

			// C. INACCURACY / BULLET BLOOM
			json.inaccuracy = {
				"stand": 2.7,
				"move": 5.7,
				"sneak": 1.7,
				"lie": 0.7,
				"aim": 0.09
			};
			break;

		case "hamster:smle_mk3_data":

			// B. DAMAGE & PENETRATION PROFILE
			json.bullet.damage = 23;
			json.bullet.extra_damage.armor_ignore = 0.55;

			// Damage Falloff Array [Distance in Blocks, Resulting Damage Value]
			json.bullet.extra_damage.damage_adjust = [
				{"distance": 10, "damage": 23},
				{"distance": 25, "damage": 20},
				{"distance": 50, "damage": 14},
				{"distance": "infinite", "damage": 7}
			];

			// C. INACCURACY / BULLET BLOOM
			json.inaccuracy = {
				"stand": 2.9,
				"move": 5.9,
				"sneak": 1.9,
				"lie": 0.9,
				"aim": 0.11
			};
			break;

		case "hamster:mosin9130_data":

			// B. DAMAGE & PENETRATION PROFILE
			json.bullet.damage = 25;
			json.bullet.extra_damage.armor_ignore = 0.5;

			// Damage Falloff Array [Distance in Blocks, Resulting Damage Value]
			json.bullet.extra_damage.damage_adjust = [
				{"distance": 10, "damage": 25},
				{"distance": 25, "damage": 20},
				{"distance": 50, "damage": 16},
				{"distance": "infinite", "damage": 8}
			];

			// C. INACCURACY / BULLET BLOOM
			json.inaccuracy = {
				"stand": 2.8,
				"move": 5.8,
				"sneak": 1.8,
				"lie": 0.8,
				"aim": 0.1
			};
			break;

		case "hamster:type99_data":

			// B. DAMAGE & PENETRATION PROFILE
			json.bullet.damage = 24;
			json.bullet.extra_damage.armor_ignore = 0.52;

			// Damage Falloff Array [Distance in Blocks, Resulting Damage Value]
			json.bullet.extra_damage.damage_adjust = [
				{"distance": 10, "damage": 24},
				{"distance": 25, "damage": 20},
				{"distance": 50, "damage": 16},
				{"distance": "infinite", "damage": 8}
			];

			// C. INACCURACY / BULLET BLOOM
			json.inaccuracy = {
				"stand": 2.6,
				"move": 5.6,
				"sneak": 1.6,
				"lie": 0.6,
				"aim": 0.08
			};
			break;

		case "hamster:lebel1886_data":

			// B. DAMAGE & PENETRATION PROFILE
			json.bullet.damage = 22;
			json.bullet.extra_damage.armor_ignore = 0.4;

			// Damage Falloff Array [Distance in Blocks, Resulting Damage Value]
			json.bullet.extra_damage.damage_adjust = [
				{"distance": 10, "damage": 22},
				{"distance": 25, "damage": 18},
				{"distance": 50, "damage": 12},
				{"distance": "infinite", "damage": 6}
			];

			// C. INACCURACY / BULLET BLOOM
			json.inaccuracy = {
				"stand": 3.0,
				"move": 6.0,
				"sneak": 2.0,
				"lie": 1.0,
				"aim": 0.12
			};
			break;

		case "hamster:krag_data":

			// B. DAMAGE & PENETRATION PROFILE
			json.bullet.damage = 23;
			json.bullet.extra_damage.armor_ignore = 0.45;

			// Damage Falloff Array [Distance in Blocks, Resulting Damage Value]
			json.bullet.extra_damage.damage_adjust = [
				{"distance": 10, "damage": 23},
				{"distance": 25, "damage": 18},
				{"distance": 50, "damage": 13},
				{"distance": "infinite", "damage": 6}
			];

			// C. INACCURACY / BULLET BLOOM
			json.inaccuracy = {
				"stand": 3.0,
				"move": 6.0,
				"sneak": 2.0,
				"lie": 1.0,
				"aim": 0.11
			};
			break;

		case "hamster:berthier_data":

			// B. DAMAGE & PENETRATION PROFILE
			json.bullet.damage = 23;
			json.bullet.extra_damage.armor_ignore = 0.46;

			// Damage Falloff Array [Distance in Blocks, Resulting Damage Value]
			json.bullet.extra_damage.damage_adjust = [
				{"distance": 10, "damage": 23},
				{"distance": 25, "damage": 18},
				{"distance": 50, "damage": 13},
				{"distance": "infinite", "damage": 6}
			];

			// C. INACCURACY / BULLET BLOOM
			json.inaccuracy = {
				"stand": 3.1,
				"move": 6.1,
				"sneak": 2.1,
				"lie": 1.1,
				"aim": 0.12
			};
			break;

		case "hamster:win1873_data":

			// B. DAMAGE & PENETRATION PROFILE
			json.bullet.damage = 16;
			json.bullet.extra_damage.armor_ignore = 0.20;

			// Damage Falloff Array [Distance in Blocks, Resulting Damage Value]
			json.bullet.extra_damage.damage_adjust = [
				{"distance": 10, "damage": 16},
				{"distance": 25, "damage": 12},
				{"distance": 50, "damage": 8},
				{"distance": "infinite", "damage": 4}
			];

			// C. INACCURACY / BULLET BLOOM
			json.inaccuracy = {
				"stand": 3.1,
				"move": 6.1,
				"sneak": 2.1,
				"lie": 1.1,
				"aim": 0.13
			};
			break;

		case "hamster:win1894_data":

			// B. DAMAGE & PENETRATION PROFILE
			json.bullet.damage = 18;
			json.bullet.extra_damage.armor_ignore = 0.30;

			// Damage Falloff Array [Distance in Blocks, Resulting Damage Value]
			json.bullet.extra_damage.damage_adjust = [
				{"distance": 10, "damage": 18},
				{"distance": 25, "damage": 14},
				{"distance": 50, "damage": 10},
				{"distance": "infinite", "damage": 6}
			];

			// C. INACCURACY / BULLET BLOOM
			json.inaccuracy = {
				"stand": 3.0,
				"move": 6.0,
				"sneak": 2.0,
				"lie": 1.0,
				"aim": 0.11
			};
			break;

		case "hamster:m1903_data":

			// B. DAMAGE & PENETRATION PROFILE
			json.bullet.damage = 24;
			json.bullet.extra_damage.armor_ignore = 0.48;

			// Damage Falloff Array [Distance in Blocks, Resulting Damage Value]
			json.bullet.extra_damage.damage_adjust = [
				{"distance": 10, "damage": 24},
				{"distance": 25, "damage": 20},
				{"distance": 50, "damage": 16},
				{"distance": "infinite", "damage": 8}
			];

			// C. INACCURACY / BULLET BLOOM
			json.inaccuracy = {
				"stand": 2.6,
				"move": 5.6,
				"sneak": 1.6,
				"lie": 0.6,
				"aim": 0.08
			};
			break;
		// Future weapons can be chained below this line inside the switch block
	}

	return event.setJson(JSON.stringify(json));
}