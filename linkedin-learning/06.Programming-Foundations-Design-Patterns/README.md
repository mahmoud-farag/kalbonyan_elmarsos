# Section Notes

## 01. Design patterns:

==> its just reusing experience and pre defined solutions and algorithms
==> general solutions for a common problems.

### Object-oriented design essentials

    * Inheritance.
    * polymorphism.
    * abstraction.
    * encapsulation.

### benefits:

     * code reusability.
     * building resilient code.
     * preparing for future adding.

## 02. The strategy pattern:

    *  inheritance problems:
       * subclasses must inherit all super class feature (even un wanted ones )
    * interfaces problems:
      * it destroy code reusability principles.
    * Has-a{composition} better than   Is-a{inheritance}:
      * classes should achieve code reuse using composition rather than inheritance form a superclass.

    caution==> in some cases composition is better than inheritance form making your code reusable.

## 03. The adapter pattern:

==> a glue code/ interface which used to adapt two different classes/interfaces without chaning it.
==> this pattern converts the interface of a class into another interface that clients expect. it allows classes to work together that could not otherwise because of incompatible interfaces.

## 04. The Observer pattern:

==> loosely coupled {have little knowledge about each other} patterns which means that a two classes interact with each other without any direct dependency which also means if you remove a class form the sys, it still working fine !

==>it defines a one-to-many dependency between objects so that when one object changes state, all of its dependents are notified and updated automatically

## 05. The Decorator pattern:

### the Open-closed Principle =>

classes should be open for extension but closed for modification.

- inheritance drawbacks:
  - powerful, but it can lead to inflexible designs.
  - all classes inherit the same behavior.
- composition advatanges:
  - we can still inherit behavior.
  - we can make dynamic runtime decisions.
  - we can add new behavior without altering existing code.
  - we can include behaviors not considered by the creator.

## 06. The Iterator pattern:

==> provides a way to access the elements of an aggregate object sequentially without exposing its underline representation.

- how to iterate over an aggregate Object:
  - ask object for its iterator.
  - use the iterator to iterate through the items in the aggregate.
  - iteration code now works with any kind of aggregate object

* single responsibility principle
  ==> the class should have only one reason to change.

## 06. The Factory pattern:

==> its defines an interface for creating an object, but lets subclasses decide which class to instantiate. factory method lets a class defer instantiation to subclasses.
