// First Approach - Linked list with prev and next refs that increments another node comparing with prev and next nodes, swapping them up when necessary. (https://leetcode.com/problems/all-oone-data-structure/solutions/1176997/typescript-o-1-solution/?envType=daily-question&envId=2024-09-29)
class DNode {
	freq: number; // Used as ID for the node. Can't directly compare 2 DNodes
	keys: Set<string>;
	prev: DNode;
	next: DNode;

	constructor(freq) {
		this.freq = freq;
		this.keys = new Set<string>();
		this.prev = null;
		this.next = null;
	}
}

class AllOne {
	head: DNode;
	tail: DNode;
	map: Map<string, DNode>;

	constructor() {
		this.head = null;
		this.tail = null;
		this.map = new Map<string, DNode>();
	}

	inc(key: string): void {
		if (this.map.has(key)) {
			const cur: DNode = this.map.get(key);
			cur.keys.delete(key);
			if (cur.next) {
				if (cur.next.freq === cur.freq + 1) {
					cur.next.keys.add(key);
				}
				else {
					const tempNext: DNode = cur.next;
					const newNext: DNode = new DNode(cur.freq + 1);
					newNext.keys.add(key);
					cur.next = newNext;
					newNext.prev = cur;
					newNext.next = tempNext;
					tempNext.prev = newNext;
				}
			}
			else {
				const next: DNode = new DNode(cur.freq + 1);
				next.keys.add(key);
				next.prev = cur;
				cur.next = next;
				if (this.tail.freq === cur.freq) {
					this.tail = next;
				}
			}
			this.map.set(key, cur.next);
			if (!cur.keys.size) {
				this.removeNode(cur);
			}
		}
		else {
			if (this.head) {
				if (this.head.freq === 1) {
					this.head.keys.add(key);
				}
				else {
					const tempHead: DNode = this.head;
					const newHead: DNode = new DNode(1);
					newHead.keys.add(key);
					this.head = newHead;
					newHead.next = tempHead;
					tempHead.prev = newHead;
				}
			}
			else {
				this.head = new DNode(1);
				this.head.keys.add(key);
				this.tail = this.head;
			}
			this.map.set(key, this.head);
		}
	}

	dec(key: string): void {
		// Empty or doesn't exist
		if (!this.head || !this.map.has(key)) {
			return;
		}
		const cur: DNode = this.map.get(key);
		cur.keys.delete(key);
		if (cur.prev) {
			if (cur.prev.freq === cur.freq - 1) {
				cur.prev.keys.add(key);
			}
			else {
				const tempPrev: DNode = cur.prev;
				const newPrev: DNode = new DNode(cur.freq - 1);
				newPrev.keys.add(key);
				cur.prev = newPrev;
				newPrev.next = cur;
				newPrev.prev = tempPrev;
				tempPrev.prev = newPrev;
			}
			this.map.set(key, cur.prev);
		}
		else {
			if (cur.freq === 1) {
				this.map.delete(key);
			}
			else {
				const newHead: DNode = new DNode(cur.freq - 1);
				newHead.keys.add(key);
				cur.prev = newHead;
				newHead.next = cur;
				this.head = newHead;
				this.map.set(key, cur.prev);
			}
		}
		if (!cur.keys.size) {
			this.removeNode(cur);
		}
	}

	private removeNode(n: DNode): void {
		if (n.prev) {
			n.prev.next = n.next;
		}
		if (n.next) {
			n.next.prev = n.prev;
		}
		if (n.freq === this.head.freq) {
			this.head = n.next;
		}
		if (n.freq === this.tail.freq) {
			this.tail = n.prev;
		}
	}

	getMaxKey(): string {
		if (!this.tail) {
			return '';
		}
		return this.tail.keys.values().next().value;
	}

	getMinKey(): string {
		if (!this.head) {
			return '';
		}
		return this.head.keys.values().next().value;
	}
}