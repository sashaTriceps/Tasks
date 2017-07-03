const graph = []
for (let i = 0; i < 50; i++)
  graph.push({value: Math.random(), edges: []})
for (let i = 0; i < 100; i++) {
  let from = graph[Math.floor(Math.random() * graph.length)]
  let to   = graph[Math.floor(Math.random() * graph.length)]
  if (from.edges.indexOf(to) != -1) continue
  from.edges.push(to)
}

function connectedValue(node) {
  let sum = 0;
  let set = new Set();
  
  for (let key in node) {
    if (typeof node[key] !== 'object') {
      set.add(node[key]);

    } else {
      setInterval(function() {connectedValue(node[key])}, 0);
    }
  }
  for (let value of set.values()) {
    sum += value;
  }

  return sum;
}

console.log(connectedValue(graph[0]))
console.log(connectedValue(graph[24]))
console.log(connectedValue(graph[49]))