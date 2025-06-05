# What is it?

*Services*  in [[ASP.NET]], are **basically classes that can be easily reused in different locations**, without having to worry about instantiating them in their dependence.
For example, the class that's responsible for connecting to databases is a *service*. 
___
# Creating services

Any *class* that implements an *interface* can act as a *service*. 
Let's create a example:

```csharp
public interface IService
{
	string Method();
}

public class MyService: IService
{
	public string Method()
	{
		return "Returning value";
	}
}
```

The **code above is not yet a *service***. To make it a *service*, it needs to be **registered as *service***, before building the application. There're three main ways to register services:

- ##### Singleton
	Used when **only one instance** of the *service* will be ran for the **application entire lifetime**. All requests will go through the **same instance of the *service***.

- ##### Scoped
	Each scope will create its own single instance of the *service*. **Each request creates its own instance**, per scope.

- ##### Transient
	**Every request will create a different instance**, every time it's requested.

Let's register the created *service* as a *singleton*:

```csharp
// Before building the application
builder.Services.AddSingleton<IService, MyService>();

// var app = builder.Build();
```

Now, the *service* is **registered** to the [[Dependency Injection]] container. Now [[Dependency Injection]] will manage and distribute the *service* as needed.
___
# Using the service

One can access different *services* in **various parts of the application** using [[Dependency Injection]], injecting it in a middleware component.
