# Design Document
[//]: # (<<<<<<< HEAD)
[//]: # (### Design decisions, including rationale &#40;include images&#41;)

[//]: # ()
[//]: # (### Alternative designs we considered, including images)

[//]: # (=======)
### Design decisions
Last time, we only considered having only one list (instead of having two lists of uncompleted and completed), but we
felt that it is only fair to let the user see the completed tasks, so now we have a new section called Completed.


![Clump format](clump.png)

### Alternative designs
We considered using a pop-up message that a user can respond to when they want to add a to-do, but we felt like that 
would make the app too complicated. 

![Add_delete format](add_delete.png)


[//]: # (>>>>>>> 2313ce5d6f6d0d1b063e67c572bb022301b3bb2d)
### User testing
We tested with the same potential user as last time, and she liked that we changed from "Add a todo" to "Add." She also 
enjoyed that the "Done" button no longer exists, which she mentioned last time as redundant. 


### Challenges we faced
We decided to introduce a whole new section "Completed," which shows all the items that are marked as completed. This
posed some challenges because we had to implement a couple of more constructors to keep track of all the different todos.

### Parts of the design we're most proud of
As was the case last time, we feel proud of the simplicity of the color and structure, which leads to the ease of
understanding and using. Having "Completed" section also added a different layer to this app as a todo checker!