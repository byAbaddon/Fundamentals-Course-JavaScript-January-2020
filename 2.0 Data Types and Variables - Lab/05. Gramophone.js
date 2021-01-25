function gramophone(albumName, bandName, songName) {
  let time = (albumName.length * bandName.length) * (songName.length / 2)
  let rotations = Math.ceil(time / 2.5)
  return `The plate was rotated ${rotations} times.`
}

//console.log(gramophone('Black Sabbath', 'Paranoid', 'War Pigs'))