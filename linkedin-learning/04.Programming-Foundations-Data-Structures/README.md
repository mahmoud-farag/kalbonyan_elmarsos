# Section Notes

## types of data structures:

- arrays.
- linked-lists.
- queues.
- stacks.
- hash maps.

## 01.Introduction to data structure:

- data is the information that stored or processed by a computer.

### data types:

    * numbers: {whole:{short/int/long},decimal{float/double}}.
    * Boolean{true/false}.
    * Strings.

Note: primitive VS reference data types

## 02.Arrays:

- the array is a collection of elements, where each item is identified by an index or key.
- indexes begins from zero.
- you can create multidimensional array.

* jagged array which can have elements of different dimensions and sizes.
* array saved in a predefined memory area.

- arrays in some languages sizable like{javascript, python} and in others is not like {java, c++}.

* Big o Notation==> a Notation used to describe the performance or complexity of an algorithm.
* O(1) Time ==> a constant time.

### big O of {insertion, deletion, searching, sorting}

- insertion==> best-case:O(1), worst-case: O(n).
- deletion==> best-case:O(1) , worst-case:O(n)
- searching==> best-case:O(1) , worst-case:O(n)
- sorting==> depends on sorting algorithm {insertion, merge,heap, bubble, bucket, radix }

## 03.Linked-lists:

in lists the elements are liked using a pointers

- lists stored randomly in memory.

### linked list operations:

- insertion==> best-case:O(1), worst-case: O(1).

* access==> best-case:O(1), worst-case: O(n).
* deletion==> best-case:O(1) , worst-case:O(n)
* searching==> best-case:O(1) , worst-case:O(n)

## 04. Stacks && queues:

- stack ==> last-in-first-out.
  - pors:
    - Reversing things.
    - keeping track of state.
    - add/remove from back of a structure.

* queue ==> first-in-last-out.
  - Enqueue: adding item to a list.
  - Dequeue: removing item from a list.
  * see the first item in the list without removing it.

## 05.Hash based:

a Collection of key/value pairs

- Hashing==> data conversion process.

* hashing done in one way.
* Collision==> when two inputs produce the same hash value || when a two keys have the same hash value.
* decrypt is two way.
* hash map operations always take the same amount of time, regardless of the size of the hash table.

## 06. Trees && Graphs:

- Set:
  - A collection of unique items.
  - order does not matter.
  - none of the elements are duplicated.

* binary tree==> a tree which have only two children.
* Heap==> a data structure implemented as binary tree.
* binary tree Big O ==> balanced:O(log(n)), unbalanced: O(n)
