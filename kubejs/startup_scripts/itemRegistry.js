//Microminers
StartupEvents.registry('item', event => {

    event.create('microminer_t1').displayName("\u00A7eSteel Plated Micro Miner [Tier One]").maxStackSize(16)
    event.create('microminer_t2').displayName("\u00A7eTitanium Plated Micro Miner [Tier Two]").maxStackSize(16)
    event.create('microminer_t3').displayName("\u00A7eTungsten Carbide Plated Micro Miner [Tier Three]").maxStackSize(16)
    event.create('microminer_t4').displayName("\u00A7eSignalum Plated Micro Miner [Tier Four]").maxStackSize(16)
    event.create('microminer_t5').displayName("\u00A7bIridium Plated Micro Miner [Tier Five]").maxStackSize(16)
    event.create('microminer_t6').displayName("\u00A7bEnderium Plated Micro Miner [Tier Six]").maxStackSize(16)
    event.create('microminer_t7').displayName("\u00A7bDraconium Plated Micro Dragon Hunter [Tier Seven]").maxStackSize(16)
    event.create('microminer_t8').displayName("\u00A7dCrystal Matrix Plated Micro Leviathan Slayer [Tier Eight]").maxStackSize(16)
    event.create('microminer_t9').displayName("\u00A7dEternium Plated Micro Sun Eater [Tier Nine]").maxStackSize(16)
    event.create('microminer_t10').displayName("\u00A7dNeutronium Plated Micro Universe Harvester [Tier Ten]").maxStackSize(16)

    //Microminer Components

    event.create('basic_mining_laser').displayName("\u00A7eBasic Mining Laser")
    event.create('supercharged_laser_array').displayName("\u00A7eSupercharged Laser Array")
    event.create('basic_micro_miner_guidance_system').displayName("\u00A7eBasic Micro Miner Guidance System")
    event.create('advanced_micro_miner_guidance_system').displayName("\u00A7eAdvanced Micro Miner Guidance System")
    event.create('reinforced_mining_laser').displayName("\u00A7bReinforced Mining Laser")
    event.create('warp_engine').displayName("\u00A7dWarp Engine")
    event.create('universal_navigator').displayName("\u00A7dUniversal Navigator")
    event.create('quantum_fluxed_eternium_heavy_plating').displayName("\u00A7dQuantum Fluxed Eternium Heavy Plating")

    //Nomi Coins
    event.create('nomipenny').displayName("Nomipenny [1]")
    event.create('nominickel').displayName("\u00A7eNominickel [5]")
    event.create('nomiquarter').displayName("\u00A7bNomiquarter [25]")
    event.create('nomidollar').displayName("\u00A7dNomidollar [100]")





})


Platform.mods.kubejs.name = "Nomi Labs"