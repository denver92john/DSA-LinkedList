const _Node = require('./node');

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    insertFirst(item) {
        this.head = new _Node(item, this.head);
    }

    insertLast(item) {
        if(this.head === null) {
            this.insertFirst(item);
        } else {
            let tempNode = this.head;
            while(tempNode.next !== null) {
                tempNode = tempNode.next;
            }
            tempNode.next = new _Node(item, null);
        }
        this.size++;
    }

    insertBefore() {}

    insertAt(item, index) {}

    insertAfter() {}

    find(item) {
        let currNode = this.head;
        if(!this.head) {
            return null;
        }
        while(currNode.value !== item) {
            if(currNode.next === null) {
                return null;
            } else {
                currNode = currNode.next;
            }
        }
        return currNode;
    }

    remove(item) {
        if(!this.head) {
            return null;
        }
        if(this.head.value === item) {
            this.head = this.head.next;
            return;
        }
        let currNode = this.head;
        let previousNode = this.head;

        while((currNode !== null) && (currNode.value !== item)) {
            previousNode = currNode;
            currNode = currNode.next;
        }
        if(currNode === null) {
            console.log('Item not found')
            return;
        }
        previousNode.next = currNode.next;
    }

    /* ----- HELPER METHODS ----- */

	printList() {
		let currNode = this.head;
		let str = "";
		while(currNode) {
			str += currNode.value + " ";
			currNode = currNode.next;
		}
		console.log(str);
	}

	size_of_list() {
		console.log(this.size)
	}
}

module.exports = LinkedList;