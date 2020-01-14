const LinkedList = require('./linked-list');
const SLL = new LinkedList();

function main() {
	SLL.insertLast('Apollo')
	SLL.insertLast('Boomer')
	SLL.insertLast('Helo')
	SLL.insertLast('Husker')
	SLL.insertLast('Starbuck')
}

main();
//SLL.printList();

SLL.insertLast('Tauhida');
SLL.printList();
//SLL.size_of_list();

//SLL.remove('Husker');
//SLL.printList();