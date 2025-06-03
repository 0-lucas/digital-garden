# What is it?

In [[Software Engineering]], *authentication* and *authorization* are used to **secure applications** and **sensitive data**. You may find several **different methods** of doing so, depending on the system which asks for it.
A system can only be considered secure if **both concepts are applied and correctly configured**.

![[auth.png]]
___
# Factors of authentication

The most three common factors used to *authenticate* or *authorize* users are:

- ##### **Something you know**, such as a password
- ##### **Something you have**, such as a smart card
- ##### **Something you are**, such as a fingerprint
____
# What's the difference?
## Authentication

*Authentication* is a process that verifies **if a user is what they claim to be**, checking if the **information given by the user is correct** with that previously informed or with a **true external source**. This is normally done by **prompting the user to input** it's password or another authentication method.
___
## Authorization

*Authorization*, on the other hand, is a **process which focuses on giving the user access to a specific resource**, inside a system which the **user is already authenticated**. In this case, the **user's identity is known**, and because of that, will be **analyzed to grant access or not** to a resource.
Because of that, the *authorization* logic is done **without the user's input**, being done **internally in the system**, and maintained through the system's security.

![[Auth vs auth.png]]