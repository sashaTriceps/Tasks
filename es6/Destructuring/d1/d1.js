function go(options) {
  let {speed = 4, hyperdrive = false, frobnifier = true} = options
  console.log("speed=", speed,
              "hyperdrive:", hyperdrive,
              "frobnifier:", frobnifier)
}

go({speed: 5})