function onEat(event, player, itemStack) {
    const playerLevel = player.getLevel();
    player.setLevel(playerLevel + 20);
    player.sendMessage("来自腐竹:经验等级+20");
}
