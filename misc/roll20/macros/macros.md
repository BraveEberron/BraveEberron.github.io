# Tavern Name Generator
/w gm &{template:default} {{name=Tavern Name Generator}} {{ [[1t[TavernNameFirst]]][[1t[TavernNameLast]]] }} {{ [[1t[TavernNameFirst]]][[1t[TavernNameLast]]] }} {{ [[1t[TavernNameFirst]]][[1t[TavernNameLast]]] }} {{  [[1t[TavernNameFirst]]][[1t[TavernNameLast]]] }} {{ [[1t[TavernNameFirst]]][[1t[TavernNameLast]]] }}

# Profession Generator
/w gm &{template:default} {{name=Profession Generator}} {{ [[1t[NPC-Profession]]] }} {{ [[1t[NPC-Profession]]] }} {{ [[1t[NPC-Profession]]] }} {{ [[1t[NPC-Profession]]] }} {{ [[1t[NPC-Profession]]] }}

# Treasure Generator
!rt /w gm &{template:default} {{name=Treasure Generator}} {{ [[1t[treasure]]] }} {{ [[1t[treasure]]] }} {{ [[1t[treasure]]] }} {{  [[1t[treasure]]] }} {{ [[1t[treasure]]] }}

# Daytime
!daytime

# Nighttime
!nighttime

# Global Light
!global-light

# Artifacts
/as "@{character_name}" deals @{level} extra fire damage.
!ammo @{character_id} charges [[-1*(floor(1d@{die} / @{die})) ]] charge

&{template:default} {{name=@{character_name} }} {{ Effect=@{npcUse} }} {{special=@{npcInteraction} }} {{charges lost= [[1d6<2]] }}