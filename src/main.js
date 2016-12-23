var netflix        = Netflix();
var default_volume = 0.3;

netflix.player.on("ready", on_ready);
netflix.player.on("playing", on_playing);

function on_ready (evt) {
    netflix.player.setVolume(default_volume);
}

function on_playing (evt) {
    netflix.player.setVolume(default_volume);
}
