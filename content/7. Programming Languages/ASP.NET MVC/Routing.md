# What is it?

*Routing*, in [[ASP.NET]], is the **process of directing HTTP requests** to endpoints, using the [[Middleware Pipeline]] to **process and decide** the endpoint.

Typically, all configuration of *routing* is made inside the [[Middleware Pipeline]].
___
# Routing in ASP.NET MVC

We can define routing for [[Controllers]], using **default routing** with the `.UseRouting()` and `.MapDefaultControllerRoute()` method.

```csharp
var builder = WebApplication.CreateBuilder(args);
builder.Services.AddControllersWithViews(); // Services needed for controllers
var app = builder.Build(); // Set-up middleware

app.UseDefaultFiles();
app.UseStaticFiles();

app.UseRouting(); // Adds route-matching
app.MapDefaultControllerRoute(); // Adds default routing

app.Run();
```

Or, equivalently, one can specify the arguments:

```csharp
app.MapControllerRoute( // Default arguments
	name: "default",
	pattern: "{controller=Home}/{action=Index}/{id}"
);
```

Where the *name* is **not used in the routing itself**, and a *pattern* that describes what **requests should match**. If a request does **not match the pattern**, it will be ignored and typically, a *[[HTTP]] 404 error* will be returned.

The first segment `{controller=Home}` specifies that the **first value** represents a [[Controllers|Controller]], and if not specified, the `HomeController` will be used. Same goes to the second segment, `{action=Index}`, that **specifies the action to be used**, and maps the `Index` action if passed none. The third segment `{id?}` is an **optional parameter**, an represent the `id` variable used in the *action*. 

