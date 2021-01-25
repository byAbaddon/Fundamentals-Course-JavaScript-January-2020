function songs(arr) {

  let loop = arr.shift()
  let typeSong = arr.pop()

  class Song {
    constructor(typeList, name, time) {
      this.typeList = typeList
      this.name = name
      this.time = time
    }
  }

  for (let i = 0; i < loop; i++) {
    let [type, name, time] = arr[i].split('_')

    let listSongs = new Song(type, name, time)

    if (typeSong === 'all') {
      console.log(listSongs.name);
    } else if ((listSongs.typeList === typeSong) === true) {
      console.log(listSongs.name);

    }
  }
}

//songs([3, 'favourite_DownTown_3:14', 'favourite_Kiss_4:16', 'favourite_Smooth Criminal_4:01', 'favourite'])
//songs([2, 'like_Replay_3:15', 'ban_Photoshop_3:48', 'all'])