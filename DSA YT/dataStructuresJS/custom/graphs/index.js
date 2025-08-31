/* A graph is a non-linear data structure that models relationships between objects. It contains of 2 main
 components: Vertices (Nodes)  & Edges 
 Vertices(Nodes) -  These represent the individual entities within the graph
 Edges - These connect vertices, signifying a relationship or connection between them
 */

class Graph {
	constructor() {
		this.adjacencyList = {};
	}

	addVertex(vtx) {
		if (!this.adjacencyList[vtx]) {
			this.adjacencyList[vtx] = [];
			return true;
		}

		return false;
	}

	addEdge(vtx1, vtx2) {
		if (this.adjacencyList[vtx1] && this.adjacencyList[vtx2]) {
			this.adjacencyList[vtx1].push(vtx2);
			this.adjacencyList[vtx2].push(vtx1);
			return true;
		}
		return false;
	}

	removeEdge(vtx1, vtx2) {
		if (this.adjacencyList[vtx1] && this.adjacencyList[vtx2]) {
			this.adjacencyList[vtx1] = this.adjacencyList[vtx2].filter(
				v => v !== vtx2
			);
			this.adjacencyList[vtx2] = this.adjacencyList[vtx1].filter(
				v => v !== vtx1
			);

			return true;
		}
		return false;
	}

	removeVertex(vtx) {
		if (!this.adjacencyList[vtx]) return undefined;

		for (let neighbor of this.adjacencyList[vtx]) {
			this.adjacencyList[neighbor] = this.adjacencyList[neighbor].filter(
				v => v !== vtx
			);
		}

		delete this.adjacencyList[vtx];
		return this;
	}
}

const graph = new Graph();
console.log(graph.addVertex("A"));
console.log(graph.addVertex("B"));
console.log(graph.addVertex("C"));
console.log(graph.addVertex("D"));
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("A", "D");
graph.addEdge("B", "D");
graph.addEdge("C", "D");
console.log(graph);
//graph.removeEdge("A", "B");
graph.removeVertex("D");
console.log(graph);
