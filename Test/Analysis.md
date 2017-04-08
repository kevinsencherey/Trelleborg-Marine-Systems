# Trelleborg Marine Systems UK Ltd
## Programmer Test
### Kevin Sencherey

Using Gitbash, I navigated to the directory containing all the project files using the change directory commands
cd /Desktop/Trelleborg/angular2-programming-test-master

I then run these commands

npm install

npm run build:prod

npm run server:prod instead of npm server:prod

I then visited "http://localhost:8080" using Firefox browser

Q1: Adding a feature to the given component.
To answer the question, I added the ngModel directives to each input tag corresponding to the labels in the add-component.html 
located in angular2-programming-test-master/src/app/add-component

Q2: Fix the code for a given component.
To fix the code for the Add button, I injected the newTodo into the push() method
Also in order not to add an empty item, I added an if statement which hinders adding an empty item, alerting the user to enter an item when they
click on the add button without adding an item.
To fix the code for the Remove button,I used the splice() method and not slice()

Q3: Review the code for a given component.
The placeholder for the Age and Address have not being named appropriately
[placeholder]="'Name'" has been replaced with [placeholder]="'Age'" and [placeholder]="'Address'" respectively.

There are no validations for the Name and Address fields.

There are no validation for numbers in Age and UniqueId columns.
The type in the input tags have been replaced with number in both cases
For example 
<input type="number" class="form-control" [(ngModel)]="newCustomerAge" [placeholder]="'Age'" required />

There  are no required fields for which reason an empty template (with all fields empty) can still added.
The required attribute has being used in all the four input tags

The UniqueId is not Unique in the sense that two or more entries can have the same ID.

To resolve the problem of adding an empty customer data, logic can be added to the addCustomer method to do so